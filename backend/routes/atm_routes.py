from fastapi import APIRouter, HTTPException
from sqlmodel import Session, select
from database import engine
from models.atm_model import ATM

router = APIRouter()

@router.get("/")
def home():
    return {"message": "Welcome to ATM Management System"}

@router.post("/add-account")
def add_new_account(acc: ATM):
    with Session(engine) as session:
        session.add(acc)
        session.commit()
        session.refresh(acc)
        return {"message": "✅ Account Added Successfully", "account": acc}

@router.get("/all-accounts")
def all_accounts():
    with Session(engine) as session:
        data = session.exec(select(ATM)).all()
        return data

@router.delete("/remove-account/{acc_num}")
def delete_account(acc_num: str):
    with Session(engine) as session:
        acc = session.exec(select(ATM).where(ATM.account_number == acc_num)).first()
        if not acc:
            raise HTTPException(status_code=404, detail="Account not found")
        session.delete(acc)
        session.commit()
        return {"message": "🗑️ Account deleted successfully"}

@router.put("/deposit/{pin}")
def deposit(pin: int, amount: float):
    with Session(engine) as session:
        acc = session.exec(select(ATM).where(ATM.account_pin == pin)).first()
        if not acc:
            raise HTTPException(status_code=404, detail="Account Not Found, Invalid PIN")
        acc.account_balance += amount
        session.commit()
        session.refresh(acc)
        return {
            "message": f"💰 Deposit Successful! New balance: {acc.account_balance}",
            "account": acc
        }

@router.put("/withdraw/{pin}")
def withdraw(pin: int, amount: float):
    with Session(engine) as session:
        acc = session.exec(select(ATM).where(ATM.account_pin == pin)).first()
        if not acc:
            raise HTTPException(status_code=404, detail="Account Not Found, Invalid PIN")
        if amount > acc.account_balance:
            return {"message": "❌ Insufficient Balance"}
        acc.account_balance -= amount
        session.commit()
        session.refresh(acc)
        return {
            "message": f"💸 Withdraw Successful! Remaining balance: {acc.account_balance}",
            "account": acc
        }

@router.put("/change-pin/{pin}")
def change_pin(pin: int, new_pin: int):
    with Session(engine) as session:
        acc = session.exec(select(ATM).where(ATM.account_pin == pin)).first()
        if not acc:
            raise HTTPException(status_code=404, detail="Account Not Found")
        if acc.account_pin == new_pin:
            return {"message": "⚠️ PIN cannot be the same, try another PIN"}
        acc.account_pin = new_pin
        session.commit()
        session.refresh(acc)
        return {"message": "✅ PIN changed successfully", "account": acc}

@router.get("/check-balance/{pin}")
def check_balance(pin: int):
    with Session(engine) as session:
        acc = session.exec(select(ATM).where(ATM.account_pin == pin)).first()
        if not acc:
            raise HTTPException(status_code=404, detail="Account Not Found")
        return {"balance": acc.account_balance}
