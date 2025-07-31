"use client";
import { Button } from "@/components/ui/button";
import * as React from "react";
import emailjs from "@emailjs/browser";
import { VariantType, useSnackbar } from "notistack";
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
  phoneNumber: number;
  address: string;
  monthlyBill: number;
  type: string;
  questions: string;
}

export const SurveyForm = () => {
  const [formState, setFormState] = useState<Form>({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: 0,
    address: "",
    monthlyBill: 0,
    type: "",
    questions: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async () => {
    try {
      await emailjs.send(
        EMAIL_CONFIG.emailjs.serviceId,
        EMAIL_CONFIG.emailjs.templateId,
        {
          ...formState,
          from_name: `${formState.firstname} ${formState.lastname}`,
          message: formState.questions,
        },
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
              phoneNumber: Number(e.target.value),
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
                monthlyBill: Number(e.target.value),
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
