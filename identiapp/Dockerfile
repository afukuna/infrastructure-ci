FROM centos:6.8

USER root

RUN yum -y update
RUN yum -y install curl
RUN yum -y install wget
RUN yum -y install httpd
RUN yum -y install sudo
RUN rpm -ivh https://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
RUN rpm -ivh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
RUN yum -y install --enablerepo=remi,remi-php56 php php-intl php-devel php-mbstring php-pdo php-gd php-pgsql
RUN yum -y install https://download.postgresql.org/pub/repos/yum/9.4/redhat/rhel-7-x86_64/pgdg-centos94-9.4-3.noarch.rpm
RUN yum -y install postgresql94-server postgresql94-contrib

RUN service postgresql-9.4 initdb

RUN echo "host all  all    0.0.0.0/0  md5" >> /var/lib/pgsql/9.4/data/pg_hba.conf
RUN echo "listen_addresses='*'" >> /var/lib/pgsql/9.4/data/postgresql.conf

RUN service postgresql-9.4 start
RUN chkconfig postgresql-9.4 on

RUN service httpd start
RUN chkconfig httpd on

USER postgres

RUN mkdir /tmp/work
COPY bookdb_dump.sql /tmp/work/bookdb_dump.sql

RUN psql --command "CREATE USER docker WITH SUPERUSER PASSWORD 'docker';"
RUN sudo -u postgres psql -f /tmp/work/bookdb_dump.sql
