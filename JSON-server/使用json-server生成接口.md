# 1.全局安装：
# npm install -g json-server
# yarn global add json-server
# https://github.com/typicode/json-server#getting-started

# 2.提供一个.json文件,比如data.json
# 3.启动接口服务：json-server data.json
# json-server生成的是rest风格的api:
# 查询：get
# 增加：post
# 删除：delete
# 修改：put：全量修改 / patch：打补丁，只会修改传递的值（好用）
