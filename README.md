Full-Stack Task Manager – Spring Boot + React

**Candidate:** Mahdi Aouiti  
**Date:** November 2025  
**Position:** Software Developer  

---

📌 1. Project Overview

This project is a full-stack web application developed as part of a technical assessment for a Software Developer role.

It provides a **Task Manager** with the ability to:

- Create new tasks  
- Edit existing tasks  
- Toggle task completion  
- View all tasks  
- Delete tasks  

The application runs locally, with **no external database required**, thanks to an embedded H2 in-memory database.

---

🧰 2. Technology Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Backend     | Java 17, Spring Boot 3, Spring Web, JPA |
| Database    | H2 (in-memory)                      |
| Frontend    | React 18, Axios                     |
| Build Tools | Maven, npm                          |
| API Format  | REST with JSON                      |

---

📦 3. Project Structure

```
fullstack-tasks/
├── backend/              # Spring Boot REST API
│   ├── src/              # Backend source code
│   ├── pom.xml           # Maven build config
│   └── application.properties
├── frontend/             # React frontend
│   ├── src/              # Frontend source code
│   ├── package.json      # Node dependencies
│   └── public/           # Static assets
└── README.md             # Project documentation
```

---

🚀 4. Backend (Spring Boot)

### Requirements
- Java 17+
- Maven

### How to Run

```bash
cd backend
mvn spring-boot:run
```

Backend will run at:  
➡️ http://localhost:8080

### REST API Endpoints

| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| GET    | `/api/tasks`      | Retrieve all tasks |
| POST   | `/api/tasks`      | Create a new task  |
| GET    | `/api/tasks/{id}` | Retrieve by ID     |
| PUT    | `/api/tasks/{id}` | Update task        |
| DELETE | `/api/tasks/{id}` | Delete task        |

---

💻 5. Frontend (React)

### Requirements
- Node.js (v16+ recommended)
- npm

### How to Run

```bash
cd frontend
npm install
npm start
```

Frontend will run at:  
➡️ http://localhost:3000

Axios communicates with the backend using:

```js
baseURL: "http://localhost:8080/api"
```

---

🔄 6. Application Behavior

- UI fetches all tasks via `GET /api/tasks` on load  
- Creating, editing, toggling, and deleting tasks all trigger REST requests to the backend  
- UI state updates immediately after successful backend responses  

---

🧩 7. Key Features

✔ No external DB needed (auto-reset H2 in-memory)  
✔ Simple setup — two commands to start everything  
✔ Fully decoupled frontend & backend  
✔ Easily extendable (Docker, PostgreSQL, JWT, CI/CD, etc.)

---

🖼️ 8. Example UI

```
Task Manager

Title: ________   Description: ________    [ ] Completed   [Create]

• Test Task – My first task    ✔  [Edit] [Delete]
```

---

📝 Notes

- The database is in-memory and resets on every restart  
- CORS is enabled for React development  
- Code is intentionally clean and structured for easy review and extension  

---

📬 Submission Instructions

### Run the backend:

```bash
cd backend
mvn spring-boot:run
```

### Run the frontend:

```bash
cd frontend
npm start
```

Open the UI at:  
➡️ http://localhost:3000

---

Thank you for reviewing this project!

**Mahdi Aouiti**  
Software Engineer  
Tunis, Tunisia

