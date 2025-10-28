from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import create_tables_DB
from routes.atm_routes import router as atm_router

app = FastAPI(title="ATM Management System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create DB Tables
create_tables_DB()

# Include Routes
app.include_router(atm_router, tags=["ATM Operations"])

@app.get("/")
def root():
    return {"message": "ATM API Running Successfully 🚀"}
