<template>
  <c-header>
    <template #icon>
      COMMI-UI
    </template>
    <router-link to="/">首页 </router-link>
    <router-link to="/components">组件</router-link>
  </c-header>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
</style>
