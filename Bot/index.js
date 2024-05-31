const { Telegraf ,Markup} = require('telegraf');
const http = require('http');
const bot = new Telegraf('7057141681:AAEN9VGSi4KgAQ1aF9QUD9QxFozdCt6Ri3E');
//`https://main--jocular-choux-6a6025.netlify.app/
bot.start((ctx) => {
    ctx.reply("Click Here!", {
        caption: "Caption",
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard([
          Markup.button.webApp("Click)", `https://tele-mini-app-beta.vercel.app/`),
        ])
}); 
})
bot.launch(); 