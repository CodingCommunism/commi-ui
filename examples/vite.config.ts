import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
  /**
   * TODO
   * 实现一个 markdown loader 用于加载特定格式的 markdown 文件，生成对组件示例的预览
   * 大概类似于 element-ui 组件库的文档那种吧…
   * 为什么不用 storybook 之类的？因为实在是太丑了…太丑了…
  */
})
