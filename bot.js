// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
var compliments = ["your eyes look lovely.", "I love your hair.", "you have a wonderful personality.", "you're a great human being.", 
"you smell nice.", "you have cool interests.", "you look nice today.", "your outfit suits you.", "you are very interesting to listen to.", 
"I like your voice."];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    setTimeout(function(){ // in leftToZero() milliseconds run this:
      hourBells(); // send the message once
      var hourMillseconds = 1000 * 60 * 60;
      setInterval(function(){ // repeat this every hour
          hourBells();
      }, hourMillseconds)
  }, leftToZero());
    setTimeout(function(){ // in leftToZero() milliseconds run this:
      hourBells(); // send the message once
      var hourMillseconds = 1000 * 60 * 60;
      setInterval(function(){ // repeat this every hour
          hourBells();
      }, hourMillseconds)
  }, leftToFifteen());
    setTimeout(function(){ // in leftToZero() milliseconds run this:
      hourBells(); // send the message once
      var hourMillseconds = 1000 * 60 * 60;
      setInterval(function(){ // repeat this every hour
          hourBells();
      }, hourMillseconds)
  }, leftToThirty());
    setTimeout(function(){ // in leftToZero() milliseconds run this:
      hourBells(); // send the message once
      var hourMillseconds = 1000 * 60 * 60;
      setInterval(function(){ // repeat this every hour
          hourBells();
      }, hourMillseconds)
  }, leftToFortyFive()); 
    setTimeout(function(){ // in leftToZero() milliseconds run this:
      eveningSong(); // send the message once
      var dayMillseconds = 1000 * 60 * 60 * 24;
      setInterval(function(){ // repeat this every day
          eveningSong();
      }, dayMillseconds)
  }, leftToEvening());
     setTimeout(function(){ // in leftToZero() milliseconds run this:
      almaMater(); // send the message once
      var dayMillseconds = 1000 * 60 * 60 * 24;
      setInterval(function(){ // repeat this every day
          almaMater();
      }, dayMillseconds)
  }, leftToAlma());
     setTimeout(function(){ // in leftToZero() milliseconds run this:
      cornellRag(); // send the message once
      var dayMillseconds = 1000 * 60 * 60 * 24;
      setInterval(function(){ // repeat this every day
          cornellRag();
      }, dayMillseconds)
  }, leftToRag()); 
});

function leftToZero(){
  var d = new Date();
  return (-d + d.setHours(d.getHours() + 1,0,0,0));
}
function leftToFifteen(){
  var d = new Date();
  if(d.getMinutes() < 15)
    return (-d + d.setHours(d.getHours(),15,0,0));
  else
    return (-d + d.setHours(d.getHours() + 1,15,0,0));
}
function leftToThirty(){
  var d = new Date();
  if(d.getMinutes() < 30)
    return (-d + d.setHours(d.getHours(),30,0,0));
  else
    return (-d + d.setHours(d.getHours() + 1,30,0,0));
}
function leftToFortyFive(){
  var d = new Date();
  if(d.getMinutes() < 45)
    return (-d + d.setHours(d.getHours(),45,0,0));
  else
    return (-d + d.setHours(d.getHours() + 1,45,0,0));
}
function leftToEvening(){
  var d = new Date();
  var e = new Date(); 
  e_val = e.setHours(18, 13, 15, 0);
  if(-d + e_val >=0){
    return (-d + e_val);
  }
  else{
    return (d - e_val);
  }
}
function leftToAlma(){
  var d = new Date();
  var e = new Date(); 
  e_val = e.setHours(13, 23, 39, 0);
  if(-d + e_val >=0)
    return (-d + e_val);
  else
    return (d - e_val);
}
function leftToRag(){
  var d = new Date();
  var e = new Date(); 
  e_val = e.setHours(10, 10, 0, 0);
  if(-d + e_val >=0)
    return (-d + e_val);
  else
    return (d - e_val);
} 

