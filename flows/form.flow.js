const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const { writeToSheet, readSheet, appendToSheet, getFilteredData } = require("../scripts/sheets");

const formFlow = addKeyword(EVENTS.ACTION)
    .addAnswer("¿Cuál es tu nombre?", { capture: true },
        async (ctx, ctxFn) => {
            await ctxFn.state.update({ name: ctx.body }); // Guarda el nombre del usuario en el estado
        }
    )
    .addAnswer("¿Cuál es tu correo electrónico o número de teléfono?", { capture: true },
        async (ctx, ctxFn) => {
            await ctxFn.state.update({ mail: ctx.body }); // Guarda el mail en el estado
        }
    )
    .addAnswer("¿Cuál es el motivo de tu reclamo/sugerencia?", { capture: true },
        async (ctx, ctxFn) => {
            await ctxFn.state.update({ motive: ctx.body }); // Guarda el motivo en el estado
        }
    )
    .addAnswer("🤗¡Gracias por la información! Notificaré al Área correspondiente a la brevedad.\nSi tienes otra consulta puedes escribir *Menu*", null,
        async (ctx, ctxFn) => {
            const userInfo = await ctxFn.state.getMyState(); // Recupera todos los datos almacenados en el estado
            await appendToSheet([[userInfo.name, userInfo.mail, userInfo.motive]])
        });

module.exports = { formFlow };