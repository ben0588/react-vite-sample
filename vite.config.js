import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    /*
    ## 新增 base : 用來設定開發中(dev)、產品路徑(build) 所產生的路徑：
      - 參考官方中文設定路徑：https://cn.vitejs.dev/config/shared-options.html#mode
      - production 用於 build
      - development 用於 dev
      - 設定是產品路徑，所套用的 /react-vite-sample/ 等同 github專案的名稱
  */
    plugins: [react()],
    base: process.env.NODE_ENV === 'production' ? '/react-vite-sample/' : '/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                data: '/src/data/data.json',
            },
        },
    },
});

// 如何建立多個環境 ？
/*
  export default defineConfig(({ mode }) => {
    console.log(mode);
    // 開發中、產品路徑
    const base = mode === 'staging' ? '/staging-gh-pages-sample/' : '/';
    return {
      base,
      plugins: [react()],
    };
  });

  然後使用 npm run build -- --mode staging，就可以傳入 'staging' 的環境變數 
*/
