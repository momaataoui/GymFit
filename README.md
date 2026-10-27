
# 🏋️‍♂️ Gym Project - React & TypeScript

![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF6C00?style=for-the-badge&logo=framer&logoColor=white)


Welcome to the **Gym Project**, a modern web application built with **React**, **TypeScript**, and **Tailwind CSS**. This project is designed to manage and showcase gym services, activities, and member benefits in a clean, responsive, and user-friendly interface.

---

## 🔍 Overview

This single-page application lets a fitness center (EvoGym) present its:

- Hero landing section with sponsors
- Benefits and facilities
- Classes (horizontal scrolling gallery)
- BMI calculator with a class recommendation
- Pricing plans with a monthly / yearly toggle
- Member testimonials carousel
- Contact / sign-up form (sent via [FormSubmit](https://formsubmit.co))
- Footer with quick links and contact info

It is fully responsive and developed using reusable components and clean design principles.

---

## 🛠️ Tech Stack

- **React** — Frontend JavaScript library
- **TypeScript** — Static type checking
- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Animations and transitions
- **Heroicons** — Scalable vector icons
- **React Hook Form** — Form validation
- **react-anchor-link-smooth-scroll** — Smooth in-page navigation
- **Vite** — Blazing fast development build tool

---

## 📁 Project Structure
```plaintext
gym-projet-react/
├── src/
│   ├── assets/        # Images and media
│   ├── hooks/         # Custom React hooks (useMediaQuery)
│   ├── scenes/        # Page sections: navbar, home, benefits, ourClasses, bmi, pricing, testimonials, contactUs, footer
│   ├── shared/        # Reusable components (ActionButton, HText, BackToTop) and TypeScript types
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Tailwind base styles and fonts
├── index.html         # HTML template
├── tailwind.config.cjs
├── vite.config.ts
├── tsconfig.json
└── package.json
```
**🚀 Getting Started:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/momaataoui/gym-projet-react.git
    ```

2.  **Navigate into the project directory:**
    ```bash
    cd gym-projet-react
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open your browser:**
    Navigate to the local URL provided by Vite (usually `http://localhost:5173` or similar).

6.  **Other scripts:**
    ```bash
    npm run build    # type-check and build for production
    npm run preview  # preview the production build
    npm run format   # format the source with Prettier
    npm run lint     # lint with ESLint
    npm test         # run the tests
    ```
    
 ## 🧠 Features
⚡ **Fully responsive layout**

💡 **Clean and modular component structure**

🎨 **Tailwind CSS design system**

🧩 **Shared components and TypeScript types**

🎥 **Smooth animations with Framer Motion**

🧮 **Interactive BMI calculator and pricing toggle**

⬆️ **Back-to-top button and optimized WebP images**

## 🧪 Testing
Tests use **Vitest** and **React Testing Library** (see `src/App.test.tsx`). They check that every in-page link points to a real section, that the mobile menu closes after navigating, that the contact form only submits valid input, and that the BMI calculator, pricing toggle and testimonials carousel work.

```bash
npm test         # run the tests once
npm run lint     # check the code with ESLint
```

## 📦 Deployment
You can deploy this app easily on platforms like:

*   **Vercel**

*   **Netlify**

*   **GitHub Pages**

*   **Render**

## 👤 Author

*   🔗 **Mohammed MAATAOUI Belabbes** - [momaataoui](https://github.com/momaataoui)
*   🔗 **Zaki Hamza** - [hamzazaki](https://github.com/HAMZA3709)


## Acknowledgements 🙏

*   🔗**Pr. AITBACHIR Ilhame** - Pedagogical Supervisor

---
