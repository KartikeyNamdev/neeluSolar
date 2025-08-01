"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SnackbarProvider } from "notistack";
import SnackBar from "./SnackBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Sun,
  Zap,
  Shield,
  CheckCircle,
  Cable,
  BatteryFull,
  Phone,
  Mail,
  MapPin,
  Wrench,
  Settings,
  FileText,
  Camera,
  Calculator,
  Leaf,
  DollarSign,
  Clock,
  Award,
  Grid3x3,
} from "lucide-react";
import { SurveyForm } from "./SurveyForm";
import ProductsSection from "./Products";

export default function SolarCompanyWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <SnackbarProvider maxSnack={3}>
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold text-gray-900">
                Neelu Solar Energy Pvt. Ltd.
              </span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="#services"
                className="text-gray-600 hover:text-yellow-600"
              >
                Services
              </Link>
              <Link
                href="#process"
                className="text-gray-600 hover:text-yellow-600"
              >
                Process
              </Link>
              <Link
                href="#gallery"
                className="text-gray-600 hover:text-yellow-600"
              >
                Gallery
              </Link>
              <Link href="#faq" className="text-gray-600 hover:text-yellow-600">
                FAQ
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-yellow-600"
              >
                Contact
              </Link>
            </nav>
            <Button className="bg-yellow-500 hover:bg-yellow-600">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 gap-20 items-center">
              <div>
                <Badge className="mb-4 bg-yellow-100 text-yellow-800">
                  Clean Energy Solutions
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Power Your Future
                  <br /> with
                  <span className="text-yellow-600"> Solar Energy</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Complete solar solutions from design to installation and
                  maintenance. Save money, reduce carbon footprint, and achieve
                  energy independence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600"
                    onClick={() => {
                      window.location.href = "#form";
                    }}
                  >
                    <Calculator className="h-5 w-5 mr-2" />
                    Get Free Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      window.location.href = "#form";
                    }}
                  >
                    <Camera className="h-5 w-5 mr-2" />
                    Schedule Survey
                  </Button>
                </div>
                <div className="flex items-center gap-8 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      Active
                    </div>
                    <div className="text-sm text-gray-600">Installations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      Subsidy
                    </div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
              <div className="gap-10 items-end">
                <img
                  src="/logo.jpeg"
                  alt="Solar panels installation"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-xl sm:h-2/3 sm:w-2/3 h-1/2 w-1/2 "
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction - Why Solar */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Solar Energy?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Solar energy is the most abundant and clean source of power
                available. Make the smart choice for your wallet and the
                environment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Save Money</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Reduce your electricity bills by up to 90%. Solar pays for
                    itself within 3-5 years and provides free energy for
                    decades.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Eco-Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Zero emissions, zero pollution. A typical home solar system
                    prevents 3-4 tons of carbon emissions annually.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>Energy Independence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Generate your own clean electricity and reduce dependence on
                    the grid. Perfect for remote locations and backup power.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Solve Problems */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  How We Solve Your Energy Problems
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        High Electricity Bills
                      </h3>
                      <p className="text-gray-600">
                        Our solar systems can reduce your monthly electricity
                        costs by 70-90%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Power Outages
                      </h3>
                      <p className="text-gray-600">
                        Battery backup systems ensure uninterrupted power supply
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Complex Installation Process
                      </h3>
                      <p className="text-gray-600">
                        We handle everything from permits to grid connection
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Maintenance Concerns
                      </h3>
                      <p className="text-gray-600">
                        25-year warranty with regular maintenance and monitoring
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/whyweneed.jpg"
                  alt="Solar installation process"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">
                Complete solar solutions from consultation to maintenance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <Settings className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>System Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Custom solar panel layout</li>
                    <li>• Structural engineering</li>
                    <li>• Energy production analysis</li>
                    {/* <li>• 3D modeling & visualization</li> */}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Wrench className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Solar panel mounting</li>
                    <li>• Inverter installation</li>
                    <li>• DC/AC converter setup</li>
                    <li>• Electrical connections</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <FileText className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>Government Approvals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Net metering applications</li>
                    <li>• Electricity department liaison</li>
                    <li>• Permit processing</li>
                    <li>• Subsidy documentation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Regular cleaning & inspection</li>
                    <li>• Performance monitoring</li>

                    <li>• 24/7 technical support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Working Process */}
        <section id="product" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Working Process
              </h2>
              <p className="text-xl text-gray-600">
                Simple, transparent, and efficient installation process
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Site Survey</h3>
                <p className="text-gray-600">
                  Free on-site assessment of your property and energy needs
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                <p className="text-gray-600">
                  Tailored solar system design with detailed quotation
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Installation</h3>
                <p className="text-gray-600">
                  Professional installation with government approvals
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Activation</h3>
                <p className="text-gray-600">
                  System testing, grid connection, and ongoing support
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Our Products */}

        <section id="services" className="py-20 bg-blue-200">
          <ProductsSection />
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Work Gallery
              </h2>
              <p className="text-xl text-gray-600">
                See our successful solar installations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="/panel2.jpg"
                  alt="Residential solar installation"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold">
                    Residential Installation
                  </p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="/panel7.jpeg"
                  alt="Commercial solar installation"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold">Commercial Project</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="/convertor.jpg"
                  alt="Solar inverter installation"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold">Inverter Setup</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="/panel8.jpeg"
                  alt="Solar maintenance"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold">
                    Maintenance Service
                  </p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="/str2.jpeg"
                  alt="Net meter installation"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold">
                    Solar Farm Structure
                  </p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="/str3.jpeg"
                  alt="Solar farm"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold">Structure</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Site Survey & Quotation */}
        <section id="form" className="py-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Get Your Free Site Survey & Quotation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our experts will visit your location, assess your energy
                  needs, and provide a detailed quotation with no hidden costs.
                  The survey is completely free with no obligations.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Free on-site technical assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Detailed energy consumption analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Custom system design & 3D visualization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Transparent pricing with ROI calculation</span>
                  </div>
                </div>
              </div>

              <SurveyForm />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about solar energy
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>How to apply ?</AccordionTrigger>
                  <AccordionContent>
                    Residential consumers and Group Housing Societies can apply
                    through the PM SuryaGhar Muft Bijli Yojana portal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Where to install ?</AccordionTrigger>
                  <AccordionContent>
                    Rooftop systems can be installed on residential and
                    commercial buildings, housing societies, and more.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Installation process ?</AccordionTrigger>
                  <AccordionContent>
                    Consumers can choose to install through developers,
                    integrators, or manufacturers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Do you handle government approvals and net metering?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we handle all government approvals, including net
                    metering applications with the electricity department. We
                    also assist with subsidy applications and ensure compliance
                    with all local regulations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    What warranty do you provide?
                  </AccordionTrigger>
                  <AccordionContent>
                    We provide 25-year performance warranty on solar panels,
                    10-year warranty on inverters, and 5-year warranty on
                    installation workmanship. We also offer comprehensive
                    maintenance packages for optimal system performance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    How do I maintain my solar system?
                  </AccordionTrigger>
                  <AccordionContent>
                    Solar systems require minimal maintenance. We recommend
                    annual professional cleaning and inspection. Our maintenance
                    packages include regular cleaning, performance monitoring,
                    and immediate repair services.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section id="contact">
          <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Sun className="h-8 w-8 text-yellow-500" />
                    <span className="text-2xl font-bold">
                      Neelu Solar Energy Pvt. Ltd.
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Leading solar energy company providing complete solutions
                    from design to maintenance. Powering a sustainable future
                    with clean energy.
                  </p>
                  <div className="flex space-x-4">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm text-gray-400">
                      Certified Solar Installer
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Solar System Design</li>
                    <li>Panel Installation</li>
                    <li>Inverter Setup</li>
                    <li>Net Metering</li>
                    <li>Maintenance & Support</li>
                    <li>Government Approvals</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <Link href="#services" className="hover:text-yellow-500">
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link href="#process" className="hover:text-yellow-500">
                        Working Process
                      </Link>
                    </li>
                    <li>
                      <Link href="#gallery" className="hover:text-yellow-500">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href="#faq" className="hover:text-yellow-500">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact" className="hover:text-yellow-500">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                  <div className="space-y-3 text-gray-400">
                    <div className="flex-col items-center space-x-3">
                      <span>
                        <div className="flex gap-4">
                          <Phone className="h-5 w-5 text-yellow-500" />
                          Company - +91 9425915028 <br />
                        </div>
                        Bhopal Branch - Rakesh Singh 9425915028 <br />
                        Patna branch - Samir kumar 9934087314
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-yellow-500" />
                      <span>Neelusolarenergy@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="md:h-12 md:w-12 h-10 w-10 text-yellow-500" />
                      <span>
                        F-8 & F-9, First Floor, Above Sagar Gaire, Vidyasagar
                        College, Awadhpuri Chauraha, Bhopal (M.P.)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-yellow-500" />
                      <span>Mon-Sat: 9AM-6PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>
                  &copy; 2025 SolarTech Solutions. All rights reserved. |
                  Powering a sustainable future with clean energy.
                </p>
              </div>
            </div>
          </footer>
        </section>
      </SnackbarProvider>
    </div>
  );
}
