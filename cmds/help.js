const Discord = require("discord.js");

module.exports.run = async(bot,message,args) => {
  let inviteembed = new Discord.MessageEmbed()

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('TuTo Bot Episode 1 !')
        .setDescription('__**Le bot possède :**__\n\n `!say`,\n`!embed`,\n`!ban`,\n`!unban`,\n`!kick`, \n`!8ball`, *Réponse aléatoire*\n`e!pf`, *Pile ou Face*\n`!members`. *compte tout les membres présent sûr le discord !*\n\n __**Me DM si besoin !**__ 🥰')
        .setTimestamp()
        .setFooter('By Elexyr22👑#0022 ', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
        .setImage('https://cdn.discordapp.com/attachments/765158731456970752/855767470447263744/Meuf_rdm2.jpg')
  message.channel.send(embed)  
  }


  module.exports.config = {
    name: 'help' 
    }
