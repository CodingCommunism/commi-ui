<template>
  <button-doc />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import buttonDoc from '/src/docs/button.md'

export default defineComponent({
  components: {
    ButtonDoc: buttonDoc,
  },
})
</script>

<style>

</style>
