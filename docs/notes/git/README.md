---
title: Git
sidebar: auto
---
# Git笔记

## git init

在当前目录创建.git文件夹

例如:

\~/project_demo/.git



## git status

将\~/project_demo下的项目文件和\~/project_demo/.git/index(暂存区)比较,查看相较于暂存区有哪些更改



## git add

将项目文件添加到\~/project_demo/.git/index(暂存区)

例如:

```
git add 1.txt
```

将\~/project_demo目录下的1.txt文件添加到\~/git_test/.git/index(暂存区)



## git commit

将\~/project_demo/.git/index(暂存区)的文件加入**本地**版本库

### git commit -a

git commit -a相当于跳过了git add这一步骤

例如:

```
git commit -a 1.txt
```

直接把~/project_demo下的1.txt加入**本地**版本库

 ### git commit -m

git commit -m可为这一次的提交添加备注

例如:

```
git commit -m"new 1.txt"
```



## git push

将**本地**版本库提交到**服务器**版本库

例如:
```
git push
```

