import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: 'src/21_ui/views',
      extensions: ['.vue'],
      dts: 'src/typed-router.d.ts',
      importMode: 'async'
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue(),
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink']
        }
      ],
      injectAtEnd: true,
      vueTemplate: true,
      dts: 'src/auto-imports.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
