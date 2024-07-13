import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const {fullname, email, phone, subject, message} = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'trustadekoye@gmail.com',
            subject: `New message from ${fullname}: ${subject}`,
            text: `Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
        } else {
            res.status(405).json({ error: 'Method not allowed' });
        }
    };