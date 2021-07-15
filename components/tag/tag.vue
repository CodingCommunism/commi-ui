<template>
  <span class="commi-tag">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CTag',
})
</script>

<style lang="scss">
.commi-tag {
  background-color: #f0f0f0;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 3px 8px;
  min-height: 24px;
  border: 1px solid #ccc;
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  color: #666;
  background-color: #f2f2f2;
  border-radius: 3px;
  box-sizing: border-box;
}
</style>
