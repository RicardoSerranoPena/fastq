require('dotenv').config()
const accountSid = 'AC1f279c2ad22c3b62aaddbdaee57c45fb';
const authToken = 'a3b083ddec5e4cad770275d3d8bf197f';
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
