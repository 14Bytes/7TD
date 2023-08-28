# 世纪飞越团队技术文档

## 本地调试开发

### 环境要求

* Nodejs 版本大于等于 16 lts 版

### 本地运行

1. 安装依赖

    ``` bash
    $ pnpm install

    ```
2. 调试运行

    ``` bash
    $ pnpm run docs:dev #启动服务器。默认情况下，访问网址为： http://localhost:5173
    ```

3. 打包发布

    ``` bash
    $ pnpm run docs:build
    ```

## Markdown 扩展语法

> 更多内容可见 vitepress  官网：[https://vitepress.dev/guide/markdown](https://vitepress.dev/guide/markdown)

观看[test.html](/test)