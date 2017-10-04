FROM ubuntu:16.10

RUN apt-get -y update \
    && apt-get -y install curl wget sudo xvfb openjdk-8-jre-headless \
    && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get -y install nodejs

# Install app dependencies
COPY package.json /src/package.json
COPY protractor/*.js /src/
RUN cd /src; npm install --dev \
    && /src/node_modules/protractor/bin/webdriver-manager update

ENV DISPLAY :99
