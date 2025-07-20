
📚 Learning Management System (LMS) – MERN Stack

A full-featured Learning Management System (LMS) built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). This platform enables users to browse, enroll in, and manage courses with integrated features like video streaming, user authentication, payment processing, and more.

🚀 Features
- 👨‍🏫 Instructor dashboard to upload and manage courses
- 🎓 Student dashboard with enrolled courses & progress tracking
- 🔐 Authentication with JWT (Login/Register/Logout)
- 🎥 Video upload and secure streaming via Cloudinary
- 💳 Online payments using Razorpay / PayPal integration
- 📥 Course download options
- 📊 Admin dashboard to manage users and content
- 📨 Email notifications using SMTP

🛠 Tech Stack

Frontend:
- React.js
- Redux / Context API
- TailwindCSS / Styled Components

Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary (for media)
- Razorpay / PayPal (for payments)
- Nodemailer (for emails)

📦 Folder Structure
LMS/
├── client/                 # React frontend
│   ├── src/
│   └── ...
├── server/                 # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── ...
├── README.md
└── .gitignore

⚙️ Getting Started

1. Clone the repo
$ git remote add origin https://github.com/Zahidhydri/LMS-App.git
$ cd LMS-App

2. Setup Backend
$ cd server
$ npm install

Create a `.env` file inside `/server` with the following:
PORT=5000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SMTP_USER=your_email
SMTP_PASS=your_email_password

Start the backend:
$ npm run dev

3. Setup Frontend
$ cd ../client
$ npm install
$ npm start

✅ To-Do
- [ ] Add course quizzes & certificates
- [ ] Enable video previews
- [ ] Implement student reviews
- [ ] Add real-time notifications

🧑‍💻 Author
Zahid Sadique Hydri
Computer Science Engineering Student | Software Developer

📄 License
This project is licensed under the MIT License.
