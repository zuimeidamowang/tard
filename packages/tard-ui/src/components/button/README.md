# Button 按钮
### 介绍
按钮用于传递用户触摸时会触发的操作
### 引入
```js
import { SlButton } from 'tard'
```

## 使用指南
### 基础用法
引入组件后可以在页面中直接引用，默认宽度会取决于文本内容的长度
```js
<SlButton>按钮基本使用</SlButton>
```
### 基础用法
设置 `disabled` 属性设置按钮禁用状态
```js
<SlButton disabled>禁用按钮</SlButton>
```
### 圆角按钮
设置disabled属性设置按钮禁用状态
```js
<SlButton round>圆角按钮</SlButton>

```

### 通栏按钮
设置 `full` 属性后按钮会自动铺满父容器
```js
<SlButton full>通栏按钮</SlButton>
```
### 自定义边框颜色
设置 `borderColor` 属性可以指定按钮边框颜色
```js
<SlButton full borderColor='pink'>自定义边框颜色</SlButton>
```
### 自定义背景颜色
设置 `fillColor` 属性可以指定按钮背景颜色
```js
<SlButton full fillColor='pink'>自定义背景颜色</SlButton>
```
### 尺寸大小
通过设置 `size` 尺寸属性可以选择三种默认尺寸按钮，也可通过类名自定义生成您需要的按钮尺寸
```js
<SlButton size='small'>small button</SlButton>
<SlButton size='middle'>middle button</SlButton>
<SlButton size='large'>large button</SlButton>
```
### 自定义圆角
通过设置 `radius` 属性的值可以改变按钮的圆角值
```js
<SlButton>默认</SlButton>
<SlButton radius={24}>24px</SlButton>
<SlButton radius={36}>36px</SlButton>
```

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| fill | 是否填充背景 | boolean | false |
| full | 自动充满父容器 | boolean | false|
| size | 按钮尺寸大小 | string | - |
| round | 是否圆角 | boolean | false|
| color | 按钮颜色 | string | - | 
| fillColor | 按钮填充颜色 | string | - |
| borderColor | 边框颜色 | string | - |
| radius | 按钮自定义圆角 | number | - |
| disabled | 设置按钮为禁用态（不可点击） | boolean | false |

### Events
|  事件名   | 说明  | 回调参数 | 
|  ----  | ----  | ---- | 
| onClick | 点击按钮时触发 | - | 


### 样式变量
|  属性   | 默认值 |
|  ----  | ---- |
| @button-height | 80px |
| @button-height-sm | 80px |
| @button-small-width-min | 100px |
| @button-small-width-max | 160px |
| @button-normal-width-min| 220px |
| @button-normal-width-max | 280px |
| @button-middle-width-min | 340px |
| @button-middle-width-max | 400px |
| @button-large-width-min | 480px |
| @button-large-width-max | 540px |


