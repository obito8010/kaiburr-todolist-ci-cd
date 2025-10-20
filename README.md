# 🧩 TodoList Application with CI/CD Pipeline

## Project Overview

A professional, full-stack TodoList application built with modern web technologies, containerized using Docker, and deployed through an automated CI/CD pipeline.  
This project demonstrates industry-standard development practices and DevOps principles.

---

## 📸 Project Visuals

<div align="center">

### 🖼️ Final UI
<img src="https://github.com/obito8010/kaiburr-todolist-ci-cd/blob/bbde5bcd3538e0ba3f0bb581736c12e2f5b6cc8b/screenshots/final-ui.png" alt="Final UI" width="350"/>

### 🐳 Docker Build Success & Container Running
<img src="https://github.com/obito8010/kaiburr-todolist-ci-cd/blob/bbde5bcd3538e0ba3f0bb581736c12e2f5b6cc8b/screenshots/docker-build-sucess-and-Container%20Running.png" alt="Docker Build Success" width="350"/>

### 💚 Health Endpoint Response
<img src="https://github.com/obito8010/kaiburr-todolist-ci-cd/blob/bbde5bcd3538e0ba3f0bb581736c12e2f5b6cc8b/screenshots/endpoint-health.png" alt="Health Endpoint" width="350"/>

### ⚙️ GitHub Action Workflow
<img src="https://github.com/obito8010/kaiburr-todolist-ci-cd/blob/bbde5bcd3538e0ba3f0bb581736c12e2f5b6cc8b/screenshots/github-action-flow.png" alt="GitHub Action Flow" width="350"/>

---

### 🎥 Working Demo
<img src="https://github.com/obito8010/kaiburr-todolist-ci-cd/blob/76259f6c2470475ee717c03e87e247be294ee5cf/screenshots/ci-cd.gif" alt="Working Project Demo" width="800"/>

</div>

---

## 🏗️ Architecture

```

Frontend (HTML/CSS/JS) → Express Server → Docker Container → CI/CD Pipeline → GitHub Registry

```

---

## 🚀 Features

### Core Application
- ✅ **Task Management**: Create, read, update, and delete tasks  
- 🔍 **Smart Filtering**: View all, active, or completed tasks  
- 💾 **Persistent Storage**: Browser local storage for data persistence  
- 📱 **Responsive Design**: Mobile-first responsive UI  
- ⚡ **Real-time Validation**: Input validation and user feedback  
- ♿ **Accessibility**: WCAG-compliant interface elements  

### DevOps & Infrastructure
- 🐳 **Containerization**: Docker-based deployment  
- 🔁 **CI/CD Automation**: GitHub Actions workflow  
- 💡 **Health Monitoring**: Application health endpoints  
- 🧪 **Automated Testing**: Validation and integration tests  
- 🗃️ **Registry Integration**: GitHub Container Registry  
- 🧭 **Multi-environment Ready**: Development and production configurations  

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** – Semantic markup  
- **CSS3** – Flexbox/Grid styling  
- **Vanilla JavaScript (ES6+)** – Modular scripting  
- **Local Storage API** – Client-side persistence  

### Backend & Infrastructure
- **Node.js** – Runtime environment  
- **Express.js** – Web server framework  
- **Docker** – Containerization plapngtform  
- **GitHub Actions** – CI/CD automation  
- **GitHub Container Registry** – Docker image storage  

---

## 📁 Project Structure

```

kaiburr-todolist-ci-cd/
├── .github/
│   └── workflows/
│       └── ci-cd-pipeline.yml          # CI/CD automation
├── screenshots/                        # Documentation assets
│   ├── final-ui.png
│   ├── docker-build.png
│   ├── health-endpoint.png
│   ├── github-actions.png
│   └── working-demo.gif
├── src/                                # Application source
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── server.js
├── tests/
│   ├── test.js
│   └── validate-submission.js
├── configuration/
│   ├── package.json
│   ├── Dockerfile
│   ├── .dockerignore
│   └── .gitignore
└── documentation/
├── README.md
└── SUBMISSION.md

````

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **Docker Desktop** (v20.10 or higher)
- **Git** (v2.25 or higher)

### Local Development
```bash
git clone https://github.com/yourusername/kaiburr-todolist-ci-cd.git
cd kaiburr-todolist-ci-cd
npm install
npm start
# Access at http://localhost:3000
````

### Docker Deployment

```bash
docker build -t kaiburr-todolist .
docker run -d -p 3000:3000 --name todolist-app kaiburr-todolist
docker ps
curl http://localhost:3000/health
```

---

## 🔄 CI/CD Pipeline

### Pipeline Stages

1. **Code Quality Check** – Syntax, dependencies
2. **Automated Testing** – Unit & integration tests
3. **Container Build & Push** – Optimized multi-stage Docker build
4. **Deployment Ready** – Artifact generation & validation

### Workflow Triggers

* **Push to main** – Full pipeline
* **Pull requests** – Validation only
* **Scheduled** – Daily health checks

---

## 🐳 Docker Implementation

### Example Dockerfile

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
USER node
CMD ["npm", "start"]
```

---

## 🧪 Testing

```bash
npm test
node validate-submission.js
```

Checklist:

* [ ] Create/Delete tasks
* [ ] Toggle status
* [ ] Check filters
* [ ] Verify persistence
* [ ] Validate `/health` endpoint

---

## 📊 Performance

| Metric              | Value   |
| ------------------- | ------- |
| Initial Load Time   | < 2s    |
| Time to Interactive | < 1s    |
| Docker Image Size   | ~180 MB |
| Pipeline Duration   | ~3 min  |

---

## 🔐 Security Highlights

* Input sanitization
* Secure headers
* XSS prevention
* Non-root Docker user
* Dependency vulnerability checks

---

## 🧩 API Documentation

### `/health`

```http
GET /health
```

**Response**

```json
{
  "status": "OK",
  "message": "TodoList App is running!",
  "timestamp": "2024-01-20T10:30:00.000Z",
  "version": "1.0.0"
}
```

---

## 🌩️ Deployment Guide

* **Local** → `npm start`
* **Docker** → `docker run -p 3000:3000 todolist-app`
* **Cloud-ready** → AWS ECS, Google Cloud Run, Azure, Kubernetes

---

## 📊 Monitoring & Logging

```bash
docker logs -f todolist-app
docker stats todolist-app
```

---

## 🤝 Contributing

1. Fork & create branch
2. Commit with conventional format
3. Open Pull Request

**Standards**

* ESLint + Prettier
* Semantic versioning
* GitHub workflow automation

---

## 👨‍💻 Author

**Your Name**

* GitHub: [@obito8010](https://github.com/obito8010)
* Email: [chinmay.saseendran@gmail.com](mailto:chinmay.saseendran@gmail.com)
* Assessment: Kaiburr Recruitment Process

---

<div align="center">

### 🎯 Built for Kaiburr Assessment

**Demonstrating Modern Full-Stack Development & DevOps Excellence**

*"Quality in a product or service is not what the supplier puts in.
It is what the customer gets out and is willing to pay for."*
— Peter Drucker

</div>
```

---