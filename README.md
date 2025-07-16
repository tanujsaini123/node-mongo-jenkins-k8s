# 🐳 Node.js + MongoDB DevOps Project (CI/CD with Jenkins + Kubernetes)

This project demonstrates a complete DevOps pipeline for a Node.js + MongoDB application using:

- **Node.js** for backend logic
- **MongoDB** as database
- **Docker** for containerization
- **Jenkins** for CI/CD automation
- **Kubernetes** (via Kind) for container orchestration
- **GitHub** for version control and webhook integration

---

## 📁 Project Structure

```
node-mongo-jenkins-k8s/
├── app/
│   ├── server.js              # Node.js server file
│   └── package.json           # Node dependencies
├── Dockerfile                 # Builds Node.js app image
├── docker-compose.yml         # For local Docker testing
├── Jenkinsfile                # Jenkins pipeline script
├── k8s/                       # Kubernetes YAMLs
│   ├── app-deployment.yml
│   ├── app-service.yml
│   ├── mongo-deployment.yml
│   └── mongo-service.yml
└── kindcluster/
    └── config.yml             # Kind cluster config
```

---

## 🚀 Features

- ✅ Containerized Node.js app using Docker
- ✅ MongoDB as backend database
- ✅ CI/CD with Jenkins (auto build, push, deploy)
- ✅ Kubernetes deployment via `kubectl apply -f k8s/`
- ✅ Uses `NodePort` service to expose the app
- ✅ Kind (Kubernetes in Docker) for lightweight local K8s

---

## 📦 Build & Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/tanujsaini123/node-mongo-jenkins-k8s.git
cd node-mongo-jenkins-k8s
```

### 2. Run using Docker Compose

```bash
docker-compose up --build
```

### 3. Access app

Visit: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Jenkins Pipeline (CI/CD)

The pipeline in `Jenkinsfile` performs:

1. ✅ Clone source from GitHub
2. 🐳 Build Docker image
3. 📤 Push image to DockerHub
4. 🚀 Deploy to Kubernetes using `kubectl apply`

> Jenkins triggers can be configured using GitHub Webhooks.

---

## ☸️ Kubernetes Deployment (on Kind)

### 1. Create a Kind cluster

```bash
kind create cluster --config kindcluster/config.yml
```

### 2. Deploy app to K8s

```bash
kubectl apply -f k8s/
```

### 3. Check status

```bash
kubectl get pods
kubectl get svc
```

### 4. Access App

If your NodePort is `30080`, and public IP is `http://<EC2-IP>`:

```bash
http://<public-ip>:30080
```

---

## 🔐 DockerHub

Docker image is pushed to:  
`docker.io/<your-username>/node-mongo-app:latest`

Update `Jenkinsfile` credentials to match your DockerHub ID.

---

## 🧑‍💻 Author

**Tanuj Saini**  
GitHub: [@tanujsaini123](https://github.com/tanujsaini123)

---

## 📝 License

This project is open-source and free to use.
