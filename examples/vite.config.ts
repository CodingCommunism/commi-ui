import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import md2vue from '@commi/rollup-plugin-md2vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    md2vue({
      blockComponent: '/src/components/demo-block.vue',
    }),
  ],
})
