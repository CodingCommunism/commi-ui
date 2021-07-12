import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
  // 实现一个 markdown loader 用于加载特定格式的 markdown 文件，生成对组件示例的预览
})
