## 测试展示按钮组件

按钮组件是一种按钮，点击可以触发事件。是的，可以点击。

```javascript
const a = 1;
console.log(121, a);
```

:::demo 基础使用

```html
<template>
  <c-button @click="open">点击打开 Alert</c-button>
</template>

<script>
  export default {
    methods: {
      open() {
        alert('hello')
      },
    },
  }
</script>
```

:::

:::demo 还是基础使用

```html
<template>
  <c-button @click="open">点击打开 Alert</c-button>
</template>

<script>
  export default {
    methods: {
      open() {
        alert('world')
      },
    },
  }
</script>
```

:::

演示成功
