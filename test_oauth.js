const request = require('request');
const ClientOAuth2 = require('client-oauth2');
const apiAuth = new ClientOAuth2({
    clientId: 'blah',//process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    accessTokenUri: process.env.API_URL + '/oauth/token',
    authorizationUri: process.env.API_URL + '/oauth/authorize',
    redirectUri: process.env.HOST + '/callback',
    scopes: ['create_user']
    });

let username = 'Axle';
let email = 'loweam@gmail.com';
let password = 'abc123';
console.log(username);
apiAuth.credentials.getToken()
    .catch((error) => { console.log(error); });
console.log('OK');
