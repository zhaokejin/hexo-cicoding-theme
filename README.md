# hexo



## hexo部署

1. 安装依赖

```bash
npm install
```

2. 配置项

```bash
# 清理文件public文件夹
hexo clean
# 生成部署public文件夹
hexo g
# 发布博客到github
hexo d
# 启动博客预览 http://localhost:4000
hexo s 

```



## 主题更换：

修改_config.yml中的theme属性



## RSS

首先，安装 `hexo-migrator-rss` 插件。

```
$ npm install hexo-migrator-rss --save
```

插件安装完成后，执行下列命令，从 RSS 迁移所有文章。`source` 可以是文件路径或网址。

```
$ hexo migrate rss <source>
```









```xml
## 创建分类页面
D:\hexo>hexo new page categories
INFO  =========================================
INFO    Welcome to use Snippet theme for hexo
INFO  =========================================
INFO  Created: D:\hexo\source\categories\index.md

## 创建标签页面
D:\hexo>hexo new page "tags"
INFO  =========================================
INFO    Welcome to use Snippet theme for hexo
INFO  =========================================
INFO  Created: D:\hexo\source\tags\index.md

## 创建关于我页面
D:\hexo>hexo new page "about"
INFO  =========================================
INFO    Welcome to use Snippet theme for hexo
INFO  =========================================
INFO  Created: D:\hexo\source\about\index.md

## 在hexo下创建一个新的文章
hexo new "文章名称"

## 根据模板创建文章
hexo new post "文章名称" --lang http

多语种支持
若要建立一个多语种的网站，您可修改 new_post_name 和 permalink 参数，如下：

new_post_name: :lang/:title.md
permalink: :lang/:title/
当您建立新文章时，文章会被储存到：

$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
而网址会是：

http://localhost:4000/tw/hello-world/
示例：
D:\hexo>hexo new "00-docker-lession-index" --lang docker
INFO  =========================================
INFO    Welcome to use Snippet theme for hexo
INFO  =========================================
INFO  Created: D:\hexo\source\_posts\docker\00-docker-lession-index.md

```