function hourBells(){
  var voiceChannel = client.channels.cache.get("691805440618790934");
  var current_date = new Date();
  voiceChannel.join().then(connection =>{
     if(current_date.getMinutes() == 0){
      //connection.play('./00.mp3').on('end', () => voiceChannel.leave());
      const hours = current_date.getHours();
      if (hours == 1 || hours == 13){
        connection.play('./1.mp3').on('finish', () => voiceChannel.leave());
      }
      else if (hours == 2 || hours == 14){
        connection.play('./2.mp3').on('finish', () => voiceChannel.leave());
      }
      else if (hours == 3 || hours == 15){
        connection.play('./3.mp3').on('finish', () => voiceChannel.leave());
      }
      else if (hours == 4 || hours == 16){
        connection.play('./4.mp3').on('finish', () => voiceChannel.leave());
      }
      else if (hours == 5 || hours == 17){
        connection.play('./5.mp3').on('finish', () => voiceChannel.leave());
      }
      else if (hours == 6 || hours == 18){
        connection.play('./6.mp3').on('finish', () => voiceChannel.leave());
      }
      else if (hours == 7 || hours == 19){
        connection.play('./7.mp3').on('finish', () => voiceChannel.leave());
      }
      else if (hours == 8 || hours == 20){
        connection.play('./8.mp3').on('finish', () => voiceChannel.leave());
      }
      else if (hours == 9 || hours == 21){
        connection.play('./9.mp3').on('finish', () => voiceChannel.leave());
      }
      else if (hours == 10 || hours == 22){
        connection.play('./10.mp3').on('finish', () => voiceChannel.leave());
      }
      else if (hours == 11 || hours == 23){
        connection.play('./11.mp3').on('finish', () => voiceChannel.leave());
      }
      else if (hours == 12 || hours == 0){
        connection.play('./12.mp3').on('finish', () => voiceChannel.leave());
      }
     }
     else if(current_date.getMinutes() == 15){
      connection.play('./15.mp3').on('finish', () => voiceChannel.leave());
     }
     else if(current_date.getMinutes() == 30){
      connection.play('./30.mp3').on('finish', () => voiceChannel.leave());
     }
     else if(current_date.getMinutes() == 45){
      connection.play('./45.mp3').on('finish', () => voiceChannel.leave());
     } 
  }).catch(err => console.log(err));
}
function eveningSong(){
  var voiceChannel = client.channels.cache.get("691805440618790934");
  voiceChannel.join().then(connection =>{
    connection.play('./eveningsong128.mp3').on('finish', () => voiceChannel.leave());
  }).catch(err => console.log(err));
}
function almaMater(){
  var voiceChannel = client.channels.cache.get("691805440618790934");
  voiceChannel.join().then(connection =>{
    connection.play('./almamater128.mp3').on('finish', () => voiceChannel.leave());
  }).catch(err => console.log(err));
}
function cornellRag(){
  var voiceChannel = client.channels.cache.get("691805440618790934");
  voiceChannel.join().then(connection =>{
    connection.play('./cornellchanges128.mp3').on('finish', () => voiceChannel.leave());
  }).catch(err => console.log(err));
}


client.on('message', msg => {
    const last_message = client.user.lastMessage;
    const int_val = Number(msg.content);
    if (msg.content === 'compliment me') {
      const random_num = Math.floor((Math.random() * compliments.length));
      msg.reply(compliments[random_num]);
    }
    else if (msg.content === 'complement me'){
      msg.reply("what is your angle? Between 0 and 90 please."); 
      
    }
    else if (msg.content === 'join voice channel'){
      const voicechannel = msg.member.voice.channel;
      if(voicechannel != null){
      voicechannel.join()
      }
    }
    else if (msg.content === 'leave voice channel'){
      const voicechannel = msg.member.voice.channel;
      if(voicechannel != null){
      voicechannel.leave()
      }
    }
    if(int_val !== NaN && int_val >= 0 && int_val <= 90 && !msg.author.bot && last_message != null && last_message.toString().includes("what is your angle? Between 0 and 90 please.")){
      new_int = 90 - int_val;
      msg.reply("your complement is " + new_int.toString() + ".");
    }
  });


client.login(process.env.DISCORD_TOKEN);
