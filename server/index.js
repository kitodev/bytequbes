import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Health check endpoint
app.get("/health", (req, res) => {
    res.send({ status: "ok" });
});

// Mail sending endpoint
app.post("/api/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).send({ error: "Missing required fields" });
    }

    try {
        // Configure SMTP transport
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: parseInt(process.env.SMTP_PORT || "465"),
            secure: process.env.SMTP_SECURE === "true", // Use SSL/TLS
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // From your authenticated SMTP user
            to: process.env.RECEIVER_EMAIL, // Where you want to receive the contact form emails
            replyTo: email, // The user's actual email
            subject: `[Contact Form] ${subject}`,
            text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #333;">New Message from ByteQubes Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee;">
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        console.log(`Email sent from ${email}`);
        res.status(200).send({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("SMTP Error:", error);
        res.status(500).send({ error: "Failed to send email. Check SMTP server configuration." });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});
