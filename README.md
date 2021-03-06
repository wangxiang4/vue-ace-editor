vue-ace-editor
====================
[![npm](https://img.shields.io/npm/v/v-ace-editor.svg)](https://www.npmjs.com/package/v-ace-editor)

一个包装 [ace](https://ace.c9.io/) 灵感来自[vue3-ace-editor](https://github.com/CarterLi/vue3-ace-editor) ,目前已适配vue2.x.x版本

## 如何使用

1. 安装

    ```shell
    npm i v-ace-editor
    ```

2. 注册在`components`选项

    ```js
    import AceEditor from 'v-ace-editor';

    export default {
        data:{
          test:''
        },
        methods,
        ...
        components: {
            AceEditor,
        },
    }
    ```

3. Use the component in template

    ```html
    <ace-editor
       v-model="test"
       lang="html"
       theme="ambiance"
       style="height: 300px"
    />
    ```

    道具`v-model` 是必需的。 `<ace-editor>` 默认没有高度。它的高度必须手动指定，或者同时设置 `min-lines` 和 `max-lines` 以使编辑器的高度自动增长。
    prop `lang`,`theme` 具体可以参考 [ace-editor的文档](https://github.com/ajaxorg/ace)


## 详细说明
目前支持按需加载,设置`lazy=false`,添加自己需要的文件,具体可参考下方地址
```html
https://github.com/ajaxorg/ace-builds/blob/a4103cb0a672a4fec9a16fc344f3116b51d6bcda/webpack-resolver.js
```
参数说明

| Attribute             | Description                                               | Type                                               
| --------------------- | --------------------------------------------------------- | --------------------------------------------------------- 
| `value`       | 值               | String      
| `lang`        | 语言            | String    
| `theme`     | 主题              | String    
| `options`     | 扩展参数       | Object     
| `placeholder`   | 提示             | String  
| `readonly` | 只读         | Boolean     
| `wrap`      | 搜索到达结尾时,将搜索返回到开头      | Boolean     
| `printMargin` | 显示打印边距和设置打印边距宽度的快捷方式 | Boolean, Number   
| `minLines`    | 至少行数   | Number                                                     |
| `maxLines`    | 至多行数    | Number                                                    |
| `lazy`    | 懒加载   | Boolean                                                     |
[更多参数](https://github.com/ajaxorg/ace/wiki/Configuring-Ace)


## LICENSE

MIT


作者:entfrm开发团队-王翔
