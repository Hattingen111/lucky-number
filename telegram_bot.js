process.env["NTBA_FIX_319"] = 1;

var TelegramBot = require('node-telegram-bot-api');
var request = require('request');
var request = require('request-promise').defaults({
    proxy:'https://p.itdog.info:443?port=20042&user=hattingen&pass=gfZEYY3g/',
    strictSSL :false
  });

https://t.me/proxy?server=p.itdog.info&port=443&secret=47b73f6532fe28512ee7d38017d11ab7

// Устанавливаем токен, который выдавал нам бот.
var token = '637800428:AAFDiRaKvCwsVMohyq93swRoY3lPFFbmoIk';

// Включить опрос сервера
var bot = new TelegramBot(token, {
	polling: true,
	request: {
		proxy: 'http://p.itdog.info:443?port=20042&user=hattingen&pass=gfZEYY3g/',
		https_proxy: 'https://p.itdog.info:443?port=20042&user=hattingen&pass=gfZEYY3g/'
	}
});

console.log('1');


bot.on('message', function(msg, match){
  console.log('2');
  bot.sendMessage(msg.from.id, 'Чиселка');
  console.log('3');
});

console.log('1');
bot.sendMessage(35439811, 'Чиселка');

bot.onText(/\d/, function(msg, match){
  bot.sendMessage(msg.from.id, 'Чиселка');
});

bot.onText(/\w/, function(msg, match){
  bot.sendMessage(msg.from.id, 'Буковка');
});