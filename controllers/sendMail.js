const nodemailer = require("nodemailer");

const sendMail =async (req, res)=>{
    
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'kaitlyn.yost@ethereal.email', // generated ethereal user
          pass: 'BzUUeeNkdCGeB5xgzp' // generated ethereal password

        },
      });

      let info = await transporter.sendMail({
        from: '"Manish" <kaitlyn.yost@ethereal.email>', // sender address
        to: "mnirmalkar414@gmail.com", // list of receivers
        subject: "Hello", // Subject line
        text: "Thank you for your email. I am currently out of the office and will respond to your message upon my return. Best regards, Manish", // plain text body
        html: "<b>Thank you for your email. I am currently out of the office and will respond to your message upon my return. <br> Best regards,<br> Manish</b>", // html body

      });
      console.log("Message sent: %s", info.messageId);
      res.json(info);
}
module.exports = sendMail;