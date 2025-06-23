import sendMail from './config/sendEmail.js';

sendMail(
  'your-email@gmail.com',
  'Test Email',
  '',
  '<p>This is a test email from Node.js app</p>'
).then((res) => {
  console.log('✅ Email Result:', res);
}).catch((err) => {
  console.error('❌ Email Send Failed:', error);
});

console.log("🚀 testEmail.js started");  // Debug line
