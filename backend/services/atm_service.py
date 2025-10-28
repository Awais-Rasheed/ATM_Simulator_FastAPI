from sqlmodel import Session, select
from fastapi import HTTPException
from config.database import engine
from models.atm_model import ATM


def add_new_account_service(acc: ATM):
    with Session(engine) as session:
        session.add(acc)
        session.commit()
        session.refresh(acc)
        return {"message": "✅ Account Added Successfully", "account": acc}


def get_all_accounts_service():
    with Session(engine) as session:
        return session.exec(select(ATM)).all()


def delete_account_service(acc_num: str):
    with Session(engine) as session:
        acc = session.exec(select(ATM).where(ATM.account_number == acc_num)).first()
        if not acc:
            raise HTTPException(status_code=404, detail="Account not found")
        session.delete(acc)
        session.commit()
        return {"message": "🗑️ Account deleted successfully"}


def deposit_service(pin: int, amount: float):
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


def withdraw_service(pin: int, amount: float):
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


def change_pin_service(pin: int, new_pin: int):
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


def check_balance_service(pin: int):
    with Session(engine) as session:
        acc = session.exec(select(ATM).where(ATM.account_pin == pin)).first()
        if not acc:
            raise HTTPException(status_code=404, detail="Account Not Found")
        return {"balance": acc.account_balance}
