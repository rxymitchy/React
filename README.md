# 🧠 React & MERN Fullstack Projects

This repository contains multiple projects showcasing the use of **React.js**, **Node.js**, **Express**, and **MongoDB**, as well as foundational frontend assignments. Each folder represents an independent project with its own purpose and functionality, ranging from frontend-only tasks to full MERN stack applications.

---

## 📁 Projects Overview

### 1. `react-assignment`

A beginner-friendly React.js assignment focused on:

* Component creation (`Header`, `Profile`, `Counter`)
* State management with `useState`
* Tailwind CSS for styling
* Component integration in `App.js`

> 💡 Ideal for those learning the basics of React, props, and component-driven development.

---

### 2. `my-react-app`

A basic React app initialized using `create-react-app`, serving as a sandbox for testing and learning core React features like:

* JSX rendering
* State & props
* Event handling

---

### 3. `task-manager`

A task tracking app using:

* React (frontend)
* Local component state
* Task addition, completion toggle, and removal

---

### 4. `mern-task-manager`

A full-stack **MERN** (MongoDB, Express, React, Node) task manager with:

* Backend API built in Express.js
* MongoDB for database operations
* Frontend with React for task UI
* RESTful CRUD operations

> 🔐 Optional environment setup for MongoDB URI and server port via `.env`.

---

## 🚀 Getting Started

You can run each project individually by navigating into its directory and following the steps below.

### For Frontend-Only Projects (`react-assignment`, `my-react-app`, `task-manager`)

```bash
cd <project-folder>
npm install
npm start
```

> Make sure you have [Node.js](https://nodejs.org/en) installed.

---

### For Fullstack Project (`mern-task-manager`)

1. **Backend Setup**

```bash
cd mern-task-manager/backend
npm install
npm run dev
```

2. **Frontend Setup**

```bash
cd ../frontend
npm install
npm run dev
```

> Requires `MongoDB` and a `.env` file with `MONGO_URI` and `PORT`.

---

## 🧪 Project Objectives & Concepts

* ✅ Master **React components**, **state hooks**, and **event handling**
* 🎨 Style using **Tailwind CSS** and best practices
* 🌐 Connect frontend to backend using **REST APIs**
* 🗃️ Store and retrieve tasks from **MongoDB**
* 🔧 Structure code into reusable, maintainable modules

---

## 📌 Folder Structure Example (React App)

```
src/
├── components/
│   ├── Header.jsx
│   ├── Profile.jsx
│   └── Counter.jsx
├── App.js
├── index.js
└── styles/
    └── tailwind.css
```

---

## 🛠️ Tools & Tech Stack

* **React.js**
* **Tailwind CSS**
* **Node.js / Express**
* **MongoDB / Mongoose**
* **Vite / CRA**
* **REST APIs**
* **ESLint / Git**

---

## 📄 License

This repository is open-source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Created with 💻 by [**@rxymitchy**](https://github.com/rxymitchy)
Exploring React and backend development one commit at a time.

---
