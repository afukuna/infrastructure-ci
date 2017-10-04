FROM centos:6.8

RUN yum -y update && yum -y install curl wget httpd \
 && rpm -ivh https://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm \
 && rpm -ivh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm \
 && yum -y install --enablerepo=remi,remi-php56 php php-intl php-devel php-mbstring php-pdo php-gd php-pgsql \
 && yum -y install https://download.postgresql.org/pub/repos/yum/9.4/redhat/rhel-7-x86_64/pgdg-centos94-9.4-3.noarch.rpm \
 && yum -y install postgresql94-server postgresql94-contrib

USER postgres
RUN mkdir /tmp/work
COPY init.sql /tmp/work/init.sql
COPY bookdb_dump.sql /tmp/work/bookdb_dump.sql

RUN /usr/pgsql-9.4/bin/initdb --encoding=UTF8 --no-locale -D /var/lib/pgsql/9.4/data \
 && echo "local all  all      trust" >> /var/lib/pgsql/9.4/data/pg_hba.conf \
 && echo "host all  all    0.0.0.0/0  trust" >> /var/lib/pgsql/9.4/data/pg_hba.conf \
 && echo "listen_addresses='*'" >> /var/lib/pgsql/9.4/data/postgresql.conf

#ENTRYPOINT bash -c "cd ~ && /usr/pgsql-9.4/bin/pg_ctl -D /var/lib/pgsql/9.4/data -l logfile start && sleep 5s && psql -f /tmp/work/init.sql && psql -f /tmp/work/bookdb_dump.sql && /bin/bash"

USER root

COPY httpd-foreground /usr/local/bin/

CMD ["httpd-foreground"]
