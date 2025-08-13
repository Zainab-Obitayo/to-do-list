# Zainab Obitayo - Backend Portfolio

A personal backend portfolio built with **Node.js**, **Express**, and a modern, responsive frontend.  
Showcases projects, blogs, and contact information in a beautiful purple and white theme.

---

## Features

- **About Me:** Introduction and background.
- **Projects:** List of backend and automation projects with links, videos, and files.
- **Blogs:** Technical articles and guides.
- **Contact:** Quick links to LinkedIn, Facebook, Email, and Instagram.
- **Modern UI:** Clean, responsive design with dropdown navigation.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Zainab-Obitayo/zainabPortfolio.git
   cd backend-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
backend-portfolio/
├── public/
│   ├── index.html
│   └── styles.css
├── src/
│   ├── controllers/
│   │   └── portfolioController.js
│   ├── models/
│   │   └── project.js
│   └── routes/
│       └── portfolioRoutes.js
├── app.js
├── package.json
└── README.md
```

---

## API Endpoints

- `GET /api/portfolio` — Get all portfolio data (about, projects, blogs)
- `POST /api/portfolio/project` — Add a new project
- `DELETE /api/portfolio/project/:id` — Delete a project
- `GET /api/portfolio/about` — Get about info
- `POST /api/portfolio/about` — Update about info
- `GET /api/portfolio/blog` — Get all blogs
- `POST /api/portfolio/blog` — Add a new blog
- `DELETE /api/portfolio/blog/:id` — Delete a blog

---

## Customization

- **Edit your details:**  
  Update `public/index.html` for About, Projects, Blogs, and Contacts.
- **Change theme:**  
  Modify `public/styles.css` for colors and layout.

---

## License

This project is licensed under the MIT License.

---

## Author

**Zainab Obitayo**  
[LinkedIn](https://www.linkedin.com/in/zee9252a6) | [Facebook](https://www.facebook.com/obitayo.zynahb) | [Instagram](https://www.instagram.com/zeezee_spicy?igsh=MWZqMThpYzFOeDVreQ==) | [Email](mailto:zainabobitayo@gmail.com)