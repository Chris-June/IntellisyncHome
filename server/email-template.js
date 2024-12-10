function generateEmailTemplate(data) {
  const { name, email, phone, message, selectedAddOns, selectedTier } = data;
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
    }
    .header {
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
    }
    .content {
      padding: 20px;
      border: 1px solid #e5e7eb;
      border-radius: 0 0 8px 8px;
    }
    .section {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e5e7eb;
    }
    .section:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .label {
      font-weight: bold;
      color: #4b5563;
      margin-bottom: 5px;
    }
    .highlight {
      background-color: #f3f4f6;
      padding: 15px;
      border-radius: 6px;
      margin: 10px 0;
    }
    .price {
      font-size: 1.2em;
      color: #3b82f6;
      font-weight: bold;
    }
    .addon-tag {
      display: inline-block;
      background-color: #e5e7eb;
      padding: 4px 8px;
      border-radius: 4px;
      margin: 2px;
      font-size: 0.9em;
    }
    .footer {
      margin-top: 20px;
      font-size: 0.8em;
      color: #6b7280;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="header">
    <h2>New Website Inquiry</h2>
    <div>Received on ${date}</div>
  </div>
  
  <div class="content">
    <div class="section">
      <div class="label">Selected Plan</div>
      <div class="highlight">
        <strong>${selectedTier.name}</strong>
        <div class="price">$${selectedTier.price}/month</div>
      </div>
    </div>

    <div class="section">
      <div class="label">Contact Information</div>
      <div class="highlight">
        <div><strong>Name:</strong> ${name}</div>
        <div><strong>Email:</strong> ${email}</div>
        <div><strong>Phone:</strong> ${phone || 'Not provided'}</div>
      </div>
    </div>

    <div class="section">
      <div class="label">Selected Add-ons</div>
      <div class="highlight">
        ${selectedAddOns.map(addon => `
          <span class="addon-tag">${addon}</span>
        `).join('')}
      </div>
    </div>

    ${message ? `
    <div class="section">
      <div class="label">Additional Information</div>
      <div class="highlight">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
    ` : ''}

    <div class="footer">
      <p>This is an automated message from your website contact form.</p>
      <p>© ${new Date().getFullYear()} Intellisync Solutions. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
}

module.exports = generateEmailTemplate;
