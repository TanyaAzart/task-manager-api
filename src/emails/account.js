const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send( {
        to: email,
        from: 'labrisa66@gmail.com',
        subject: 'Welcome to the App!',
        text: `Hi, ${name}! Please let me know how you get along with the App.`
    })
}

const sendFarewellEmail = (email, name)=>{
    sgMail.send( {
        to: email,
        from: 'labrisa66@gmail.com',
        subject: 'I\'m sorry you are leaving!',
        text: `Dear, ${name}! I will be glad to hear about your experience with the App!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}

