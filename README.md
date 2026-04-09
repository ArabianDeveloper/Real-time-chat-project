# 💬 Real-Time Chat Project

A clean and lightweight **Django-based chat application** that provides user authentication and near real-time messaging using JSON-based communication.

---

## 🚀 Features

* 🔐 User authentication (Sign up, Login, Logout)
* 💬 Message sending and retrieval via API endpoints
* 🧩 Modular architecture with separate `accounts` and `chat` apps
* 🗄️ SQLite database for easy local development
* 🎨 Shared templates and static assets (CSS & JavaScript)

---

## 🛠️ Tech Stack

* **Backend:** Python, Django
* **Frontend:** HTML, CSS, JavaScript
* **Database:** SQLite

---

## 📂 Project Structure

```text
Real-time-chat-project/
├── accounts/         # Authentication logic (signup, login, logout)
├── chat/             # Chat functionality (messages, views, APIs)
├── project/          # Core Django settings and root configuration
├── static/           # CSS and JavaScript assets
├── templates/        # Shared HTML templates
├── db.sqlite3        # Default database (development)
└── manage.py         # Django CLI entry point
```

---

## ⚙️ How It Works

* The root route (`/`) is handled by the **chat app**.
* Authentication routes are managed by the **accounts app**.
* Users can register, log in, and log out securely.
* Messages are stored in the database and fetched dynamically via JSON endpoints.

---

## 🌐 Routes Overview

### Chat App

* `/` → Main chat interface
* `/send_message/` → Send a new message
* `/get_messages/<last_id>/` → Fetch messages after a specific ID

### Accounts App

* `/accounts/signup/` → Register a new user
* `/accounts/login/` → Authenticate user
* `/accounts/logout/` → Log out user

---

## ⚡ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/ArabianDeveloper/Real-time-chat-project.git
cd Real-time-chat-project
```

### 2. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate   # macOS/Linux
venv\\Scripts\\activate      # Windows
```

### 3. Install dependencies

```bash
pip install django
```

### 4. Apply database migrations

```bash
python manage.py migrate
```

### 5. Run the development server

```bash
python manage.py runserver
```

---

## ▶️ Usage

1. Open the application in your browser.
2. Create a new account.
3. Log in with your credentials.
4. Start sending messages.
5. Messages update dynamically without full page refresh.

---

## ⚙️ Configuration

Key settings used in the project:

* `templates/` → HTML templates
* `static/` → CSS and JavaScript files
* `db.sqlite3` → Local development database
* `LOGIN_REDIRECT_URL = 'index'`
* `LOGOUT_REDIRECT_URL = 'login'`

---

## 📝 Notes

* This project is a **lightweight prototype**, not a full WebSocket-based system.
* Real-time behavior is simulated using periodic JSON requests.
* SQLite is used for simplicity and is recommended only for development.

---

## 🔮 Future Improvements

* 🔌 Integrate WebSocket support (Django Channels)
* 💬 Add chat rooms and private messaging
* 🖼️ User profiles and avatars
* ⏱️ Message timestamps and read receipts
* 📱 Enhanced responsive UI/UX

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📄 License

Please add your preferred license (e.g., MIT License).

---

## 👨‍💻 Author

**ArabianDeveloper**

---

## ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub!
