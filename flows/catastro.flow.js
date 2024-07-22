const { addKeyword } = require("@bot-whatsapp/bot");
const { formFlow } = require("./form.flow.js");

const flowCatastro1 = addKeyword("1")
  .addAnswer(
    "*📋REQUISITOS PARA LA REALIZACION DE SOLICITUDES DE TERRENOS*\n\n📑 Fotocopia de D.N.I.\n- 📄 Constancia de Certificado de Domicilio (antecedentes.chaco.gov.ar).\n- 📝 Certificación (juzgado o escribanía).\n- 🏷️ Sellado Municipal (se solicita en Área de Recaudación de la Municipalidad).\n\n"
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });

const flowCatastro2 = addKeyword("2")
  .addAnswer(
    "📋*REQUISITOS PARA ACCEDER AL TÍTULO DE PROPIEDAD📋* 📋\n\n- 🏷️ Impuesto del valor de la tierra cancelada.\n- 🗺️ Plano de mensura del inmueble.\n- 📑 Fotocopia de D.N.I.\n- 🆔 Constancia de C.U.I.L.\n 🏷️ Sellado Municipal (se solicita en Área de Recaudación de la Municipalidad).\n- "
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });

const flowCatastro3 = addKeyword("3")
  .addAnswer(
    "💰*IMPUESTO VALOR DE LA TIERRA MUNICIPAL*💰\n\n Dependiente de la zona del inmueble\n- 🌳 *Manzana:* $5.000 por m2.\n- 🌾 *Quinta:* $1.200 por m2 y $2.500 por m2.\n- 🚜 *Chacra:* $1.200 por m2 y $2.500 por m2.\n\n\n💸 *Financiación* \n- Se realizan financiación en *cuotas* (*hasta 12 cuotas*)\n- Descuento por pago *contado* (*20% de descuento*).\n\n"
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });

const flowCatastro4 = addKeyword("4")
  .addAnswer(
    "📏*RELEVAMIENTO TERRITORIAL*📏\n\n- 📝 Constatación de terrenos.\n- 📐 Medición de terrenos."
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });

const flowCatastro5 = addKeyword("5")
  .addAnswer(
    "💸*FINANCIACIÓN*💸\n\n- Se realizan financiación en *cuotas* (*hasta 12 cuotas*)\n- Descuento por pago *contado* (*20% de descuento*)\n\n📍 *¡Te esperamos en nuestras oficinas y no dudes en consultarnos!* 📍"
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });

const flowCatastro6 = addKeyword("6") //Opcion 4 del menu
  .addAnswer(
    "📢 *Consultas, Sugerencias o Reclamos* 📢\n\n ✍ ¡Estamos aquí para ayudarte!\nDejaremos asentada su consulta, sugerencia o reclamo, luego de unas breves preguntas..."
  )
  .addAction(async (ctx, ctxFn) => {
    const formFlow = await import("./form.flow.js").then((mod) => mod.formFlow);
    await ctxFn.gotoFlow(formFlow);
  });

module.exports = {
  flowCatastro1,
  flowCatastro2,
  flowCatastro3,
  flowCatastro4,
  flowCatastro5,
  flowCatastro6,
};
