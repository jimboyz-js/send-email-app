# 📧 Send Email with Attachment using Node.js

This is a simple Node.js application that allows users to send emails with attachments using **Nodemailer**. The application is built using **Express.js** and supports file uploads via **Multer**. It also includes **dotenv** for environment configuration and **CORS** support for client-side requests.

---

## 🚀 Features

- Send email via SMTP
- Upload and attach files to emails
- Environment-based configuration using `.env`
- API endpoint for sending emails
- CORS enabled for cross-origin requests

---

## 🛠️ Technologies Used

- **JavaScript (Node.js)**
- **Express** – for building the REST API
- **Nodemailer** – for sending emails
- **Multer** – for handling file uploads
- **fs** – for file system operations
- **dotenv** – to load environment variables
- **CORS** – to enable cross-origin requests
- **HTML** - for the client-side form

---

## 📁 Project Structure

```markdown
📁 project-back-end-root/
├── 📁 uploads/          - Temporarily stores uploaded files
├── 📄 .env              - Environment variable configuration
├── 📄 .gitignore        - Git ignore file
├── 📄 package.json      - Project metadata and dependencies
├── 📄 README.md         - Project documentation
└── 📄 app.js            - Main server application

```

## ⚙️ Installation

1. **Clone the repository**
   
   git clone https://github.com/jimboyz-js/send-email-app.git
   
   cd send-email-app

2. **Install dependencies**

    npm install

3. **Set up environment variables**

    * Create a .env file in the back-end root directory and add your SMTP configuration:

```ini
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SECURE=true
SERVICE=mail
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_RECEIVER=your-email@example.com
```

## ▶️ Usage

1. **Start the server**

```bash
node app.js
```

You can start the Server using nodemon:  

* For development (auto-restart on file changes):
```bash
npm run dev
```

* For production:

```
npm start
```

## 📬 API Endpoint

**POST /send-email**

* Sends an email with optional file attachment.

**Headers:**

* Content-Type: multipart/form-data

**Form Data:**

* to: Recipient email address

* subject: Email subject

* text: Email body

* attachment: (optional) File to be attached

Example using Postman:

```yaml
POST /send-email
Form Data:
- to: someone@example.com
- subject: Test Email
- text: This is a test email with attachment.
- attachment: Choose file
```

🧪 Example Response:

```json
{
  "message": "Email sent successfully"
}
```

## 🧹 Cleanup
The uploaded file is automatically deleted in the uploads directory after sending the email.

## 📌 Notes

* Make sure to keep your .env file secure, correct and it is placed under back-end directory. 

* Ensure your SMTP credentials are correct and the sender address is authorized.

* Some providers (like Gmail) require enabling access for less secure apps or generating app-specific passwords.

## 📄 License
This project is open-source and available under the MIT License.

## 🙌 Acknowledgments
* Nodemailer

* Express.js

* Multer

* dotenv

* nodemon

## 🔗 Connect
Feel free to contribute or fork this project.
For questions or suggestions, reach out via GitHub or open an issue.



