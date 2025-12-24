pipeline{
    agent any

    environment {
        IMAGE_NAME = "shobhitnagar71/ci-cd-demo"
        IMAGE_TAG = "${BUILD_NUMBER}"
        SONAR_HOST_URL = "http://http://34.71.230.245:9000"
    }

    stages {
        stage('Checkout'){
            steps {
                git branch: 'main', url: 'https://github.com/yourrepo/simple-app.git'
            }
        }

        stage('Build'){
            steps {
                sh 'npm install'
            }
        }

        stage('Unit Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh """
                    sonar-scanner \
                    -Dsonar.projectKey=ci-cd-demo \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=$SONAR_HOST_URL \
                    -Dsonar.login=$SONAR_TOKEN
                    """
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh "docker build -t $IMAGE_NAME:$IMAGE_TAG ."
            }
        }

        stage('Push Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
            )]) {
                sh """
                docker login -u $DOCKER_USER -p $DOCKER_PASS
                docker push $IMAGE_NAME:$IMAGE_TAG
                """
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {
                    sh """
                    kubectl apply -f k8s-deployment.yaml
                    """
                }
            }
        }
    }   
}