const core = require('@actions/core');
const XMLHttpRequest = require('xhr2');

const request = new XMLHttpRequest();
request.open("POST", core.getInput('webhook'));

request.setRequestHeader('Content-type', 'application/json');
const params = {
    username: core.getInput('name'),
    avatar_url: core.getInput('icon'),
    content: core.getInput('message')
}

request.send(JSON.stringify(params));
