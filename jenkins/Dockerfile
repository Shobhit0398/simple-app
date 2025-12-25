# STAGE 1: Build/Download tools (Optional if you just need standard binaries)
# Using Alpine or Slim images as a base is the #1 way to reduce size.
FROM jenkins/jenkins:lts-slim AS base

USER root

# 1. Use 'slim' versions of OS packages and clean up after installation
# 'rm -rf /var/lib/apt/lists/*' removes the local repository of retrieved package files.
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    git \
    unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 2. Install Docker CLI only (if you are using Docker-out-of-Docker)
# Instead of installing the full Docker engine, just grab the binary.
RUN curl -fsSL https://download.docker.com/linux/static/stable/x86_64/docker-24.0.5.tgz | tar zxvf - --strip 1 -C /usr/bin docker/docker

# 3. Use Multi-Stage concepts for Node/Java
# If you need NodeJS, don't use 'apt install'. Use a specific version 
# or copy it from the official node image.
COPY --from=node:18-slim /usr/local/bin/node /usr/local/bin/
COPY --from=node:18-slim /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm

# 4. Minimize layers
# Every RUN, COPY, ADD instruction adds a layer. Combine them with '&&'.
# Install AWS CLI v2 (official binary)
RUN curl -fsSL https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o awscliv2.zip && \
    unzip awscliv2.zip && \
    ./aws/install && \
    rm -rf aws awscliv2.zip

    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

USER jenkins
