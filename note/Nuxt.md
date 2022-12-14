===== Nuxt =====
參考網址: https://ithelp.ithome.com.tw/articles/10206412

1. 寫文章內容: https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content#lets-create-our-markdown-page

=== 直接設定router
<NuxtLink to="/">Home page</NuxtLink>

=== 設定 HTML seo meta
head(){
return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
}

=== page 頁面
每個頁面

=== layout 頁面佈局
可放置header footer aside

=== loading
進入頁面前的Loading畫面
url: components/loading
import -> nuxt.config.js : loading: '~/components/loading'

=== middleware
指定這頁採用哪種權限驗證

=== assets
需要被webpack打包資源 ex: sass、images

=== validate
https://nuxtjs.org/docs/components-glossary/validate/#the-validate-method
指定這頁得具備哪些資訊才看得到

=== asyncData && fetch
設置頁面狀態(data & store)，收納 API 呼叫邏輯
執行順序: asyncData > fetch


=== prism
選擇要的語言:https://prismjs.com/download.html
下載 js & css 
import 到專案內
=== NPM 問題
-- Sass
sass-loader && node-sass 版本問題
太新會導致版本相沖無法編譯
建議版本: "sass-loader": "^10.2.0" | "node-sass": "^6.0.0"

--Pug
npm install pug-plain-loader pug --save-dev