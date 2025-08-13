"use client";
import { Button } from "@/components/ui/button";
import * as React from "react";
import emailjs from "@emailjs/browser";
import { useSnackbar } from "notistack";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// Replace with your real values
// const EMAIL_CONFIG = {
//   emailjs: {
//     serviceId: "service_aq7u297",
//     templateId: "template_8ssldmo",
//     userId: "y8F0LPKSOQvv_aiR",
//   },
// };
import { EMAIL_CONFIG } from "@/lib/email-config";

interface Form {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  address: string;
  monthlyBill: string;
  type: string;
  questions: string;
}

export const SurveyForm = () => {
  const [formState, setFormState] = useState<Form>({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    address: "",
    monthlyBill: "",
    type: "",
    questions: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async () => {
    // --- Create an object with keys that match your EmailJS template ---
    const templateParams = {
      // Template expects 'customer_name', your state has 'firstname' and 'lastname'
      customer_name: `${formState.firstname} ${formState.lastname}`,

      // Template expects 'customer_email', your state has 'email'
      customer_email: formState.email,

      // Template expects 'customer_phone', your state has 'phoneNumber'
      customer_phone: formState.phoneNumber,

      // Template expects 'customer_address', your state has 'address'
      customer_address: formState.address,

      // Template expects 'property_type', your state has 'type'
      property_type: formState.type,

      // Template expects 'monthly_bill', your state has 'monthlyBill'
      monthly_bill: formState.monthlyBill,

      // Template expects 'questions', your state has 'questions' (this one matches)
      questions: formState.questions || "No additional questions.",

      // You can also create new variables for things like the subject
      subject: `New Survey Request from ${formState.firstname}`,
    };

    try {
      await emailjs.send(
        EMAIL_CONFIG.emailjs.serviceId,
        EMAIL_CONFIG.emailjs.templateId,
        templateParams, // --- Pass the correctly structured object here ---
        EMAIL_CONFIG.emailjs.userId
      );
      enqueueSnackbar("Survey Form Submitted!", { variant: "success" });
    } catch (error) {
      console.error("Email send error:", error);
      enqueueSnackbar("Failed to submit survey form", { variant: "error" });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Your Free Survey</CardTitle>
        <CardDescription>
          Fill out the form and we'll contact you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={formState.firstname}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, firstname: e.target.value }))
            }
          />
          <Input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={formState.lastname}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, lastname: e.target.value }))
            }
          />
        </div>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <Input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formState.phoneNumber}
          onChange={(e) =>
            setFormState((prev) => ({
              ...prev,
              phoneNumber: e.target.value,
            }))
          }
        />
        <Input
          type="text"
          name="address"
          placeholder="Property Address"
          value={formState.address}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, address: e.target.value }))
          }
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Monthly Bill (₹)"
            type="number"
            value={formState.monthlyBill}
            onChange={(e) =>
              setFormState((prev) => ({
                ...prev,
                monthlyBill: e.target.value,
              }))
            }
          />
          <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={formState.type}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, type: e.target.value }))
            }
          >
            <option value="">Property Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>
        <Textarea
          placeholder="Additional requirements or questions"
          value={formState.questions}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, questions: e.target.value }))
          }
        />
        <Button
          className="w-full bg-yellow-500 hover:bg-yellow-600"
          onClick={handleSubmit}
        >
          Schedule Free Survey
        </Button>
      </CardContent>
    </Card>
  );
};
