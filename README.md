# Vyasa Chatbot 🤖

Vyasa is a simple chatbot project with:
- A **frontend** (HTML/CSS/JS)
- A **backend** (Node.js + Express + MongoDB)
- An optional **Botpress integration** for smart responses

---

## 🚀 Quick Start (Skip Login)
To test the chatbot directly without login/signup:
1. Clone or download this repository
2. Navigate to the `frontends/htmlFiles` folder
3. Open **`ask.html`** in your browser  
   👉 This will load the chatbot page directly

---

## 📂 Project Structure
VYAAS/
│
├── backend/ # Node.js backend
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ └── utils/
│
├── frontends/ # Frontend UI
│ ├── htmlFiles/ # ask.html (chatbot), login.html, signup.html
│ ├── js files/ # app.js, ask.js, connect.js
│ ├── css files/
│ └── images/
│
├── responses.json # Knowledge base for predefined answers
├── index.js # Backend entrypoint
└── .env # DB credentials, API keys (not committed)

yaml
Copy
Edit

---

## ⚙️ Development Mode (optional)
If you want to run the backend:

```bash
npm install
npm start
Make sure to set up your .env file with:

ini
Copy
Edit
mongo_uri=your-mongodb-uri
port=4000
🌐 Botpress Integration
This project also integrates Botpress Webchat.
Included scripts in ask.html:

html
Copy
Edit
<script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2024/11/11/09/20241111092849-CJ5UAQCB.js"></script>
**The chatbot widget will open when you click on bottom right logo when ask.html is opened.**
