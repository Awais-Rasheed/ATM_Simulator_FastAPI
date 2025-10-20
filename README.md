
# 🏦 ATM Management System – FastAPI

A simple **ATM Management System** built using **FastAPI** and **SQLModel** with a **SQLite** database.  
This project demonstrates how to create, update, and manage bank accounts through RESTful API endpoints.

---

## 🚀 Features

- Create new bank accounts  
- View all registered accounts  
- Deposit and withdraw money  
- Change account PIN  
- Delete an existing account  
- Persistent data using **SQLite**  
- Built with **FastAPI** and **SQLModel**

---

## 🛠️ Tech Stack

- **Backend Framework:** FastAPI  
- **Database:** SQLite  
- **ORM:** SQLModel  
- **Language:** Python 3.8+

---

## 📁 Project Structure

```
📦 atm-fastapi
 ┣ 📜 main.py
 ┣ 📜 requirements.txt
 ┣ 📜 .gitignore
 ┗ 📜 README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Awais-Rasheed/atm-fastapi.git
cd atm-fastapi
```

### 2️⃣ Create a virtual environment
```bash
python -m venv venv
```

Activate it:
- **Windows:**  
  ```bash
  venv\Scripts\activate
  ```
- **Linux/Mac:**  
  ```bash
  source venv/bin/activate
  ```

### 3️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

Or manually:
```bash
pip install fastapi uvicorn sqlmodel
```

### 4️⃣ Run the server
```bash
uvicorn main:app --reload
```

Then open your browser at 👉 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

## 🧩 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/` | Welcome message |
| `POST` | `/add-account` | Create a new account |
| `GET` | `/all-account` | Retrieve all accounts |
| `DELETE` | `/remove-account/{acc_num}` | Delete account by account number |
| `PUT` | `/deposit/{pin}?amount={value}` | Deposit amount using PIN |
| `PUT` | `/withdraw/{pin}?amount={value}` | Withdraw amount using PIN |
| `PUT` | `/change-pin/{pin}?new_pin={value}` | Change account PIN |

---

## 🧠 Example Requests

### ➕ Add Account
```json
POST /add-account
{
  "account_number": "123456",
  "account_title": "Awais",
  "account_balance": 5000,
  "account_pin": 1234
}
```

### 💰 Deposit
```bash
PUT /deposit/1234?amount=1000
```

### 💸 Withdraw
```bash
PUT /withdraw/1234?amount=500
```

### 🔑 Change PIN
```bash
PUT /change-pin/1234?new_pin=5678
```

---

## 🧾 Notes
- Database file: `account.db`  
- Data persists locally  
- Interactive Swagger UI available at `/docs`

---

## 👨‍💻 Author

**Awais** – Software Engineer  
Expertise: React | Node.js | Express | Laravel | FastAPI  
🔗 [GitHub](https://github.com/Awais-Rasheed)

---

## 📜 License
This project is licensed under the MIT License – feel free to use and modify.
````
