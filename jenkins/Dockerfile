FROM jenkins/jenkins:lts

USER root

# Install tools
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    curl \
    unzip \
    ca-certificates \
    gnupg \
    lsb-release \
    && rm -rf /var/lib/apt/lists/*

# Docker CLI
RUN curl -fsSL https://get.docker.com | sh

# kubectl
RUN curl -LO https://dl.k8s.io/release/$(curl -Ls https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl && \
    chmod +x kubectl && mv kubectl /usr/local/bin/

# Sonar Scanner
RUN curl -L https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip \
    -o sonar.zip && \
    unzip sonar.zip && \
    mv sonar-scanner-* /opt/sonar-scanner && \
    ln -s /opt/sonar-scanner/bin/sonar-scanner /usr/local/bin/sonar-scanner && \
    rm -f sonar.zip

# Docker group access
RUN groupadd -g 999 docker || true && \
    usermod -aG docker jenkins

USER jenkins
