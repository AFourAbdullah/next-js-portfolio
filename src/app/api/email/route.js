import nodemailer from "nodemailer";

export async function POST(req, res) {
  const MYMAIL = process.env.MYGMAIL;
  const MYPASS = process.env.MYPASS;
  if (req.method === "POST") {
    const { email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email service provider
      auth: {
        user: MYMAIL, // Your email address
        pass: MYPASS, // Your email password or app-specific password
      },
    });

    try {
      const info = await transporter.sendMail({
        from: email,
        to: MYMAIL, // Your email address
        subject: "Portfolio Contact Form",
        text: message,
      });

      console.log("Email sent:", info.response);
      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed." });
  }
}
