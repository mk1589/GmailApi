const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID = '157913277825-57jvcp5n4mnb5sene4hq1juoscch1pf2.apps.googleusercontent.com'
const CLEINT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04764e6Q7oKewCgYIARAAGAQSNwF-L9IrHQcZm6s3UR0mv3WpmNEp7c5EzMAvdhNtosMX_xs-QXl0O4H0CR4NnKgXYhVxvzSsnfs'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLEINT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

async function sendMail(){
  try {
    const accessToken = await oAuth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'mnirmalkar745@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken

      }
    })

    const mailOptions= {
      from: 'Manish here <mnirmalkar745@gmail.com>',
      to: 'manishkumarnirmalkar266@gmail.com',
      subject: "hello",
      text: 'Thank you for your email. I am currently out of the office and will respond to your message upon my return. Best regards, Manish',
      html: "<b>Thank you for your email. I am currently out of the office and will respond to your message upon my return. <br> Best regards,<br> Manish</b>",
    };
    const result = await transport.sendMail(mailOptions)
    console.log('Email sent...', result)




  } catch (error) {
    console.log(error.message)

  
  }
}
function getRandomInterval() {
  return Math.floor(Math.random() * (120 - 45 + 1) + 45) * 1000; 
}
setInterval(() => {
  sendMail();
}, getRandomInterval());