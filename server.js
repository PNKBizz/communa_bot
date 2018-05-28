const express = require('express');
const telegraf = require('telegraf');

const app = express();
app.use(express.json());

app.post('/sendMessage', (req, res) => {
  const bot = new telegraf.Telegram(process.env.BOT_ID);
  console.log(req);
  bot.sendMessage(process.env.CHAT_ID, 'test');
  res.send('ok');
});

app.listen(process.env.PORT || 8080);
