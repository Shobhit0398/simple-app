FROM jenkins/jenkins:lts-slim

USER root

# Base tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    git \
    unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Docker CLI
RUN curl -fsSL https://download.docker.com/linux/static/stable/x86_64/docker-24.0.5.tgz \
  | tar zxvf - --strip 1 -C /usr/bin docker/docker

# Node.js
COPY --from=node:18-slim /usr/local/bin/node /usr/local/bin/
COPY --from=node:18-slim /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm

# AWS CLI v2 (official)
RUN curl -fsSL https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o awscliv2.zip && \
    unzip awscliv2.zip && \
    ./aws/install && \
    rm -rf aws awscliv2.zip

USER jenkins
