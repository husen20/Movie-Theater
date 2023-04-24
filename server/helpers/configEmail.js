const nodeMailer = require('nodemailer');

class ConfigEmail {
  static transPorter() {
    let transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ismailputra54@gmail.com',
        pass: 'pjopwlejgfgvvfeu',
      },
    });
    return transporter;
  }

  static message(emailSend, userId) {
    let mailOption = {
      from: 'ismailhusain1995@gmail.com',
      to: emailSend,
      subject: 'Verifikasi Email',
      text: `http://localhost:3000/register/customer/active/${userId}`,
    };
    this.transPorter().sendMail(mailOption, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info.response);
      }
    });
  }
}

module.exports = ConfigEmail;
