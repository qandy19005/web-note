## v-if v-show
### 同
1. 都是控制DOM是否顯示

### 不同
1. v-show 使用css--display:none/block控制元素顯示 dom始終存在
2. v-if顯示隱藏dom元素整個新增或刪除
3. v-if會重建與銷毀元件, v-show是css切換
4. v-if, v-else-if, v-else "切換過程"元件會被確認銷毀跟重建當為true才會真的渲染到Dom
5. v-show 不會有生命週期發生, v-if重建會觸發beforeCreate ~ mounted生命週期,銷毀觸發beforeDestroy、destroyed方法

性能
v-if 切換效能耗費高
v-show 初始渲染消耗高

解析
都是取得節點上的判斷式來決定是否顯示或渲染

v-show
1. render和staticRenderFns 生成虛擬VNODE節點

2. 該節點包含創建DOM節點所需信息vm.patch函數通過虛擬DOM算法利用VNODE節點創建真實

3. DOM節點v-show(isVShowDirective)原理不管初始條件是什麼，元素總是會被渲染

if (child.data.directives && child.data.directives.some(isVShowDirective)) {
  child.data.show = true;
}


v-if
1.返回一個node節點，render函數通過表達式的值來決定是否生成DOM

使用場景
v-if 與 v-show 都能控制dom元素在頁面的顯示

v-if 相比 v-show 開銷更大（直接操作dom節點增加與刪除）

如果需要非常頻繁地切換，則使用 v-show 較好

如果在運行時條件很少改變，則使用 v-if 較好

* vm.patch > 否存在舊VNode 節點 prevVnode ，確定組件是第一次渲染還是再次更新
* node節點 html、元素、屬性、文本、註釋、整個文件

參考: https://ppfocus.com/0/au8030925.html

-----
method watch computed 在生命週期如何流程是順的 避免不當使用

設計模型參考:https://iter01.com/14656.html

vue參考 https://book.vue.tw/CH1/1-7-lifecycle.html

# Vue Router

- children用途
保留原本path component view
並在原本template使用router-view
則顯示該path內children的path內容

# vue官網需讀

## 深入組件
### 非Prop的Attribute
### 自定義事件
### 插槽
### 處理邊界情況

## 可複用&組合
### Teleport
### 函數渲染
### 插件

# Vue 2
生命週期 Options API 不需呼叫可直接使用
new instance - 建置vue實體
beforeCreate - data, methods 尚未被設置
created - 可以使用該vue實體的data, methods 但DOM尚未被掛載 無法使用 $el, $ref (常用在'簡單'ajax請求-太複雜或大量資料會延後畫面渲染時間,頁面初始化)
beforeMount - vue掛載前,$el已掛載, 並且編譯template, data內的資料尚未更新到DOM 畫面會看到{{ message }} 
||--> 子元件在此進入 beforeCreate-> mounted
|| computed - 首次載入會先執行一次
mounted - 完成雙向綁定,完成vue掛載DOM和渲染, 可進行DOM操作 $el, $ref, data內的資料已更新DOM
beforeUpdate - 當vue實體的data改變, 在DOM重新渲染之前
updated -  當vue實體的data改變完成, 並且DOM已重新渲染 (別在此對data進行操作,會死回圈)
beforeDestroy - 在vue實體要關閉或被銷毀前, vue實體完整存在（銷毀定時器,解除全域)
destroyed - vue實體所有資料方法被關閉或移除,無法在此對vue實體做任何操作

|| mounted改變數據
|| mounted -> watch -> beforeUpdate -> computed -> updated

|| methods改變數據
|| methods -> watch -> beforeUpdate -> computed -> updated

|| computed & watch 只有依賴和監聽的值有改變，才會執行
|| methods 只要觸發事件，就會執行函數

|| computed 具有緩存性,頁面重新渲染值若不變化則立即返回之前的計算結果 :https://vuejs.org/guide/essentials/computed.html#computed-caching-vs-methods
|| watch 無緩存性,頁面重新渲染好值不變化也會執行
- Slot

- 動態組件

# Vue JS 3
- 生命週期
setup > created > mounted

Composition API 需要呼叫才能使用
setup(){
	所有方法及資料處理都寫在此
	(beforeCreate 可呼叫不需宣告給data邏輯的的API)
	(created 初始化資料,呼叫API宣告給data)
	1.onBeforeMount 宣告或取得資料refs/reactive (beforeMount 可呼叫 this.$el(dev#app)) 但DOM尚未被渲染 
	2.onMounted (mounted) DOM已被完成渲染
	3.onBeforeUpdate (beforeUpdate)
	4.onUpdated (updated)
	5.onBeforeUnmount (beforeDestory)
	6.onUnmounted (destoryed)
}

- setup
1.data 2.function 3.computed/watch 4.lifecycle hooks
- ref / reactive
不同點
ref 可以接受任何型態的資料，但是不會對物件或陣列內部的屬性變動做監聽，可給ref宣告的object賦予新的object

reactive 只能接受 Object 或 Array，會對內部(deep)的屬性變動做深層的監聽，取資料時不需要 .value，無法給reactive宣告的object賦予新的object
ex: const user = reactive({}); user = { name: Andy } 會報錯
const user = reactive({ name: ''}); user.name = 'Andy' 可直接宣告

宣告 ref / reactive data
ex: const refName = ref('Andy'); // 能在template使用 {{ name }}
ex: const reactiveName = reactive('Andy'); // 能在template使用 {{ name }}
更改 ref / reactive data
refName.value = 'Asa'; // 需使用value
reactiveName = 'Asa'; // 無法更改

宣告 ref / reactive object
ex: const refObject = ref({name:'Andy'}); // 能在template使用 {{ refObject.name }}
ex: const reactiveObject = reactive({name:'Andy'}); // 能在template使用 {{ reactiveObject.name }}
更改 ref / reactive object
refObject.value.name = 'Asa'; // 需使用value
reactiveObject.name = 'Asa'; // 不需使用value
- setup -> computed
const fullName = computed(() => {
    return lastName + firstName;
})
- setup -> watch / watchEffect
watch(value,()=>{
    console.log('value has changed.');
})
watchEffect(()=>{
    console.log('will run when first load component');
})
watchEffect(()=>{
    console.log('will run when first load component and run when value is changed.',value);
})
- setup -> props
setup(props){
    console.log(props);
}
- setup -> lifecycle hooks
onMounted(() => console.log('when component run'))
onUnmounted(() => console.log('when component closed'))
onUpdated(() => console.log('when component updated'))

- setup -> async
can use async function

- setup -> composables<folder>
put reusable functions

- defineAsyncComponent
當 component 需要被顯示時才載入

- Teleport瞬移

- Suspend 頁面處理 Loading 
不需使用v-if來判斷是否使用component
<Suspense>
 <div #default>
 <div #fallback>

# Q&A?

Q: Why needs index for v-for key? 
A: 為了避免重複產生DOM元素而浪費資源

Q: 子層越級使用父層資料?
A: 父: Provide 子: Inject

Q: 如何保留原頁面資料返回時不重打API?
A: <keep-alive> 緩存元件

Q: 如何滑順的移動到目的地標籤?
A: this.$refs['element'].scrollIntoView({behavior: 'smooth'});
