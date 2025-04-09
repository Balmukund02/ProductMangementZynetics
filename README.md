📦 Product Management Web App
A full-stack MERN application for managing products with secure authentication, featuring:

🔐 JWT-based auth (Login/Signup)

🧾 Product CRUD (Add/Edit/Delete)

🧠 Protected routes

🔍 Search & category filter

✨ Toast notifications

💅 Styled with Tailwind CSS

🛠 Tech Stack
Frontend	Backend	Database
React + Vite	Node.js + Express.js	MongoDB (Atlas)
Tailwind CSS	JWT for Auth	Mongoose ODM
Axios, React Icons		
📂 Folder Structure (Simplified)
bash
Copy
Edit
├── frontend/
│   ├── components/      # Reusable UI components (Navbar, Forms, etc.)
│   ├── pages/           # Page-level components (Login, Dashboard)
│   ├── App.jsx          # App with routing
│   └── main.jsx         # App entry
├── backend/
│   ├── models/          # Mongoose schemas
│   ├── controllers/     # Auth & Product logic
│   ├── routes/          # Express routes
│   ├── middleware/      # JWT middleware
│   └── app.js           # Main server file
🚀 Getting Started
🔧 Backend Setup
bash
Copy
Edit
cd backend
npm install
# Create a .env file:
PORT=4000
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
npm start
🌐 Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
Open browser at http://localhost:5173

🔐 Features
User Auth: Secure JWT login/signup

Add Product: With price, category, rating

Edit/Delete Product: Instantly update or remove

Search: By name

Filter: By category

Toast Notifications: Instant feedback on actions

Route Protection: Prevent access to dashboard if not logged in
ding here.)

🤝 Author
Developed by Balmukund Kumar
# ProductMangementZynetics
