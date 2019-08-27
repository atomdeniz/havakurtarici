const TelegramBot = require('node-telegram-bot-api');
var request = require("request");

const token = '923666231:AAEExf5PnR_KVHR0uMEpdKCn8EgT6D78Sn8';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/hava/, (msg, match) => {
    var options = { method: 'GET',
      url: 'https://www.metaweather.com/api/location/2344116',
      json:true
    };  
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      var abbr=body.consolidated_weather[0].weather_state_abbr;
      const chatId = msg.chat.id;
      if (abbr=='sn') {
        bot.sendMessage(chatId, 'kar yağıyor çok sıkı giyin');
      } else if (abbr=='sl') {
        bot.sendMessage(chatId, 'aaa sulu kar, botları unutma');
      }
      else if (abbr=='h') {
        bot.sendMessage(chatId, 'arabaya halı serme havası');
      }
      else if (abbr=='t') {
        bot.sendMessage(chatId, 'telsa geldi');
      }
      else if (abbr=='hr') {
        bot.sendMessage(chatId, 'Çok yağmur var');

      }
      else if (abbr=='lr') {
        bot.sendMessage(chatId, 'Orta yağmur var');

      }
      else if (abbr=='s') {
        bot.sendMessage(chatId, 'Çiseliyor');

      }
      else if (abbr=='hc') {
        bot.sendMessage(chatId, 'Hava kapalı, ama akalım');

      }
      else if (abbr=='lc') {
        bot.sendMessage(chatId, 'Biraz güneş var sanki');

      }
      else if (abbr=='c') {
        bot.sendMessage(chatId, 'Oh be günlük güneşlik');

      }else{
        bot.sendMessage(chatId, 'Houston bir sorunumuz var!');
      }
    });
});

