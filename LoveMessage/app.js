const cron = require('node-cron');
const config = require('./config');
const accountSid = config.ACCOUNT_SID;
const authToken = config.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const messages = require('./messages');
var currentMessage = 1;

function sendMessage() {

    console.log("sending this message : " +messages[currentMessage]);
	client.messages
		.create({
			body: messages[currentMessage],
			from: '+13235242881',
			to: config.PHONE_NR
		})
		.then(message => {
            currentMessage++;
            console.log(currentMessage);
            if(currentMessage === 4) currentMessage = 0;
			console.log(message);
		});
}

cron.schedule('*/10 * * * *', () =>{
    console.log('message sent');
    sendMessage();
});