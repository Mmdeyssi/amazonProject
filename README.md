# E-Commerce Admin Platform

> Full-stack e-commerce administration interface with RESTful API and automated testing

![Frontend](https://img.shields.io/badge/Frontend-Angular-DD0031?style=flat-square&logo=angular)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%2F%20Express.js-339933?style=flat-square&logo=node.js)
![Database](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat-square&logo=mongodb)
![Testing](https://img.shields.io/badge/Testing-Jasmine-8A4182?style=flat-square)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)

---

## 🛒 What is this project?

A full-stack **e-commerce administration platform** inspired by Amazon's backend management system. Built with Angular on the frontend and Node.js/Express.js on the backend, it provides a complete admin interface for managing products, orders, and users — with a RESTful CRUD API, pagination, real-time updates, and automated test coverage using Jasmine.

---

## ✨ Features

- 🗂️ Full product management — Create, Read, Update, Delete (CRUD)
- 📄 Server-side pagination for large datasets
- 🔄 Real-time UI updates without page refresh
- 🔐 User authentication and role-based access
- 🧪 Automated unit tests with **Jasmine** testing framework
- 📡 Clean RESTful API design with proper HTTP status codes
- 🗄️ MongoDB for flexible, scalable data storage

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Angular, TypeScript, HTML/CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| API | RESTful (JSON) |
| Testing | Jasmine |
| Version Control | Git / GitHub |

---

## 🏗️ Architecture

```
┌─────────────────────────────┐
│      Angular Frontend        │
│  Admin Dashboard · UI        │
└──────────────┬──────────────┘
               │ HTTP / REST API
┌──────────────▼──────────────┐
│   Node.js / Express.js       │
│   REST API · Auth · Logic    │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│         MongoDB              │
│   Products · Users · Orders  │
└─────────────────────────────┘
```

---

## 📁 Project Structure

```
amazon-project/
├── frontend/          # Angular app
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── models/
├── backend/           # Node.js API
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
└── tests/             # Jasmine test specs
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Angular CLI
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/Mmdeyssi/amazonProject.git
cd amazonProject

# Install backend dependencies
cd amazon-project/backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running the app

```bash
# Start MongoDB
mongod

# Start the backend API
cd backend
npm run dev

# Start the Angular frontend
cd frontend
ng serve
```

App runs at `http://localhost:4200`

### Running tests

```bash
# Run Jasmine tests
cd backend
npm test
```

---

## 🧪 Testing

The project includes automated unit tests written with **Jasmine**, covering:
- API endpoint validation
- CRUD operation correctness
- Authentication middleware
- Data model integrity

---

## 👤 Author

**Mouhib Mdaissi**
- 📍 Heidelberg, Germany
- 💼 [linkedin.com/in/mouhib-mdaissi-2262b21ab](https://www.linkedin.com/in/mouhib-mdaissi-2262b21ab)
- 🐙 [github.com/mmdeyssi](https://github.com/mmdeyssi)
