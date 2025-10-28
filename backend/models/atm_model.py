from sqlmodel import SQLModel, Field
from typing import Optional

class ATM(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    account_number: str = Field(..., max_length = 10)
    account_title: str = Field(..., min_length=5, max_length = 30)
    account_balance: float = Field(..., max_length = 10)
    account_pin: int = Field(..., max_length = 4)
