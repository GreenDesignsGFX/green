const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("guildMemberAdd", (member) => {
   console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('492215591331954692'); 
   canal.send(`Hola ${member.user}, Bienvenido a **SCRIMS CHILE**. Actualmente hay ${client.guilds.size} miembros`);
   canal.send(`Sigue las últimas informaciones sobre la **SCRIMS CHILE**:`);
   
});

client.on("ready", () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
   client.user.setPresence( {
       status: "online",
       game: {
           name: `Bot Creador Por GreenDesignsGFX`,
           type: "PLAYING"
       }
    });
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;

if (message.content.startsWith(prefix +"15m" )){
    const embed = new Discord.RichEmbed() 
    .setTitle("La Proxima Scrims Comienza en 15 minutos")
    .setColor(0x00AE86)
    .setDescription("@here La proxima partida comenzará en 15 minutos, todos vayan a #sala de conteo correspondiente")
    
    message.channel.send({embed});
}

});
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
client.login(config.token); 