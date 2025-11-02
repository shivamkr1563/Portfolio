# EmailJS Setup Guide for Contact Form

Your contact form is now configured to send emails to **shivamkr1562@gmail.com** when someone fills it out. Follow these steps to complete the setup:

## 📧 Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account (no credit card required)
3. Verify your email address

### 2. Add Email Service
1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended) or any other email provider
4. Click **"Connect Account"** and follow the Gmail authorization
5. **Copy the Service ID** (something like `service_xxxxxxx`)

### 3. Create Email Template
1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Use this template content:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio contact form!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply directly to: {{from_email}}
```

4. Click **"Save"** and **copy the Template ID** (something like `template_xxxxxxx`)

### 4. Get Your Public Key
1. Go to **"Account"** in the left sidebar
2. Under **"API Keys"** section
3. **Copy your Public Key** (something like `xxxxxxxxxxxx`)

### 5. Update Your Code
Open `src/components/Contact.jsx` and replace these values around line 26-28:

```javascript
const serviceID = 'service_xxxxxxx';  // Replace with YOUR Service ID
const templateID = 'template_xxxxxxx'; // Replace with YOUR Template ID
const publicKey = 'xxxxxxxxxxxx';      // Replace with YOUR Public Key
```

### 6. Test Your Form
1. Save all files
2. Go to your portfolio website
3. Fill out the contact form and submit
4. Check your email at **shivamkr1562@gmail.com**

## 🎉 Done!
Your contact form will now send emails directly to your inbox whenever someone reaches out!

## 📝 Notes
- EmailJS free plan allows 200 emails/month
- You can add email notifications in EmailJS dashboard
- You can customize the email template anytime
- Keep your API keys secure (don't share them publicly)

## 🔧 Troubleshooting
- If emails don't arrive, check your spam folder
- Verify all IDs are correctly copied
- Check browser console for error messages
- Make sure EmailJS service is connected to your Gmail

## 📧 Your Email Configuration
- **Receiving emails at:** shivamkr1562@gmail.com
- **Form location:** Portfolio Contact Section
- **Status messages:** Success/Error notifications included
