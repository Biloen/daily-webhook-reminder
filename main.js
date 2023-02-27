const core = require('@actions/core');
const discord = require('discord.js')

const webhookClient = new discord.WebhookClient({url:core.getInput('webhook')});

webhookClient.send({
    username: core.getInput('name'),
    avatar_url: core.getInput('icon'),
    content: core.getInput('message')
})