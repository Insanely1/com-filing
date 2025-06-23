import sendEmail from './emailService.js';
import nodemailer from 'nodemailer';

const sendMail = async (to, subject, text = '', html = '') => {
  try {
    const result = await sendEmail(to, subject, text, html);
     console.log('📧 Email sending result:', result);
    return result.success === true;
  } catch (error) {
    console.error("❌ Error sending mail:", error);
    return false;
  }
};

export default sendMail;
