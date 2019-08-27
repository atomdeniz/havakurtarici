const TelegramBot = require('node-telegram-bot-api'); //Kütüphaneleri tanımlıyorum
const request = require("request");

const token = 'Buraya botunuzun tokenını giriniz';

const bot = new TelegramBot(token, {polling: true}); //Botu oluşturuyorum

bot.onText(/\/hava/, (msg, match) => { // "/hava" etiketi konulduğunda bu fonsiyona gelmesini istiyorum.
    
    var options = { method: 'GET', //API'a gidecek isteğin özelliklerini belirtiyorum.
      url: 'https://www.metaweather.com/api/location/2344116',
      json:true
    };  
    
    request(options, function (error, response, body) { //İsteği gerçekleştiriyorum
      if (error) throw new Error(error);
      var abbr=body.consolidated_weather[0].weather_state_abbr; //Json olarak dönen body'den bugünün durumunu değişkene aktarıyorum.
      const chatId = msg.chat.id; // İstek gelen kullanıcının id'sini saklıyorum
      if (abbr=='sn') { //Duruma göre dönecek mesaj senaryoları belirliyorum.
        bot.sendMessage(chatId, 'kar yağıyor çok sıkı giyin');
      } else if (abbr=='sl') {
        bot.sendMessage(chatId, 'aaa sulu kar, botları unutma'); // Kullanıcıya mesajı gönderiyorum
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

