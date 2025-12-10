import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      // 直接使用源码，绕过 unbuild stub
      // '@l_h5_tool/h5_shoelace_ui/core': resolve(__dirname, '../../ui/h5_shoelace_ui/src/core/index.ts'),
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将 my- 开头的标签识别为自定义元素
          isCustomElement: tag =>
            tag.startsWith('my-') || tag.startsWith('sl-') || tag.startsWith('h5-'),
        },
      },
    }),
  ],
  server: {
    port: 3001,
    strictPort: false,
    watch: {
      ignored: ['!**/ui/h5_shoelace_ui/**', '!**/editor_sync/editor/**'],
      usePolling: true,
      interval: 100,
    },
  },
  optimizeDeps: {
    // ⭐ 关键配置：排除 workspace 依赖，防止预构建缓存
    exclude: ['@l_h5_tool/h5_shoelace_ui', '@l_h5_tool/editor'],
    include: ['@shoelace-style/shoelace'],
  },

  build: {},
  ssr: {
    noExternal: ['@l_h5_tool/h5_shoelace_ui'],
  },
})
