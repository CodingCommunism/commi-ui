<template>
  <div style="color: red;">
    <slot></slot>
  </div>
  <div class="source">
    <slot name="source"></slot>
  </div>
  <div class="precode">
    <slot name="highlight"></slot>
  </div>
</template>
<script>
export default {
  name: 'DemoBlock',
}
</script>
<style>

</style>
