from fastapi import FastAPI, HTTPException
from sqlmodel import SQLModel, select, Session, Field, create_engine
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = "sqlite:///account.db"
engine = create_engine(DATABASE_URL, echo=True)

class ATM(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    account_number: str
    account_title: str
    account_balance: float
    account_pin: int

def create_db():
    SQLModel.metadata.create_all(engine)

create_db()

@app.get("/")
def home():
    return {"message":"Wellcome to ATM"}

@app.post("/add-account")
def add_new_account(acc: ATM):
    with Session(engine) as session:
        session.add(acc)
        session.commit()
        session.refresh(acc)
        return {"message": "Account Added Successfully"}
    
@app.get("/all-account")
def all_account():
    with Session(engine) as session:
        data = session.exec(select(ATM)).all()
        return data
    
@app.delete("/remove-account/{acc_num}")
def delete_account(acc_num: str):
    with Session(engine) as session:
        statement = select(ATM).where(ATM.account_number == acc_num)
        acc = session.exec(statement).first()
        if not acc:
            raise HTTPException(status_code=404, message="Student not found")
        
        session.delete(acc)
        session.commit()
        return {"message": "🗑️ Account deleted successfully"}
    
@app.put("/deposit/{pin}")
def deposit(pin: int, amount: float):
    with Session(engine) as session:
        statement = select(ATM).where(ATM.account_pin == pin)
        acc = session.exec(statement).first()

        if not acc:
            raise HTTPException(status_code=404, message="Account Not Found, Invalid PIN")
        
        acc.account_balance += amount

        session.commit()
        session.refresh(acc)

        return {"message": "Deposite Successfull new balance is: " }
    

@app.put("/withdraw/{pin}")
def withdraw(pin: int, amount: float):
    with Session(engine) as session:
        statement = select(ATM).where(ATM.account_pin == pin)
        acc = session.exec(statement).first()

        if not acc:
            raise HTTPException(status=404, message="Account Not Found, Invalid PIN")
        
        if amount > acc.account_balance:
            return {"message":"Insufficent Balance"}
        acc.account_balance -= amount
        session.commit()
        session.refresh(acc)
        return {"message":" Withdraw Successfull"}
    
@app.put("/change-pin/{pin}")
def change_pin(pin: int, new_pin: int):
    with Session(engine) as session:
        statement = select(ATM).where(ATM.account_pin == pin)
        acc = session.exec(statement).first()

        if not acc:
            raise HTTPException(status_code=404, detail="Account Not Found")
        
        if acc.account_pin == new_pin:
            return {"message": "PIN cannot be the same, try another PIN"}

        acc.account_pin = new_pin
        session.add(acc)
        session.commit()
        session.refresh(acc)

        return {"message": "✅ Account PIN changed successfully", "account": acc}

@app.get("/check-balance/{pin}")
def check_balance(pin: int):
    with Session(engine) as session:
        statement = select(ATM).where(ATM.account_pin == pin)
        acc = session.exec(statement).first()

        if not acc:
            raise HTTPException(status_code=404, detail="Account Not found")
        
        session.commit()
        return acc.account_balance  