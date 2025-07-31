// Email Configuration
// Replace these values with your actual email service details

export const EMAIL_CONFIG = {
  // Option 1: EmailJS (Recommended for simple setup)
  emailjs: {
    serviceId: "service_aq7u297", // Get from EmailJS dashboard
    templateId: "template_gk9ndod", // Get from EmailJS dashboard
    userId: "y8F0LPKSOQvv_aiR-", // Get from EmailJS dashboard
  },

  // Your company email where quotation requests will be sent
  companyEmail: "kartikeynamdev2003@gmail.com",

  // Email subject prefix
  subjectPrefix: "Solar Quotation Request",
};

// Instructions for setup:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the values above with your actual IDs
// 5. Update the companyEmail with your actual email address
