# Notice Board CRUD Application

A full-stack Notice Board application built using **Next.js (Pages Router)**, **Prisma**, and a **hosted MySQL database**. The application supports full CRUD (Create, Read, Update, Delete) functionality with server-side validation and responsive design.

## Features

* Create a new notice
* View all notices
* Edit existing notices
* Delete notices with confirmation
* Server-side validation using API routes
* Responsive UI for mobile and desktop
* Urgent notices displayed first with a red "Urgent" badge
* Data stored in a hosted database using Prisma

## Tech Stack

* Next.js (Pages Router)
* Prisma ORM
* MySQL (Hosted Database)
* Tailwind CSS
* Axios
* Vercel (Deployment)

## Notice Fields

* Title (Required)
* Body (Required)
* Category (Exam, Event, General)
* Priority (Normal, Urgent)
* Publish Date
* Optional Image (if implemented)

## API Routes

| Method | Route               | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/api/notices`      | Fetch all notices |
| POST   | `/api/notices`      | Create a notice   |
| PUT    | `/api/notices/[id]` | Update a notice   |
| DELETE | `/api/notices/[id]` | Delete a notice   |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Vikas78972000/NoticesBoard
cd notice-board
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file and add:

```env
DATABASE_URL="your_database_connection_string"
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run Database Migrations

```bash
npx prisma migrate dev
```

### 6. Start the Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## Project Structure

```
pages/
 ├── api/
 │    └── notices/
 ├── notices/
 ├── index.js

components/
prisma/
styles/
```

## Deployment

The application is deployed on **Vercel** and uses a hosted database.

## One Thing I Would Improve With More Time

If I had more time, I would add:

* User authentication
* Search and filtering by category
* Pagination for large numbers of notices
* Image upload using Cloudinary
* Rich text editor for notice body
* Better loading states and toast notifications

## AI Usage

AI tools (ChatGPT) were used to:

* Understand the assignment requirements
* Debug Next.js and Prisma issues
* Improve code structure and best practices
* Generate parts of the README documentation

All application logic, testing, debugging, and final implementation were completed and verified manually.

## Author

**Vikas Yadav**
