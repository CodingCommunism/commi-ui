<template>
  <div class="commi-header">
    <div class="commi-header__icon">
      <slot name="icon"></slot>
    </div>
    <div class="commi-header__navs">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CHeader',
})
</script>

<style lang="scss">
.commi-header {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #000;

  &__icon {
    width: 30%;
    float: left;
  }

  &__navs {
    float: right;
  }
}
</style>
