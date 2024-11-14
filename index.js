const fs = require('fs');
const csv = require('csv-parse/sync');

const data = fs.readFileSync('./users.csv', 'utf8');
const users=csv.parse(data, {columns: true});

module.exports = {

    generateUser: function(requestParams, context, ee, next) {
        const loopCount = context.vars['$loopCount']
        const user = users[loopCount];

        requestParams.json.username=user.username
        requestParams.json.password=user.password

        return next();
    },
    storeToken: function(requestParams, response, context, ee, next) {
        
        if(!context.vars.tokens) {
            context.vars.tokens=[]
        }

        context.vars.tokens.push(context.vars.token)

        return next();
    },
    
    // Select and use a random token from the stored tokens
    selectRandomToken: function (context, ee, next) {
        const tokens = context.vars.tokens;
        if (tokens && tokens.length > 0) {
        const randomToken = tokens[Math.floor(Math.random() * tokens.length)];
        context.vars.token = randomToken;  // Set the token for use in the scenario
        }
    
        return next();  // Proceed with the scenario
    }
};