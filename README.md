# 🏦 ATM Management System

A **full-stack ATM Management System** built with **React (frontend)** and **FastAPI (backend)** that allows users to create, view, update, and delete bank accounts. The project simulates basic ATM functionalities such as managing accounts, checking balances, and handling transactions in a clean, responsive UI.

---

## 🎥 Quick Demo

> 🎬 Add your demo GIF or short video here to show the project in action!

| ATM Simulator Demo |
|--------------------|
| ![ATM Demo](./screenshots/ATM_Simulator_FastAPI.gif) |

*(You can record your screen using OBS Studio or ScreenToGif, then export a GIF and place it in `/frontend/public/screenshots/demo.gif`.)*

---

## 🚀 Tech Stack

**Frontend:**
- React.js (Vite)
- Material UI (MUI)
- Axios
- React Toastify

**Backend:**
- FastAPI
- SQLite / PostgreSQL (configurable)
- Pydantic
- Uvicorn

---

## ✨ Features

### 🖥️ Frontend (React)
- Add new bank accounts  
- View all existing accounts with balance  
- Update account title  
- Delete accounts with confirmation prompt  
- Real-time toast notifications  
- Responsive and modern ATM-style UI  

### ⚙️ Backend (FastAPI)
- RESTful API endpoints  
- CRUD operations for accounts  
- CORS enabled for React frontend  
- Data validation using Pydantic models  

---

## 📂 Project Structure

```
ATM_Management_System/
│
├── backend/                     # FastAPI backend
│   ├── main.py                   # FastAPI app entry
│   ├── account.db               # DB setup and connection  
│   └── ...
│
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── ATMDisplay.jsx
│   │   ├── pages/
│   │   │   ├── AddAccount.jsx
│   │   │   └── Deposit.jsx
│   │   │   └── CheckBalance.jsx
│   │   │   └── ChangePin.jsx
│   │   │   └── Home.jsx
│   │   │   ├── ViewAccounts.jsx
│   │   │   └── Withdraw.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   └── package.json
│
└── README.md
```

---

## ⚡ Setup Instructions

### 1️⃣ Backend Setup (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on:  
👉 `http://127.0.0.1:8000`

---

### 2️⃣ Frontend Setup (React)
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:  
👉 `http://127.0.0.1:5173`

---

## 🔗 API Endpoints

| Method | Endpoint                     | Description              |
|--------|------------------------------|--------------------------|
| GET    | `/all-account`               | Get all accounts         |
| POST   | `/add-account`               | Add new account          |
| PUT    | `/update-account/{id}`       | Update account title     |
| DELETE | `/remove-account/{id}`       | Delete account           |

---

## 🧠 Example Usage

1. Open the frontend in your browser.  
2. Add a new account with title and initial balance.  
3. View all accounts on the “View Accounts” page.  
4. Update or delete accounts directly using the action buttons.  

---

## 🧩 Screenshots

| Add Account Page | View Accounts Page |
|------------------|--------------------|
| ![Add Account](./screenshots/add-account.png) | ![View Accounts](./screenshots/view-accounts.png) |

---

## 🛠️ Future Improvements

- Deposit / Withdraw transaction system  
- Transaction history logs  
- User authentication (JWT-based login)  
- Dashboard analytics (total deposits, withdrawals, etc.)  
- Dark / Light mode switch  

---

## 👨‍💻 Author

**Awais Rasheed**  
Software Engineer | Web Developer  
📧 [awaisrasheedansari@gmail.com](mailto:awaisrasheedansari@gmail.com)

---

## 🪪 License

This project is licensed under the **MIT License**.  
Feel free to use and modify it for your own learning or development purposes.
````

---

