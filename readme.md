1.Git
    版本控制器
    优势：分布式
    svn:集中式

2.安装：
    每台机器的识别码：
        $ git config --global user.name "Your Name"
        $ git config --global user.email "email@example.com"

3.创建版本库
    1.选择一个文件夹作为自己的版本库
    2.使用命令“git init”初始化版本库
    3.用命令“git add”告诉Git，把文件添加到仓库
    4.用命令git commit告诉Git，把文件提交到仓库
    5.“git status”命令看看结果，是否与服务器同步
    6.“git diff”命令查看文件具体详情
    7.“git log”查看历史版本
    8."git reset --hard HEAD^" 时光穿梭机
    9.“git rm **.**” 删除文件

4.远程关联仓库
    1.SSH的生成：
        $ ssh-keygen -t rsa -C "youremail@example.com"
    2.提交远程仓库
        $ git push -u origin master  :第一次上传
        $ git push origin master  :上传
        $ git clone "地址"  :克隆
        $ git pull          :更新
5.没有视频