pipeline {
    agent any

    stages {
        stage("Code Clone") {
            steps {
                echo "🔁 Cloning Repository..."
                git url: "https://github.com/tanujsaini123/node-mongo-jenkins-k8s.git", branch: "main"
            }
        }

        stage("Build Docker Image") {
            steps {
                echo "🐳 Building Docker image..."
                sh 'docker build -t node-mongo-app .'
            }
        }

        stage("Push To DockerHub") {
            steps {
                echo "📦 Pushing Docker image to DockerHub..."
                withCredentials([usernamePassword(
                    credentialsId: "dockerHubcreds",         // ✅ Must exist in Jenkins credentials
                    usernameVariable: "DOCKER_USER",
                    passwordVariable: "DOCKER_PASS"
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker tag node-mongo-app:latest $DOCKER_USER/node-mongo-app:latest
                        docker push $DOCKER_USER/node-mongo-app:latest
                    '''
                }
            }
        }

        stage("Deploy to K8s") {
            steps {
                echo "🚀 Deploying with K8s..."
                sh "kubectl apply -f k8s/"
            }
        }
    }
}
