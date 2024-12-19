import uvicorn
from fastapi import FastAPI, responses

app = FastAPI()

@app.get("/")
async def redirect_to_docs():
    return responses.RedirectResponse(url="/docs")

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)