const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const { sendPdfFlow } = require("./sendPdf.flow.js");
const { formFlow } = require("./form.flow.js");
const { gptFlow } = require("./gpt.flow.js");
const {
  flowRecaudacion1,
  flowRecaudacion2,
  flowRecaudacion3,
  flowRecaudacion4,
  flowRecaudacion5,
  flowRecaudacion6,
  flowRecaudacion7,
  flowRecaudacion8,
} = require("./recaudacion.flow.js");

const path = require("path");
const fs = require("fs");

const pathMenuRecaudacion = path.join(__dirname, "../mensajes", "menuRecaudacion.txt");
const menuTextRecaudacion = fs.readFileSync(pathMenuRecaudacion, 'utf8');

const pathMenu = path.join(__dirname, "../mensajes", "menu.txt");
const menuText = fs.readFileSync(pathMenu, "utf8");
const srcPath = path.join(__dirname, "../src", "Horarios habituales.png");

const flow1 = addKeyword("1") //Opcion 1 del menu
  .addAnswer(
    "👀 *Recordá* que para realizar cualquier trámite en Desarrollo Social, vas a necesitar\n🔸 DNI\n🔹 CUIL\n🔸 Clave de Seguridad Social del ANSES\n*(en caso de no tenerlos, te podemos ayudar a gestionarlas)*\n¿En qué te puedo ayudar? 🤗",
    { capture: true },
    async (ctx, ctxFn) => {
      await ctxFn.gotoFlow(gptFlow);
    }
  );



const flow3 = addKeyword("3") //Opcion 3 del menu
  .addAnswer(
    "Recordá que si quieres conocer sobre la información que puedo brindarte puedes escribir *Menu* y te mostraré las opciones disponibles 😊...¿En qué te puedo ayudar?",
    { capture: true },
    async (ctx, ctxFn) => {
      await ctxFn.gotoFlow(gptFlow);
    }
  );

const flow4 = addKeyword("4") //Opcion 4 del menu
  .addAnswer("Excelente, para eso te voy a hacer 3 preguntas")
  .addAction(async (ctx, ctxFn) => {
    await ctxFn.gotoFlow(formFlow);
  });


  const menuRecaudacion = addKeyword("2") //Opcion 2 del menu
  .addAnswer(
    menuTextRecaudacion,
    { capture: true },
    async (ctx, ctxFn) => {
      const opciones = ["1", "2", "3", "4","5","6","7","8", "0"];
      if (!opciones.includes(ctx.body)) {
        return ctxFn.fallBack(
          "No elegiste una opcion correcta. Elegi 1, 2, 3, 4, 5, 6, 7, 8 o 0"
        );
      }
      if (ctx.body === "0") {
        return ctxFn.endFlow(
          "Volviendo al menu principal. Escribi 'Menu' para volver a ver las opciones"
        );
      }
    },
    [flowRecaudacion1, flowRecaudacion2, flowRecaudacion3, flowRecaudacion4, flowRecaudacion5, flowRecaudacion6, flowRecaudacion7, flowRecaudacion8,
    ]
  );

const menuFlow = addKeyword(EVENTS.ACTION).addAnswer(
  menuText,
  { capture: true },
  async (ctx, ctxFn) => {
    const opciones = ["1", "2", "3", "4", "0"];
    if (!opciones.includes(ctx.body)) {
      return ctxFn.fallBack(
        "No elegiste una opcion correcta. Elegi 1, 2, 3, 4 o 0"
      );
    }
    if (ctx.body === "0") {
      return ctxFn.endFlow(
        "Volviendo al menu principal. Escribi 'Menu' para volver a ver las opciones"
      );
    }
  },
  [flow1, menuRecaudacion, flow3, flow4]
);



module.exports = { menuFlow, menuRecaudacion };