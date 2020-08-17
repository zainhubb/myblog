---
title: Scrapy
sidebar: auto
---
# scrapy爬虫学习记录
## 1.scrapy介绍

![](../../.vuepress/public/assets/img/scrapy/1.png)

## 2.安装scrapy框架:

进入虚拟环境后,通过命令

```shell
pip install scrapy
```

来安装scrapy框架(**如果在在windows下,还需要安装**`pypiwin32`)



## 3.创建项目和爬虫:

1.通过以下命令来创建scrapy项目

```shell
scrapy startproject <项目名称>
```

2.进入scrapy项目路径后,通过以下命令来创建scrapy爬虫

```shell
scrapy genspider <爬虫名称> <"爬虫的域名">
```

创建带模板的scrapy爬虫

```shell
scrapy genspider -t <模板名称> <爬虫名称> <"爬虫的域名">
```



**(爬虫的名称不能和项目名称一样,且爬虫名称唯一**)

## 4.启动爬虫

通过以下命令来启动爬虫

```shell
scrapy crawl <爬虫名称>
```

可以建立`start.py`文件,来通过启动该文件快速启动爬虫

```python
from scrapy import cmdline
cmdline.execute(["scrapy","crawl","<爬虫名称>"])
```



## 5.项目目录结构

1. `items.py`:用来存放爬虫爬下来的数据模型
2. `middlewares.py`:用来存放各种中间件的文件.
3. `pipelines.py`:用来将items的模型存储到本地磁盘中.
4. `settings.py`:该爬虫的一些配置信息(比如:请求头,多久发送一次请求,ip代理池等)
5. `scrapy.cfg`:项目的配置信息
6. `spiders`文件夹:爬虫存放路径







## 糗事百科爬虫笔记

1. **response是一个`scrapy.http.response.html.HtmlResponse`对象.可以用`xpath`和`css`语法来提取数据.**

2. **提取出来的数据是一个`Selector`或者一个`SelectorList`对象,如果想要过去其中的字符串应该执行`get()`方法或者`getall()`方法.**

3. **`getall()` 方法:获取的是`Selector`中所有文本.返回的是一个列表.**

4. **`get()`方法:获取的是`Selector`中的第一个文本**

5. **如果数据解析回来,要传给pipeline处理,那么可以使用`yield`来返回.如果不用`yield`也可以每次将item存入一个列表,最后循环结束后将列表返回**

6. **item建议在items.py中设置好模型,不要使用字典**

7. **pipeline是专门用来保存数据的,其中有三个方法**

   - `open_spider(self,spider)`:当爬虫被执行时,调用该方法.

   - `process_item(self,item,spider)`:当爬虫中有item传过来的时候被调用
   - `close_spider(self,spider)`:当爬虫被关闭时,调用该方法.

8. **要激活pipeline,应该先在`settings.py`中设置`ITEM_PIPELINES`.**

   ```
   ITEM_PIPELINES = {
      'qsbk.pipelines.QsbkPipeline': 300,
   }
   ```

## JsonItemExporter和JsonLinesItemExport:

保存Json数据的时候可以使用这两个类,让操作更简单.

1. `JsonItemExporter`:这每次把数据添加到内存中,最后统一讲数据写入到磁盘中.好处是**存储的是一个满足json规则的文件**,坏处是**比较消耗内存**.示例代码如下:

   ```python
   class QsbkPipeline:
   
       def __init__(self):
           self.fp = open("duanzi.json",'wb')
           # fp=filepoint 文件指针,代表操作的那个文件
           # 启动爬虫时,打开一个"duanzi.json"的json文件,方便后续写入操作
           self.exporter = JsonItemExporter(self.fp,ensure_ascii=False,encoding='utf-8')
           self.exporter.start_exporting()
   
   
       def open_spider(self,spider):
           print("爬虫开始了")
       
       
       def process_item(self, item, spider):
           self.exporter.export_item(item)
           return item
       
       
       def close_spider(self,spider):
           self.exporter.finish_exporting()
           self.fp.close()
           print("爬虫结束了")
   ```
   
   
   
2. `JsonLinesItemExport`:这个是每次调用`export_item`的时候就把item写入到磁盘中,好处是**每次处理数据的时候就直接存储到了磁盘中,这样对内对消耗较少,数据也比较安全**,坏处是**存储的不是一个满足json规则的文件**.示例代码如下:

   ```python
   class QsbkPipeline:
   
       def __init__(self):
           self.fp = open("duanzi.json",'wb')
           # fp=filepoint 文件指针,代表操作的那个文件
           # 启动爬虫时,打开一个"duanzi.json"的json文件,方便后续写入操作
           self.exporter = JsonLinesItemExporter(self.fp,ensure_ascii=False,encoding='utf-8')
   
   
       def open_spider(self,spider):
           print("爬虫开始了")
       
       
       def process_item(self, item, spider):
           self.exporter.export_item(item)
           return item
       
       
       def close_spider(self,spider):
           self.fp.close()
           print("爬虫结束了")
   ```





## scrapy下载图片

1. 在`items.py`设置好数据模型,`image_urls`和`images`

   (***注意:***`image_urls`***必须是一个***`list`)

   (***注意:***`image_urls`***必须是一个***`list`)

   (***注意:***`image_urls`***必须是一个***`list`)

   ```python
   class ImagesItem(scrapy.Item):
   
       image_urls = scrapy.Field()
       images = scrapy.Field()
   
       pass
   ```

2. 在`settings.py`中设置好`ITEM_PIPELINES`

   ```py
   ITEM_PIPELINES = {
     'scrapy.pipelines.images.ImagesPipeline':1
   }
   ```

3. 在`settings.py`中设置好`IMAGES_STORE`

   ```
   import os
   IMAGES_STORE = os.path.join(os.path.dirname(os.path.dirname(__file__)),'images')
   # 这里使用了os模块,设置图片存放路径为"../images"
   ```

   

