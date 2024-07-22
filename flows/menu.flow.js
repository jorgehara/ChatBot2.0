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
  flowRecaudacion9,
} = require("./recaudacion.flow.js");

const path = require("path");
const fs = require("fs");
const {
  flowCatastro1,
  flowCatastro2,
  flowCatastro3,
  flowCatastro4,
  flowCatastro5,
  flowCatastro6,
} = require("./catastro.flow.js");

const pathMenuRecaudacion = path.join(
  __dirname,
  "../mensajes",
  "menuRecaudacion.txt"
);

const pathMenuCatastro = path.join(
  __dirname,
  "../mensajes",
  "menuCatastro.txt"
);
const menuTextRecaudacion = fs.readFileSync(pathMenuRecaudacion, "utf8");
const menuTextCatastro = fs.readFileSync(pathMenuCatastro, "utf8");

const pathMenu = path.join(__dirname, "../mensajes", "menu.txt");
const menuText = fs.readFileSync(pathMenu, "utf8");
const srcPath = path.join(__dirname, "../src", "Horarios habituales.png");

const flow4 = addKeyword("4")
  .addAnswer("🗑️ *RECOLECCIÓN DE RESIDUOS* 🗑️\n\n🚛 *Horarios de Recolección:*\n\n- 🗓️ Lunes a Miércoles: 06:00 a 12:00\n- 🗓️ Jueves y Viernes: 13:00 a 18:00\n\n⚠️ *Los horarios y días de recolección pueden variar durante feriados o por cuestiones climáticas.*\n\n🌟 *¡Gracias por tu colaboración!*🌟")
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });



// const flow5 = addKeyword("5") 
//   .addAnswer(
//     "Recordá que si quieres conocer sobre la información que puedo brindarte puedes escribir *Menu* y te mostraré las opciones disponibles 😊...¿En qué te puedo ayudar?",
//     { capture: true },
//     async (ctx, ctxFn) => {
//       await ctxFn.gotoFlow(gptFlow);
//     }
//   );

const flow5 = addKeyword("5") 
  .addAnswer(
    "📢 *Consultas, Sugerencias o Reclamos* 📢\n\n ✍¡Estamos aquí para ayudarte!\nDejaremos asentada su consulta, sugerencia o reclamo, luego de unas breves preguntas..."
  )
  .addAction(async (ctx, ctxFn) => {
    await ctxFn.gotoFlow(formFlow);
  });

const menuCatastro = addKeyword("3") 
  .addAnswer(
    menuTextCatastro,
    { capture: true },
    async (ctx, ctxFn) => {
      const opciones = ["1", "2", "3", "4", "5", "6", "0"];
      if (!opciones.includes(ctx.body)) {
        return ctxFn.fallBack(
          "😥 No elegiste una opcion correcta. Elegi 1, 2, 3, 4, 5, 6 o 0"
        );
      }
      if (ctx.body === "0") {
        return ctxFn.endFlow(
          "🔙 Volviendo al menu principal. Escribi *Menu* para volver a ver las opciones"
        );
      }
    },
    [
      flowCatastro1,
      flowCatastro2,
      flowCatastro3,
      flowCatastro4,
      flowCatastro5,
      flowCatastro6,
    ]
  );

  const menuRecaudacion = addKeyword("2") 
  .addAnswer(
    menuTextRecaudacion,
    { capture: true },
    async (ctx, ctxFn) => {
      const opciones = ["1", "2", "3", "4", "5", "6", "7", "8","9", "0"];
      if (!opciones.includes(ctx.body)) {
        return ctxFn.fallBack(
          "😥 No elegiste una opcion correcta. Elegi 1, 2, 3, 4, 5, 6, 7, 8, 9 o 0"
        );
      }
      if (ctx.body === "0") {
        return ctxFn.endFlow(
          "🔙 Volviendo al menu principal. Escribi *Menu* para volver a ver las opciones"
        );
      }
    },
    [
      flowRecaudacion1,
      flowRecaudacion2,
      flowRecaudacion3,
      flowRecaudacion4,
      flowRecaudacion5,
      flowRecaudacion6,
      flowRecaudacion7,
      flowRecaudacion8,
      flowRecaudacion9,
    ]
  );

  const flow1 = addKeyword("1") 
  .addAnswer(
    "👀 *Recordá* que para realizar cualquier trámite en Desarrollo Social, vas a necesitar\n🔸 DNI\n🔹 CUIL\n🔸 Clave de Seguridad Social del ANSES\n*(en caso de no tenerlos, te podemos ayudar a gestionarlas)*\n¿En qué te puedo ayudar? 🤗",
    { capture: true },
    async (ctx, ctxFn) => {
      await ctxFn.gotoFlow(gptFlow);
    }
  );

const menuFlow = addKeyword(EVENTS.ACTION).addAnswer(
  menuText,
  { capture: true },
  async (ctx, ctxFn) => {
    const opciones = ["1", "2", "3", "4", "5", "0"];
    if (!opciones.includes(ctx.body)) {
      return ctxFn.fallBack(
        "😥 No elegiste una opcion correcta. Elegi 1, 2, 3, 4, 5 o 0"
      );
    }
    if (ctx.body === "0") {
      return ctxFn.endFlow(
        "🔙 Volviendo al menu principal. Escribi *Menu* para volver a ver las opciones"
      );
    }
  },
  [flow1, menuRecaudacion, menuCatastro, flow4, flow5]
);

module.exports = { menuFlow, menuRecaudacion, menuCatastro };
