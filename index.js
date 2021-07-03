const { Plugin } = require('powercord/entities');


module.exports = class BetterLMGTFY extends Plugin {
    async startPlugin() {
        powercord.api.commands.registerCommand({
            command: 'blmgtfy',
            description: 'googles something for someone',
            usage: '{c} [text to google]',
            executor: (args) => ({
              send: true,
              result: 'https://letmegooglethat.com/?q=' + args.join('+')
            })
          });
        }
    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('blmgtfy');
    }
}