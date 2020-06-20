const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("superagent");



bot.on("ready", async () => { 
     console.log('DROID Kullanılabilir Durumda !!');
bot.user.setActivity("Kendini Geliştirmekle Meşgul");
});

bot.on('guildMemberAdd', member => {
    member.send("Sunucuma Hoşgeldin.Test Aşamasındayım!");
 });

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix ;
    let messageArray = message.content.split(" ");
    let cmd= messageArray[0];
    let args = messageArray.slice[1];

    
     

   
     if (cmd === '!temizle'){
        
        message.channel.bulkDelete(20);
        message.channel.send("20 tane mesaj sildim").then(msg => msg.delete(3000));
    
     
     };

     if (cmd === '!siktiret'){
        
        return message.channel.send('Siktir Ediliyor Lütfen Bekleyiniz ... Başarıyla Siktir Edildi.');
    }
    
     
        
     if (cmd === 'Nani'){
        
         return message.channel.send('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgjtji-8b0B5YAh522IeG8UpqbAyMDOKf_sauksRYPsoIT1a4j&usqp=CAU');
     }
      
     if(cmd === '!komut'){
        

        
        let komut = new Discord.MessageEmbed()
        
        
        .setColor("#34fafa")
        
        .setAuthor("Kullanabileceğiniz Komutlar :  ")
        .addField("!kurallar", 'Kuralları Görmek için Yazın')
        .addField("!sunucu",'Sunucu Bilgisini Görmek İçin Yazın')
        .addField("!bot",'Bot Bilgisini Görmek  İçin Yazın')
        .addField("!abdest", 'Hemen tıkla ve Aydınlan', true)
        .setFooter("| Bot Yapım Aşamasında | ");

         return message.channel.send(komut);

        };
        
        if (cmd === '!yes'){
            
            return message.channel.send('https://tenor.com/view/yes-jotaro-kujo-jojos-gif-7297252');
        }

        if (cmd ==='!no'){
            
            return message.channel.send('https://tenor.com/view/jojo-joseph-oh-no-shocked-surprised-gif-4921543');
        }
        




  if(message.content === 'merhaba'){
        message.react('👋');
     }
  if(message.content === 'selam'){
        message.react('🙋‍♂️');
    }
  if(message.content === 'sa'){
        message.react('🙌');
    }
  if(message.content === 'Merhaba'){
        message.react('👋');
    }
  if(message.content === 'Selam'){
        message.react('🙋‍♂️');
    }
  if(message.content === 'Sa'){
        message.react('🙌');
    }

   
    if(cmd === '!abdest'){
        
        return message.channel.send("https://quickabdest.com");
   }

    if(cmd === '!çağrı'){
        
        
        let botembed = new Discord.MessageEmbed()
        
        
        .setColor("#35E1CC")
        
        .setAuthor("Yayın Başlamak Üzere Kop Gel ")
         .setTitle("https://www.twitch.tv/ixrt")
        .setThumbnail("https://i.imgur.com/bCBt6ga.jpg")
        .setImage("https://i.imgur.com/bCBt6ga.jpg")
        .addField(`Developer`, `cagrisaltik#2591`, true)
        .setFooter("| Bot Yapım Aşamasında | ");

         return message.channel.send(botembed);

        };

    if(cmd === '!sezer'){
        
        
            let sezer = new Discord.MessageEmbed()
            
            
            .setColor("#35E1CC")
            
            .setAuthor("Yayın Başlamak Üzere Kop Gel ")
            .setTitle("https://www.twitch.tv/ghozith")
            .setThumbnail("https://i.imgur.com/bCBt6ga.jpg")
            .setImage("https://i.imgur.com/bCBt6ga.jpg")
            .addField(`Developer`, `cagrisaltik#2591`, true)
            .setFooter("| Bot Yapım Aşamasında | ");
    
             return message.channel.send(sezer);
    
            };

     if(cmd === '!ram'){
        
        
                let yayin = new Discord.MessageEmbed()
                
                
                .setColor("#35E1CC")
                
                .setAuthor("Yayın Başlamak Üzere ")
                .setTitle("https://www.twitch.tv/theflyingram")
                .setThumbnail("https://i.imgur.com/bCBt6ga.jpg")
                .setImage("https://i.imgur.com/bCBt6ga.jpg")
                .addField(`Developer`, `cagrisaltik#2591`, true)
                .setFooter("| Bot Yapım Aşamasında | ");
        
                 return message.channel.send(yayin);
        
                };


       

    if(cmd =='!sunucu'){
        
        
        let serverembed = new Discord.MessageEmbed()
        
        .setColor("35E1CC")
        
        .setAuthor("Sunucu Bilgisi")
        .addField("Server Adı", message.guild.name)
        .setThumbnail("https://i.imgur.com/bCBt6ga.jpg")
        .addField("Kuruluş Zamanı",message.guild.createdAt)
        .addField("Ne Zaman Katıldın", message.guild.joinedAt)
        .addField(`Developer`, `cagrisaltik#2591`, true)
        .addField("Toplam Kişi", message.guild.memberCount)
        .setFooter("| Bot Yapım Aşamasında | ");

        return message.member.send(serverembed);

     };


     if (cmd === '!kurallar'){
         return message.member.send("Aslında yazılı olarak kural eklemeye gerek yok . Herkes birbirine saygılı ve seviyeli olursa , Kural odasına da ihtiyacımız olmaz!!!")
     };
      
    
      if(cmd === '!bot'){
        
       
        let botembed = new Discord.MessageEmbed()
        
        
        .setColor("#35E1CC")
        
        .setAuthor("Bot Bilgisi")
        .addField("Bot Adı ", "DROID")
        .setThumbnail("https://i.imgur.com/bCBt6ga.jpg")
        .addField("Ne Zaman Geldim",message.guild.joinedAt)
        .addField(`Developer`, `cagrisaltik#2591`, true)
        .setFooter("| Bot Yapım Aşamasında | ");

         return message.channel.send(botembed);

        };

      




    });


bot.login(botconfig.token);