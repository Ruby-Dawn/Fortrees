
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
	const visitorEmail = req.body.clientEmail;
	const visitorMessage = req.body.clientMessage;
	
	try {
		await transporter.sendMail({
		
			from: ' "Fortrees Webform" <george@fortrees.co.nz>',
			
			to: 'george@fortrees.co.nz',
			
			replyTo: visitorEmail,
			
			subject: 'New Contact Form Submission',
			text: 'You recieved a message!\n\nform: ${visitorEmail}\n\nMessage:\n${visitorMessage}`
		});
		res.send('Message Sent Successfully!');
	} catch (error) {
		res.status(500).send('Error sending email.');
	}
});