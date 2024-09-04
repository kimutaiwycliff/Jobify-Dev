# Job Application Tracker

A modern job application tracking system built with Next.js, utilizing Shadcn components for UI, Prisma for database management, and Clerk for authentication. The application allows users to add, view, search, and analyze job applications with interactive charts using the Recharts library.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

## Features

- **Add Job**: Easily add new job applications with relevant details.
- **View All Jobs**: Display a list of all job applications with filtering and searching capabilities.
- **Job Search**: Quickly find specific job applications using a search feature.
- **Analytics Dashboard**: Visualize job application data with charts using the Recharts library.
- **Theming**: Customize the look and feel of the application with Shadcn components.
- **User Authentication**: Secure user login and registration using Clerk.

## Tech Stack

- **Frontend**: Next.js, TypeScript, React, Shadcn components
- **Backend**: Prisma (for database interaction)
- **Database**: Render (PostgreSQL)
- **Authentication**: Clerk
- **Data Fetching**: React Query
- **Charts**: Recharts

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn
- PostgreSQL (for local development, if not using Render)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kimutaiwycliff/Jobify-Dev.git
   cd Jobify-Dev
2. Install dependencies:
    ```bash
    npm install
3. Set up your environment variables. Create a .env file in the root directory and add the following:
    ```bash
    DATABASE_URL=your_database_url
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_frontend_api
    CLERK_SECRET_KEY=your_clerk_api_key
4. Run the Prisma migrations to set up your database:
    ```bash
    npx prisma migrate dev --name init
5. Start the development server:
    ```bash
    npm run dev

## Project Structure

```plaintext
.
├── src
│   ├── components          # Reusable UI components
│   ├── app                 # Next.js pages
│   ├── prisma              # Prisma schema and migrations
│   ├── lib                 # Utilities
│   ├── utils               # Utility functions
│   └── hooks               # Custom React hooks (e.g., for fetching jobs)
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation