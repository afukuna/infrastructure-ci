FROM ubuntu:16.10

USER root

RUN apt-get -y update
RUN apt-get -y install curl
RUN apt-get -y install wget
RUN apt-get -y install sudo
RUN apt-get -y install xvfb
RUN apt-get -y install firefox
RUN apt-get -y install openjdk-8-jre-headless
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get -y install nodejs
RUN wget http://selenium-release.storage.googleapis.com/3.4/selenium-server-standalone-3.4.0.jar -P /src/

# Install app dependencies
COPY package.json /src/package.json
COPY test.js /src/test.js
RUN cd /src; npm install --dev

