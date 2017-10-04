# infrastructure-ci

##jenkinsコンテナ作成
##docker run -d --name jenkins -p 8080:8080 -e JAVA_OPTS='-Duser.timezone=Asia/Tokyo -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8' --volumes-from jenkins-data -v /var/run/docker.sock:/var/run/docker.sock identijenk
