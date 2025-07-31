import { CheckCircle, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function QuotationSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl text-green-700">
            Request Submitted Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            Thank you for your interest in solar energy! We've received your
            quotation request and will contact you within 24 hours to schedule
            your free site survey.
          </p>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">
              What happens next?
            </h3>
            <ul className="text-sm text-yellow-700 space-y-1 text-left">
              <li>• Our team will review your requirements</li>
              <li>• We'll call you to schedule a convenient time</li>
              <li>• Free on-site technical assessment</li>
              <li>• Detailed quotation with savings projection</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="tel:+919876543210">
                <Phone className="h-4 w-4 mr-2" />
                Call Us Now
              </Link>
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Need immediate assistance? Call us at{" "}
            <Link
              href="tel:+919876543210"
              className="text-yellow-600 font-semibold"
            >
              +91 98765 43210
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
