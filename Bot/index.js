const { Telegraf ,Markup} = require('telegraf');
const http = require('http');
const bot = new Telegraf('6109494690:AAGHFhZ0U9v5tz2Ii0rVlE3xm2j4bg5OaVA');
//`https://main--jocular-choux-6a6025.netlify.app/
bot.start((ctx) => {
    ctx.reply("Click Here!", {
        caption: "Caption",
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard([
          Markup.button.webApp("Click)", `https://072f-196-188-157-5.ngrok-free.app`),
        ])
}); 
})
bot.on("message", async (ctx) => {
  console.log(ctx.message.web_app_data)
  return ctx.reply(ctx.message.web_app_data.data)

});
// bot.on('callback_query',async (ctx) => {
//   const webAppData = ctx.callbackQuery.data;  // This will contain the data sent from the Web App
//   await ctx.reply('Data received from Web App:', webAppData);
//   ctx.answerCbQuery();
// });
bot.launch(); 