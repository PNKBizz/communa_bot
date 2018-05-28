const express = require('express');
const telegraf = require('telegraf');

const app = express();
app.use(express.json());

app.post('/sendMessage', (req, res) => {
  const bot = new telegraf.Telegram(process.env.BOT_ID);
  const { text } = req.body;
  bot.sendMessage(process.env.CHAT_ID, text);
  res.send('ok');
});

app.listen(process.env.PORT || 8080);
