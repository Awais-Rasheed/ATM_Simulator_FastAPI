from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config.database import create_tables_DB
from routes.atm_routes import router as atm_router

app = FastAPI(title="ATM Management System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

create_tables_DB()

app.include_router(atm_router)
