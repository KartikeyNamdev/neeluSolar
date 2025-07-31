import { AlertCircle, Home, Phone, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function QuotationError() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4">
            <AlertCircle className="h-16 w-16 text-red-500" />
          </div>
          <CardTitle className="text-2xl text-red-700">
            Submission Failed
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            We're sorry, but there was an issue submitting your quotation
            request. Please try again or contact us directly.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">
              Alternative ways to reach us:
            </h3>
            <div className="text-sm text-blue-700 space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>📧</span>
                <span>info@solartechsolutions.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1 bg-transparent" variant="outline">
              <Link href="/">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Link>
            </Button>
            <Button asChild className="flex-1">
              <Link href="tel:+919876543210">
                <Phone className="h-4 w-4 mr-2" />
                Call Us Now
              </Link>
            </Button>
          </div>

          <Button asChild variant="ghost" className="w-full">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
