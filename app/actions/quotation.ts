import { EMAIL_CONFIG } from "@/lib/email-config";
import emailjs from "@emailjs/browser";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";
interface Form {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: number;
  address: string;
  monthlyBill: number;
  type: string;
  questions: string;
}
export async function submitQuotationForm(formData: Form) {
  const router = useRouter();
  // Extract form data
  const firstName = formData.firstname;
  const lastName = formData.lastname;
  const email = formData.email;
  const phone = formData.phoneNumber;
  const address = formData.address;
  const monthlyBill = formData.monthlyBill;
  const propertyType = formData.type;
  const questions = formData.questions;

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !address) {
    router.push("/quotation-error?reason=missing-fields");
  }

  const submissionDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });
  // Create template parameters with consistent naming
  const templateParams = {
    customer_name: `${firstName} ${lastName}`,
    customer_email: email,
    customer_phone: phone,
    customer_address: address,
    property_type: propertyType,
    monthly_bill: monthlyBill > 0 ? `₹${monthlyBill}` : "Not specified",
    questions: questions || "No additional questions",
    submission_date: submissionDate,

    // Add variables for email subject
    to_email: EMAIL_CONFIG.companyEmail,
    subject: `Solar Quotation Request - ${firstName} ${lastName}`,
  };

  emailjs
    .send(
      EMAIL_CONFIG.emailjs.serviceId,
      EMAIL_CONFIG.emailjs.templateId,
      templateParams,
      EMAIL_CONFIG.emailjs.userId
    )
    .then((result) => {
      console.log("Success:", result.text);
      router.push("/quotation-success");
    })
    .catch((error) => {
      console.error("Error:", error);
      router.push("/quotation-error?reason=email-failed");
    });

  console.log(formData);

  //   try {
  //     // Method 1: Using EmailJS (Client-side service, works without server setup)
  //     const response = await fetch(
  //       "https://api.emailjs.com/api/v1.0/email/send",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           service_id: EMAIL_CONFIG.emailjs.serviceId,
  //           template_id: EMAIL_CONFIG.emailjs.templateId,
  //           user_id: EMAIL_CONFIG.emailjs.userId,
  //           template_params: {
  //             to_email: EMAIL_CONFIG.companyEmail,
  //             subject: `${EMAIL_CONFIG.subjectPrefix} - ${firstName} ${lastName}`,
  //             customer_name: `${firstName} ${lastName}`,
  //             customer_email: email,
  //             customer_phone: phone,
  //             customer_address: address,
  //             property_type: propertyType,
  //             monthly_bill: monthlyBill || "Not specified",

  //             submission_date: submissionDate,
  //             // Full message for email body
  //             message: `
  // New Solar Quotation Request
  // ===========================

  // Customer Details:
  // • Name: ${firstName} ${lastName}
  // • Email: ${email}
  // • Phone: ${phone}
  // • Address: ${address}
  // • Property Type: ${propertyType}
  // • Monthly Bill: ₹${monthlyBill || "Not specified"}

  // Additional Requirements:
  // ${questions}

  // Submitted: ${submissionDate}

  // Please contact within 24 hours to schedule site survey.
  //           `.trim(),
  //           },
  //         }),
  //       }
  //     );
  //     if (!response.ok) {
  //       console.log(response, "Failed");
  //       //   throw new Error(`EmailJS API error: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     console.log(result);

  //     if (result.status !== 200) {
  //       throw new Error(`EmailJS service error: ${result.text}`);
  //     }

  //     // Success - router.push to success page
  //     router.push("/quotation-success");
  //   } catch (error) {
  //     console.error("Error sending quotation email:", error);

  //     // Log the error details for debugging
  //     console.error("Form data:", {
  //       firstName,
  //       lastName,
  //       email,
  //       phone,
  //       address,
  //       propertyType,
  //       monthlyBill,
  //       //   requirements,
  //     });

  //     // router.push to error page with error info
  //     router.push("/quotation-error?reason=email-failed");
  //   }
}
