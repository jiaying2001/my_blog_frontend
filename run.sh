#!/usr/bin/env bash
# 定义应用组名
group_name='my_blog_fronted'
# 定义应用名称
app_name='my_blog_fronted'
# 定义应用版本
app_version='1.0-SNAPSHOT'
# 定义应用端口
port=80

echo '----copy jar----'
docker stop ${app_name}
echo '----stop container----'
docker rm ${app_name}
echo '----rm container----'
docker rmi ${group_name}/${app_name}:${app_version}
echo '----rm image----'
# 打包编译docker镜像
docker build -t ${group_name}/${app_name}:${app_version} .
echo '----build image----'
docker run -p ${port}:${port} --name ${app_name} \
-e TZ="Asia/Shanghai" \
-d ${group_name}/${app_name}:${app_version}
echo '----start container----'