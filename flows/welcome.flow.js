const { addKeyword, EVENTS } = require('@bot-whatsapp/bot');

const welcomeFlow = addKeyword(EVENTS.ACTION)
    .addAction(async (ctx, ctxFn) => {
        await ctxFn.endFlow("¡Hola!👋 *Soy Nico*, tu asesor virtual de la *Municipalidad de Pampa del Infierno* ¿En qué puedo ayudarte hoy? puedes escribir *Menu* para más opciones 😊")
    })

module.exports = { welcomeFlow };   