require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const app = express();
const PORT = 5200 || 5100;
const host = '192.168.0.100';

app.use(cors());
app.use(express.json());

let dStorage = multer.diskStorage({
    destination:(req, file, callback) => {
        callback(null, '../uploads');
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
})

let upload = multer({
    storage:dStorage
});

app.post('/send-email', upload.single('file'), async (req, res) => {
    
    const {name, email, subject, body} = req.body;
    const file = req.file;
   
        const transporter = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure:process.env.SECURE,
            service:process.env.SERVICE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
        
        let mailOptions = {
            from:`"SMTP FORM " <${process.env.EMAIL_USER}>`,
            to:process.env.EMAIL_RECEIVER,
            subject:subject,
            text: `Name: ${name} \nEmail: ${email} \nMessage: ${body}`,
            attachments: file ? [{ path: file.path, filename: file.originalname }] : [],
        };
    
        try {
            await transporter.sendMail(mailOptions);
            res.json({success: true, message: "Email sent successfully..."});
            if (file) fs.unlinkSync(file.path);
        } catch (error) {
            res.status(500).json({success: false, message: "Error sending email...", error});
            if (file) fs.unlinkSync(file.path);
        }
    });

app.post('/send-email-anon', upload.single('file'), async (req, res) => {
    const message = req.body.msgs;
    const file = req.file;

    const transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secure:process.env.SECURE,
        service:process.env.SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    let mailOptions = {
        from:`"SMTP ANONYMOUS " <${process.env.EMAIL_USER}>`,
        to:process.env.EMAIL_RECEIVER,
        subject:"Message From: ",
        text: `Name: Anonymous sender \nMessage: ${message}`,
        attachments:file ? [{ path: file.path, filename: file.originalname }] : []
    }

    try {
        await transporter.sendMail(mailOptions);
        res.json({success: true, message: "Email sent successfully..."});
        if (file) fs.unlinkSync(file.path);
    } catch (error) {
        res.status(500).json({success: false, message: "Error sending email...", error});
        if (file) fs.unlinkSync(file.path);
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://${host}:${PORT}`);
})