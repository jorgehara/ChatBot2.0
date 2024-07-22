const { addKeyword } = require("@bot-whatsapp/bot");
const { formFlow } = require("./form.flow.js");

const flowRecaudacion1 = addKeyword("1")
  .addAnswer(
    "🏡 *INMUEBLE Y SERVICIOS GENERALES* 🏡\n\n⚠️ *En el caso de no aparecer dicho inmueble, se tendrá que solicitar ALTA DE INMUEBLE.* ⚠️\n\n📅 *Fechas de pago:* 📅\n\n1️⃣ *Pago 1er cuota Inmobiliario y Servicios Generales*\n📅 Vto. 15/04/2024\n\n2️⃣ *Pago 2da cuota Inmobiliario y Servicios Generales*\n📅 Vto. 15/06/2024\n\n3️⃣ *Pago 3ra cuota Inmobiliario y Servicios Generales*\n📅 Vto. 15/08/2024\n\n4️⃣ *Pago 4ta cuota Inmobiliario y Servicios Generales*\n📅 Vto. 15/10/2024\n\n5️⃣ *Pago 5ta cuota Inmobiliario y Servicios Generales*\n📅 Vto. 15/12/2024"
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });

const flowRecaudacion2 = addKeyword("2")
  .addAnswer(
    "🚗 *PATENTAMIENTO* 🚗\n\n📄 *Para inscribir un vehículo:* 📄\n\n- Fotocopia del Título del vehículo\n- Fotocopia de la Factura de Compra (en el caso de que el vehículo haya sido comprado nuevo)\n- Baja del municipio anterior (en el caso que el vehículo haya sido comprado usado)\n\n📅 *Fechas de pago:* 📅\n\n1️⃣ *Pago 1er cuota Patentamiento*\n📅 Vto. 15/03/2024\n\n2️⃣ *Pago 2da cuota Patentamiento*\n📅 Vto. 15/05/2024\n\n3️⃣ *Pago 3ra cuota Patentamiento*\n📅 Vto. 15/07/2024\n\n4️⃣ *Pago 4ta cuota Patentamiento*\n📅 Vto. 15/09/2024\n\n5️⃣ *Pago 5ta cuota Patentamiento*\n📅 Vto. 15/11/2024"
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });

const flowRecaudacion3 = addKeyword("3")
  .addAnswer(
    "⚰️ *CEMENTERIO* ⚰️\n\n📜 *Para realizar trámites:* 📜\n\n- Solicitar *ACTA DE DEFUNCIÓN* en el Registro Civil\n- Solicitud de Inhumación: *$6.000*\n\n📅 *Fechas de pago:* 📅\n\n1️⃣ *Pago 1er cuota Cementerio*\n📅 Vto. 15/04/2024\n\n2️⃣ *Pago 2da cuota Cementerio*\n📅 Vto. 15/07/2024\n\n3️⃣ *Pago 3ra cuota Cementerio*\n📅 Vto. 15/10/2024\n\n4️⃣ *Pago 4ta cuota Cementerio*\n📅 Vto. 15/12/2024"
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });

