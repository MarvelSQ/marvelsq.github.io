# VUE

## VUE-cli
创建
vue init [template] [project_name]

npm install

npm run dev

there is first bug

## BUG
[1] 使用npm run dev后，出现此错误
```
PS C:\ProjectSpace\sqweb> npm run dev
 
> sqweb@1.0.0 dev C:\ProjectSpace\sqweb
> node build/dev-server.js
 
> Starting dev server...
 
 
 ERROR  Failed to compile with 2 errors                               17:27:59
 
 error  in ./src/App.vue
 
Module build failed: Error: "extract-text-webpack-plugin" loader is used witho

ut the corresponding plugin, refer to https://github.com/webpack/extract-text-
webpack-plugin for the usage example
    at Object.module.exports.pitch (C:\ProjectSpace\sqweb\node_modules\extract
-text-webpack-plugin\loader.js:25:9)
```

  解决方案：
  在webpack.dev.conf.js中添加

  ```js
  var ExtractTextPlugin = require('extract-text-webpack-plugin')
  new ExtractTextPlugin("style.css")
  ```
