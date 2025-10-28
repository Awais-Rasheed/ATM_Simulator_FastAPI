from fastapi import APIRouter
from models.atm_model import ATM
from services.atm_service import (
    add_new_account_service,
    get_all_accounts_service,
    delete_account_service,
    deposit_service,
    withdraw_service,
    change_pin_service,
    check_balance_service,
)

router = APIRouter(tags=["ATM"])

@router.get("/")
def home():
    return {"message": "Welcome to ATM Management System"}

@router.post("/add-account")
def add_new_account(acc: ATM):
    return add_new_account_service(acc)

@router.get("/all-accounts")
def all_accounts():
    return get_all_accounts_service()

@router.delete("/remove-account/{acc_num}")
def delete_account(acc_num: str):
    return delete_account_service(acc_num)

@router.put("/deposit/{pin}")
def deposit(pin: int, amount: float):
    return deposit_service(pin, amount)

@router.put("/withdraw/{pin}")
def withdraw(pin: int, amount: float):
    return withdraw_service(pin, amount)

@router.put("/change-pin/{pin}")
def change_pin(pin: int, new_pin: int):
    return change_pin_service(pin, new_pin)

@router.get("/check-balance/{pin}")
def check_balance(pin: int):
    return check_balance_service(pin)
