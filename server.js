const express = require('express');
const telegraf = require('telegraf');

const app = express();

app.get('*', () => {
  const bot = new telegraf.Telegram(process.env.BOT_ID);
  bot.sendMessage(process.env.CHAT_ID, 'New user joined');
});

app.listen(process.env.PORT || 8080);
