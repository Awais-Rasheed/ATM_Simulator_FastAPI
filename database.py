from sqlmodel import create_engine, SQLModel

DATABASE_URL = "sqlite:///account.db"
engine = create_engine(DATABASE_URL, echo=True)

def create_tables_DB():
    SQLModel.metadata.create_all(engine)