# Neelu Solar ☀️

A modern, responsive web application built with Next.js for Neelu Solar Energy Pvt. Ltd. This portal allows potential customers to easily request quotations and schedule free site surveys.

<!-- ![Neelu Solar Form](https://i.imgur.com/K3Vw8gK.png) -->

---

## ✨ Features

- **📝 Dynamic Forms:** Separate, easy-to-use forms for "Free Site Survey" and "Quotation Requests".
- **📧 Email Notifications:** Automatically sends form submission details to the company admin using **EmailJS**.
- **📱 Fully Responsive:** A clean and modern UI that looks great on desktops, tablets, and mobile devices.
- **🔔 User Feedback:** Provides instant success or error notifications to the user upon form submission using **Notistack**.
- **✅ Type-Safe:** Built with TypeScript for a robust and maintainable codebase.

---

## 🚀 Tech Stack

This project is built with a modern, performant, and scalable tech stack:

- **Framework:** 💻 [**Next.js**](https://nextjs.org/) (App Router)
- **Language:** 🔵 [**TypeScript**](https://www.typescriptlang.org/)
- **UI Components:** 🎨 [**shadcn/ui**](https://ui.shadcn.com/) & [**Ant Design**](https://ant.design/)
- **Styling:** 💨 [**Tailwind CSS**](https://tailwindcss.com/)
- **Notifications:** 🔔 [**EmailJS**](https://www.emailjs.com/) & [**Notistack**](https://notistack.com/)
- **Fonts:** ✍️ [**Geist**](https://vercel.com/font) (Sans & Mono)

---

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

First, clone the project repository to your local machine.

```bash
git clone [https://github.com/your-username/neelu-solar.git](https://github.com/your-username/neelu-solar.git)
cd neelu-solar

```

### 2. Install Dependencies

Install all the required npm packages.

```bash
npm install
```

### 3. Set Up Environment Variables

This project uses EmailJS to handle form submissions. You need to provide your EmailJS credentials in an environment file.

Create a new file named .env.local in the root of your project folder and add the following variables:

Code snippet

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_QUOTATION=your_quotation_template_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SURVEY=your_survey_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Important: You can find these keys in your EmailJS account dashboard under "Email Services" and "Email Templates". Using separate template IDs for each form is highly recommended.

### 4. Run the Development Server

Now, you can start the local development server.

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result. You can start editing the page by modifying app/page.tsx.

### 👤 Author

Kartikey Namdev
