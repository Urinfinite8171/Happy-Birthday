import nodemailer from "nodemailer";

// Define email options
const mailOptions = {
  from: "shashirajmaddela@gmail.com", // Sender email address
  to: "shashiraj2468@gmail.com", // Recipient email address
  subject: "Test Email", // Subject line
  text: "This is a test email from Nodemailer", // Plain text body
  html: "<p>This is a test email from Nodemailer</p>",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});

export function SendEmail(recipient) {}
