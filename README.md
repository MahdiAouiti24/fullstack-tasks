# Full-Stack Technical Task – Spring Boot + React

**Candidate:** Mahdi Aouiti  
**Date:** November 2025  
**Position:** Software Developer

## 1. Project Overview

This project is a full-stack web application built as part of a technical assessment for a Software Developer role.

It provides a Task Manager with the following features:
- Create a new task
- Edit an existing task
- Toggle task completion
- View all tasks
- Delete a task

The application runs locally, is fully functional, and requires no external database.

## 2. Technology Stack

| Layer | Technology |
|-------|------------|
| Backend | Java 17, Spring Boot 3, Spring Web, JPA |
| Database | H2 (in-memory) |
| Frontend | React 18, Axios |
| Build Tools | Maven, npm |
| API Format | REST with JSON |

## 3. Project Structure
fullstack-tasks/
├── backend/
│ └── taskmanager/ # Spring Boot REST API
└── frontend/ 
## 4. Backend (Spring Boot)

### Requirements
- Java 17+
- Maven

### How to Run
```bash
cd backend/taskmanager
mvn spring-boot:run# React web application

Backend runs at: http://localhost:8080

REST API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create new task
GET	/api/tasks/{id}	Get task by ID
PUT	/api/tasks/{id}	Update task
DELETE	/api/tasks/{id}	Delete task
## 5. Frontend (React)
Requirements
Node.js (v16+ recommended)

npm
How to Run

cd frontend
npm install
npm start

Frontend runs at: http://localhost:3000

Axios handles requests to the backend with baseURL: http://localhost:8080/api

## 6. Application Behavior
Loads tasks via GET /api/tasks at startup

POST /api/tasks creates a new task

PUT /api/tasks/{id} edits or updates completion status

DELETE /api/tasks/{id} removes a task

UI updates instantly after each backend response

## 7. Key Features
No external database needed (uses H2 in-memory)

Simple setup with two commands

Clean separation between backend and frontend

Easily extendable (Docker, PostgreSQL, JWT, CI/CD)

Real-time UI updates

## 8. Example UI
Task Manager

Title: ________
Description: ________
[ ] Completed
[Create]

▪ Test Task – My first task ✔ [Edit] [Delete]

## 9. Notes
H2 database resets on every application restart

CORS enabled for React local development

Clean and maintainable code structure

Backend must be running before starting frontend

🚀 Submission Instructions
Start Backend:
cd backend/taskmanager
mvn spring-boot:run

Start Frontend:
cd frontend
npm install
npm start

Open application at: http://localhost:3000

Thank you for reviewing my work.

Mahdi Aouiti
Software Engineer
Tunis, Tunisia




