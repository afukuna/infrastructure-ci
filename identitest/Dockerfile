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

# Install app dependencies
COPY package.json /src/package.json
COPY protractor/*.js /src/
RUN cd /src; npm install --dev
RUN /src/node_modules/protractor/bin/webdriver-manager update

ENV DISPLAY :99
