require('dotenv').config()
const accountSid = 'AC1f279c2ad22c3b62aaddbdaee57c45fb ';
const authToken = '63ae83073a98d9d2d143eeff2de91ef1';
const client = require('twilio')(accountSid, authToken);


 function sendMessage(to, from, body)  {
    return new Promise((resolve, reject) => {
      client.messages
        .create({
          to,
          from,
          body
        })
        .then(message => {
          resolve(message.sid);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  module.exports={
    sendMessage,
  }
