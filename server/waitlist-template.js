function generateWaitlistTemplate(data) {
  const { name, email, company, interests, source, specificOffer } = data;
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
    .highlight {
      background-color: #f3f4f6;
      padding: 15px;
      border-radius: 6px;
      margin: 10px 0;
    }
    .interest-tag {
      display: inline-block;
      background-color: #e5e7eb;
      padding: 4px 8px;
      border-radius: 4px;
      margin: 2px;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="header">
    <h2>${source === 'offer' ? 'New Offer Interest' : 'New Waitlist Submission'}</h2>
    <div>Received on ${date}</div>
  </div>
  
  <div class="content">
    <div class="section">
      <h3>Contact Information</h3>
      <div class="highlight">
        <div><strong>Name:</strong> ${name}</div>
        <div><strong>Email:</strong> ${email}</div>
        ${company ? `<div><strong>Company:</strong> ${company}</div>` : ''}
      </div>
    </div>

    ${specificOffer ? `
    <div class="section">
      <h3>Specific Offer</h3>
      <div class="highlight">
        ${specificOffer}
      </div>
    </div>
    ` : ''}

    <div class="section">
      <h3>Areas of Interest</h3>
      <div class="highlight">
        ${interests.map(interest => `
          <span class="interest-tag">${interest}</span>
        `).join('')}
      </div>
    </div>

    <div style="text-align: center; color: #666; font-size: 0.8em; margin-top: 20px;">
      © ${new Date().getFullYear()} Intellisync Solutions. All rights reserved.
    </div>
  </div>
</body>
</html>
  `;
}

module.exports = generateWaitlistTemplate;