const flowRecaudacion4 = addKeyword("4")
  .addAnswer(
    "🏢 *HABILITACIÓN COMERCIAL* 🏢\n\n📋 *Requisitos:* 📋\n\n- Libre de deuda del solicitante en concepto de todo rubro previsto en la Ordenanza Municipal\n- Libre de deuda del local donde se desarrolla la actividad comercial\n- Fotocopia del D.N.I de los dos frentes\n- Constancia de Inscripción ante AFIP\n- Constancia de Inscripción ante ATP\n- Libreta Sanitaria (Personal de comercios habilitados para comestibles, carnicerías, verdulerías y heladerías)\n- Nota de Solicitud de inscripción dirigida a la intendencia\n\n💰 *Tarifas:* 💰\n\n- Solicitud Habilitación Comercial: *$7.500*\n- Por Certificado de Inscripción de Locales comerciales: *$5.250*\n- Por Constancia de Cese de Actividad Comercial: *$5.250*\n\n📅 *Fechas de pago:* 📅\n\n1️⃣ *Pago 1er cuota Habilitación Comercial*\n📅 Vto. 15/04/2024\n\n2️⃣ *Pago 2da cuota Habilitación Comercial*\n📅 Vto. 15/06/2024\n\n3️⃣ *Pago 3ra cuota Habilitación Comercial*\n📅 Vto. 15/08/2024\n\n4️⃣ *Pago 4ta cuota Habilitación Comercial*\n📅 Vto. 15/10/2024"
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });
const flowRecaudacion5 = addKeyword("5") 
  .addAnswer(
    "📅 *FECHAS DE PAGOS COMERCIAL* 📅\n\n1️⃣ *Pago 1er Bimestre (ENERO-FEBRERO) - INDUSTRIA Y COMERCIO*\n(PAGO 1-10 MARZO)\n\n2️⃣ *PAGO 2do Bimestre (MARZO-ABRIL) - INDUSTRIA Y COMERCIO*\n(PAGO 1-10 MAYO)\n\n3️⃣ *PAGO 3er Bimestre (MAYO-JUNIO) - INDUSTRIA Y COMERCIO*\n(PAGO 1-10 JULIO)\n\n4️⃣ *PAGO 4to Bimestre (JULIO-AGOSTO) - INDUSTRIA Y COMERCIO*\n(PAGO 1-10 SEPTIEMBRE)\n\n5️⃣ *PAGO 5to Bimestre (SEPTIEMBRE-OCTUBRE) - INDUSTRIA Y COMERCIO*\n(PAGO 1-10 DICIEMBRE)\n\n6️⃣ *Pago 6to Bimestre (NOVIEMBRE-DICIEMBRE) - INDUSTRIA Y COMERCIO*\n(PAGO 1-10 ENERO)"
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });
const flowRecaudacion6 = addKeyword("6") 
  .addAnswer(
    "🚗 *SOLICITUD/RENOVACION PARA REGISTROS DE CONDUCTOR DE AUTOMOTORES* 🚗\n\n📋 *Para solicitar carnet por primera vez:* 📋\n\n- FORMULARIO (Rellenar en el médico)\n- *FOTOCOPIA DEL D.N.I.*\n\n🗓️ *La duración del Carnet completo es de 3 años, La renovación es cada Fecha de Cumpleaños.*\n\n💵 *Tarifas para el año 2024:* 💵\n\n- 🏍️ *Otorgamiento Cat. A,* para Motocicletas y Triciclos motorizados: *$2.700*\n- 🚗 *Otorgamiento Cat. B,* para Automóviles, camionetas con acoplado de 750 Kg. o casa rodante: *$3.100*\n- 🚚 *Otorgamiento Cat. C,* para Camiones sin acoplado incluye Cat. B: *$3.100*\n- 🚌 *Otorgamiento Cat. D,* para Profesionales, serv. Transp. de pasajeros, emergencia y seguridad incluye Cat. B: *$4.200*\n- 🚛 *Otorgamiento Cat. E,* para camiones artic. c/acoplado, maquinaria esp. no agrícola incluye Cat. B y C: *$4.200*\n- 🚜 *Otorgamiento Cat. G,* para Tractores agrícolas y maquinarias esp. Agrícolas: *$4.200*\n\n🔄 *Renovación para el año 2024:* 🔄\n\n- *Registro de Conductor - Renovación Cat. A:* *$2.700*\n- *Registro de Conductor - Renovación Cat. B, C:* *$4.000*\n- *Registro de Conductor - Renovación Cat. D, E y G:* *$4.100*"
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });
const flowRecaudacion7 = addKeyword("7") 
  .addAnswer(
    "🎭 *ESPECTÁCULOS PÚBLICOS* 🎭\n\n📄 *Requisito:* 📄\n\n- Presentar NOTA por duplicado dirigida al Intendente Municipal.\n\n 💸 Tasa abonada en Dirección de Recaudación."
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });

  const flowRecaudacion8 = addKeyword("8") 
  .addAnswer(
    "💧 *REPARTO Y VENTA DE AGUA* 💧\n\n 🕔 *Horarios de venta de Agua*\n\n Lunes a Jueves desde las 17.00 a las 18.00hs.\n\n Solicita tu número de manera presencial. Se entregan 40 números diarios.\n\n💲 *Precio:* 1.000 litros de agua por $1.800.-\n\n"
  )
  .addAction(async (ctx, ctxFn) => {
    const menuFlow = await import("./menu.flow.js").then((mod) => mod.menuFlow);
    await ctxFn.gotoFlow(menuFlow);
  });

const flowRecaudacion9 = addKeyword("9") 
  .addAnswer(
    "📢 *Consultas, Sugerencias o Reclamos* 📢\n\n ✍¡Estamos aquí para ayudarte!\nDejaremos asentada su consulta, sugerencia o reclamo, luego de unas breves preguntas..."
  )
  .addAction(async (ctx, ctxFn) => {
    const formFlow = await import("./form.flow.js").then((mod) => mod.formFlow);
    await ctxFn.gotoFlow(formFlow);
  });

module.exports = {
  flowRecaudacion1,
  flowRecaudacion2,
  flowRecaudacion3,
  flowRecaudacion4,
  flowRecaudacion5,
  flowRecaudacion6,
  flowRecaudacion7,
  flowRecaudacion8,
  flowRecaudacion9,
};
