const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const generateEmailTemplate = require('./email-template');
const generateWaitlistTemplate = require('./waitlist-template');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4173'],
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Accept'],
}));
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'An unexpected error occurred',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use an app-specific password
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message, selectedAddOns, selectedTier } = req.body;

  // Generate both HTML and plain text versions
  const htmlContent = generateEmailTemplate({ name, email, phone, message, selectedAddOns, selectedTier });
  const textContent = `
New Website Inquiry

Plan Selected: ${selectedTier.name} ($${selectedTier.price}/month)

Contact Information:
-------------------
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Selected Add-ons:
----------------
${selectedAddOns.join('\n')}

Additional Information:
---------------------
${message || 'No additional information provided'}
`;

  const mailOptions = {
    from: {
      name: 'Intellisync Website',
      address: process.env.EMAIL_USER
    },
    to: 'chris.june@intellisync.ca',
    subject: `New Website Inquiry - ${selectedTier.name} Plan`,
    text: textContent, // Fallback plain text content
    html: htmlContent  // HTML content
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.post('/api/waitlist', async (req, res) => {
  const { name, email, company, interests, source, specificOffer } = req.body;

  const htmlContent = generateWaitlistTemplate({ 
    name, 
    email, 
    company, 
    interests, 
    source, 
    specificOffer 
  });

  const mailOptions = {
    from: {
      name: 'Intellisync Website',
      address: process.env.EMAIL_USER
    },
    to: 'chris.june@intellisync.ca',
    subject: `New ${source === 'offer' ? 'Offer Interest' : 'Waitlist'} Submission`,
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Submission received successfully' });
  } catch (error) {
    console.error('Error processing submission:', error);
    res.status(500).json({ error: 'Failed to process submission' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});