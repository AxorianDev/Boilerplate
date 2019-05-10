module.exports = async (client, message) => {
    if (message.channel.type === "dm") return undefined;
    if (message.author.bot) return undefined;
    if (message.content.indexOf(client.config.prefix) !== 0) return undefined;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return undefined;
    cmd.run(client, message, args);
};