const express = require('express');
const telegraf = require('telegraf');

const app = express();

app.post('/sendMessage', (req) => {
  const bot = new telegraf.Telegram(process.env.BOT_ID);
  const { text } = req.body;
  bot.sendMessage(process.env.CHAT_ID, text);
});

app.listen(process.env.PORT || 8080);
