const { Telegraf ,Markup} = require('telegraf');
const http = require('http');
const bot = new Telegraf('6109494690:AAGHFhZ0U9v5tz2Ii0rVlE3xm2j4bg5OaVA');
//`https://main--jocular-choux-6a6025.netlify.app/
bot.start((ctx) => {
    ctx.reply("Click Here!", {
        caption: "Caption",
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard([
          Markup.button.webApp("Click)", `https://0cdd-196-188-157-5.ngrok-free.app`),
        ])
}); 
})
bot.launch(); 