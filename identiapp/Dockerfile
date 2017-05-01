FROM centos:6.8

USER root

RUN yum -y update
RUN yum -y install curl
RUN yum -y install wget
RUN yum -y install httpd
RUN yum -y install epel-release
RUN rpm -ivh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
RUN yum -y install --enablerepo=remi,remi-php56 php php-devel php-mbstring php-pdo php-gd

