import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

console.log(process.env)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // define: {
  //   'process.env': process.env
  // },
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    }
  }
})
