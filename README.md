Certainly! Here's a revised README for your Blog Web App project:

---

# Blog Web App 

Welcome to the Blog Web App with Malicious URL Detection project. This web application is built using Next.js and Prisma, and it includes a feature for detecting potentially malicious URLs.

## Getting Started

To get started with this project, follow these steps:

1. **Set Up the Development Server:**
   - First, make sure you have Node.js installed on your system.
   - Run the development server with one of the following commands:

     ```
     npm run dev
     # or
     yarn dev
     # or
     pnpm dev
     ```

   Open http://localhost:3000 in your web browser to view the application.

2. **Prisma Configuration:**
   - Ensure that you have MongoDB set up for Prisma.
   - To configure Prisma, follow these steps:

     a. Create a `.env` file and add the following configurations:
     - Database connection link
     - Google and GitHub authentication IDs and secrets

     b. Install required packages:

     ```bash
     npm install @prisma/client @auth/prisma-adapter
     npm install prisma --save-dev
     ```

     c. Initialize Prisma with MongoDB as the datasource provider:

     ```bash
     npx prisma init --datasource-provider mongodb
     npx prisma generate
     ```

3. **Start Developing:**
   You are now ready to start developing your web application. You can edit the app/page.js file, and the page will automatically update as you make changes.

## Font Optimization

This project uses next/font to automatically optimize and load the "Inter" font, which is a custom Google Font.

## Frontend Examples 

 **Home Page:**
![Screenshot 2023-10-31 210705](https://github.com/Indula-Perera/Blog-Web-App-With-Malicious-URL-Detection/assets/105506303/0a7e9ca8-c7da-4071-9401-2c2324d98f27)

**Recent Posts:**
![Screenshot 2023-10-31 210800](https://github.com/Indula-Perera/Blog-Web-App-With-Malicious-URL-Detection/assets/105506303/583c324a-a2a9-4733-bdce-625d8cc4f902)

**Write Page:**
![Screenshot 2023-10-31 210837](https://github.com/Indula-Perera/Blog-Web-App-With-Malicious-URL-Detection/assets/105506303/70b824e1-c37e-4eda-a447-934e8d7e9b30)

**Page by Categories:**
![Screenshot 2023-10-31 210901](https://github.com/Indula-Perera/Blog-Web-App-With-Malicious-URL-Detection/assets/105506303/1fc0956e-a671-49c0-9d97-e36b242327f9)

**Single Post Page:**
![Screenshot 2023-10-31 210956](https://github.com/Indula-Perera/Blog-Web-App-With-Malicious-URL-Detection/assets/105506303/24bd4ff7-a5c5-4e04-a6e8-25aded5fd3ac)

**Malicious URL Detection Model Link**

Deploy this using Streamlit Library;  
Drive Link: https://drive.google.com/drive/folders/1f5DjXE_rQ8pb6X5IxRLeD2Zna0kx8ieq?usp=sharing






## Learn More

To learn more about Next.js and how to work with this project, you can refer to the following resources:

- [Next.js Documentation](https://nextjs.org/docs): Learn about Next.js features and the API.
- [Learn Next.js](https://nextjs.org/learn): An interactive Next.js tutorial to get started with the framework.
- [Next.js GitHub Repository](https://github.com/vercel/next.js): Feel free to contribute and provide feedback on the project.

Enjoy building your Blog Web App with Malicious URL Detection using Next.js and Prisma!

---

Feel free to modify the content further as needed for your specific project and audience.
