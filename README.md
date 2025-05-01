# 🧪 Software Engineer Test – Fullstack App

This project was built as part of a technical assessment to demonstrate skills in web development, API design, database integration, containerization, testing, and deployment.  
It is built using **Next.js**, **PostgreSQL**, **Docker**, **Prisma**, and **TypeScript**.

---

## 📁 Project Structure

```txt
/app             -> Client-side pages and UI components
/lib             -> Business logic and utilities
/pages/api       -> REST API endpoints
/prisma          -> Database schema and migrations
/tests           -> Unit and integration tests
/public          -> Static assets
.env             -> Environment variables
```

---

## ⚙️ Tech Stack

- **Next.js** with TypeScript (App Router)
- **PostgreSQL** (via Docker container)
- **Prisma ORM** for database access
- **Tailwind CSS** + **ShadCN UI** for styling
- **React Hook Form** + **Zod** for form validation
- **TanStack Query** for data fetching and caching
- **Jest** + **Supertest** for testing
- **Docker** for containerization
- **Google Cloud Run** for deployment

---

## 🚀 Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Create your .env file

```bash
cp .env.example .env
```

Example environment variables:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/mydb
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open your browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the app.
You can also access the API at [http://localhost:3000/api](http://localhost:3000/api).

## 🐳 Running with Docker

To start both the app and PostgreSQL using Docker:

```bash
docker-compose up --build
```

Make sure your .env file uses this URL:

```env
DATABASE_URL=postgresql://postgres:postgres@db:5432/mydb
```

## 🧪 Running Tests

The project includes basic unit and integration tests using Jest and Supertest.
To run the tests, use the following command:

```bash
npm run test
```

This will execute all tests in the `/tests` directory.

---

## 🧠 API Overview

| Endpoint         | Method | Description                           |
| ---------------- | ------ | ------------------------------------- |
| `/api/health`    | GET    | Health check endpoint                 |
| `/api/users`     | GET    | Fetch all users from the database     |
| `/api/users`     | POST   | Create a new user                     |
| `/api/analytics` | GET    | Example of business logic/aggregation |

## 🧱 Database

This project uses **PostgreSQL** with **Prisma** as the ORM.

- Run migrations:

```bash
npx prisma migrate dev
```

- Open Prisma Studio

```bash
npx prisma studio
```

- Database schema is located in `/prisma/schema.prisma`

## ☁️ Deployment (Google Cloud Run)

You can deploy the app to **Google Cloud Run**:

- Authenticate with GCP:

```bash
gcloud auth login
```

- Build and push the Docker image

```bash
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/your-app
```

- Deploy to Cloud Run

```bash
gcloud run deploy your-app \
--image gcr.io/YOUR_PROJECT_ID/your-app \
--platform managed \
--region us-central1 \
--allow-unauthenticated
```

Alternatively, you can use services like Railway, Render, or Vercel with an external PostgreSQL database.

## 📝 Notes

- Clean and consistent code style
- Clear and descriptive commit messages
- Modular and maintainable file structure
- Easy to extend both backend and frontend
- Includes example of business logic beyond basic CRUD

## 🙌 Author

Developed by [MontyCode](https://github.com/montycode)  
Feel free to reach out for any questions or feedback!

## 📜 Disclaimer

This project is for educational purposes only.
The code and content provided in this repository are not intended for production use.
