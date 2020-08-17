---
title: Git
sidebar: auto
---
# Git笔记

## git init

在当前目录创建.git文件夹

例如:`~/project_demo/.git`



在github中创建好仓库,复制仓库链接`git@github.com:xxxxx/xxxxx.git`
通过以下命令将本地项目与远程仓库关联

```zsh
git remote add origin git@github.com:xxxxx/xxxxx.git
```
## git status

将\~/project_demo下的项目文件和\~/project_demo/.git/index(暂存区)比较,查看相较于暂存区有哪些更改



## git add

将项目文件添加到\~/project_demo/.git/index(暂存区)

例如:

```zsh
git add 1.txt
```

将\~/project_demo目录下的1.txt文件添加到\~/git_test/.git/index(暂存区)

例如:
```zsh
git add .
```
将\~/project_demo目录下的所有文件添加到\~/git_test/.git/index(暂存区)


## git commit

将\~/project_demo/.git/index(暂存区)的文件加入**本地**版本库

### git commit -a

git commit -a相当于跳过了git add这一步骤

例如:

```zsh
git commit -a 1.txt
```

直接把~/project_demo下的1.txt加入**本地**版本库

 ### git commit -m

git commit -m为这一次的提交添加备注

例如:

```zsh
git commit -m"new 1.txt"
```



## git push

将**本地**版本库提交到**服务器**版本库

例如:
```zsh
git push
```

如果当前本地处于一个新的分支则用该命令

```zsh
git push -u origin '分支名' 
```



## git clone



## git checkout

```zsh
git checkout '分支名'
```

切换到其他分支

```zsh
git checkout -b '新分支名'
```

创建一个新分支,并且切换到该分支

## git merge

```zsh
git merge '本地分支名'
```

将输入的分支与当前所在的分支进行合并

## git branch

### git branch 

查看本地所有分支

### git branch -d

```
git branch -d <本地分支名>
```

删除本地分支