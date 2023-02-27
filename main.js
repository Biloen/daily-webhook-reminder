const core = require('@actions/core');
const discord = require('discord.js')

const webhookClient = new discord.WebhookClient(breakDiscordWebhook(core.getInput('webhook')));

webhookClient.send({
    username: core.getInput('name'),
    avatar_url: core.getInput('icon'),
    content: core.getInput('message')
})

function breakDiscordWebhook(webhook) {
    const array = webhook.split("/");
    const length = array.length;
    if (length < 3) throw new Error("Webhook probably misrepresented");

    if (array[length - 1] == "github") {
        return { id: array[length - 3], token: array[length - 2] };
    }

    return { id: array[length - 2], token: array[length - 1] };
};