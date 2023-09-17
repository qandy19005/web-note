## Note

## CommonJs規範
[refer1]<br /> https://medium.com/@jedy05097952/%E6%A8%A1%E7%B5%84%E5%8C%96-2-commonjs-26d2b2071d80
[refer2]<br /> https://dwatow.github.io/2018/02-13-js-module-require-exports/
[def]<br /> 同步 | 一個檔案視為一個模組，讓模組回傳該回傳的東西
[example] <br />
- Commonjs.js
``` javascript
const a = 1
module.exports = a // module.exports as return
```
- test.js
``` javascript
const test = require('./Commonjs.js') // require as call function
console.log(test) // 1
```

## 宣告 Url with params
``` javascript
const url = new URL(`${domain}${path}`);
const searchParams = new URLSearchParams(params);
url.search = searchParams;
```
[refer]<br /> https://pjchender.blogspot.com/2018/08/js-javascript-url-parameters.html

## CLASS
- extend
[description]<br />
extend只適合用在 父 跟 子 是相同的 ex: Animal(父) > Dog(子)
## DOM
- Add class
[methods] <br />
``` javascript
document.getElementById("myDIV").classList.add("mystyle", "anotherClass", "thirdClass");
```
-Remove class
[methods] <br />
``` javascript
document.getElementById("myDIV").classList.remove("mystyle");
```
## 函式

- 宣告式 (Function Declarations)
[methods]  <br />
``` javascript
function myFunc(a, b) {
    return a + b;
}
```
[note]<br />
``` javascript
- 有Hoisting
- 有this, arguments(帶入的參數值)
``` 
- 匿名表達式 (Function Expressions w/o Function Name)
[methods] <br />
``` javascript
const myFunc = function (a, b) {
    return a + b;
};
```
[note]<br />
- 變數名稱 != 函數名稱
- 不具 Hoisting 效果
- 有arguments

- 箭頭函示
[methods] <br />
const sayHello = () => `Hello!`;
[note]<br />
- 不具 Hoisting 效果
- 沒有 arguments
- this 的運作方式與傳統函數不同 **在vue中為windows所以vue中不會宣告箭頭函式

## 陣列
- 複製陣列
[methods] <br />
[...]
``` javascript
const newList = [...list]
```
- 判斷是否為陣列
[methods] <br />
constructor === Array
// 判斷物件陣列是否存在 在判斷是否為陣列
``` javascript
variable.value && variable.value.constructor === Array
```
[refer]<br /> https://ithelp.ithome.com.tw/articles/10219475

- 物件屬性排序
[methods] <br />
``` javascript
Array.sort(function (a, b) {
  return a.id - b.id;
});
```
- 取得物件屬性唯一值
[methods] <br />
``` javascript
const set = new Set();
const removeDupArray = Array.filter(item => {
return !set.has(item.id) ? set.add(item.id) : false});
```
[refer]<br /> https://guahsu.io/2018/04/JavaScript-Duplicates-Array-Object/

- 判斷是否在陣列內
[methods] <br />
``` javascript
array.includes(<param>)
```
[return]<br />
Boolean

- 取得陣列第一筆
[methods]<br />
``` javascript
first = [...arr].shift();
```
[refer]<br /> https://www.techiedelight.com/get-first-element-array-javascript/

- 陣列中加入符號轉字串
[methods] <br />
``` javascript
array.join(',')
```
[return]<br />
"array1,array2,array3"

- 移除重複陣列
[methods] <br />
``` javascript
array.filter((element, index)=> array.indexOf (element) === index)
```
[methods] <br />
Lodash _.uniq(array)

- 移除重複陣列物件
[methods]
``` javascript
const set = new Set();
const filteredArray = array.filter((item) => {
    return !set.has(item.uuid) ? set.add(item.uuid) : false;
})
```
- 合併相同id物件的陣列
[example]
``` javascript
combineArray = firstDatas.map(list => {
    const item = secondDatas.find(item => {
        return list.id === item.id
    })
    return { ...list, ...item }
})
```
## 物件
- Object.assign({}, text) 
[des] 合併(merges)或混合(Mixins)、拷貝
[example] <br />
copy:<br>
``` javascript
const obj = { a: 1 }
const copy = Object.assign({}, obj)
```
combine:
``` javascript
const o1 = { a: 1, b: 1, c: 1 }
const o2 = { b: 2, c: 2 }
const o3 = { c: 3 }
const obj = Object.assign({}, o1, o2, o3)
console.log(obj) // { a: 1, b: 2, c: 3 } 傳入放愈後面位置的物件，它的屬性會覆蓋掉前面的物件
```
- 物件陣列深層複製
[description]<br>
更改物件深層值不互相影響
1. 
``` javascript
let newAry = JSON.parse(JSON.stringify(ary))
 ```
2. lodash.clonedeep 複製多層物件

- (?.)在進入key之前，檢查物件${object}是否為null或undefind
[methods] ${object}?.key <br />
[example] <br />
user?.name = user && user.name(先判斷user是否存在在判斷)
[advanced] <br />
- (??)
[example] A ? A : B = A ?? B <br />
Q: 若profile為null或undefind則帶入defaultProfile<br />
A: const defaultProfile = { age: 0, contry: 'America' } ;<br />
   user?.profile ?? defaultProfile;

- 若物件為null照正常判斷
[methods] (${object} || {}).key <br />

- 判斷物件是否為空
[methods] Object.keys(${object}).length === 0 <br />
[return]<br />
 Boolean

- 物件跑forEach
[methods] 1. Object.keys(${object}).forEach<br />
  顯示object key 
[methods] 2. Object.values(${object}).forEach<br />
  顯示object value 
[methods] 3. Object.entries(${object}).forEach<br />
  顯示 object key, value
## File

- 判斷File格式 
[methods] ${file} instanceof File <br />
[return]<br />
 Boolean

## 時間處理
[格式]
``` javascript
const localDate = new Date(dateFromAPI);
const localDateString = localDate.toLocaleDateString(undefined, {  
    day:   'numeric',
    month: 'short',
    year:  'numeric',
});

const localTimeString = localDate.toLocaleTimeString(undefined, {
    hour:   '2-digit',
    minute: '2-digit',
    second: '2-digit',
});
```
## Lodash

處理陣列比對
1. intersectionBy
2. keyby+filter

陣列重新處理
- map

陣列篩選
- filter
## Prototype
[refer]<br />
https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
## Babel 
註解 Javascript Preprocessor
## JS design-patterns
[refer]<br />
https://www.dofactory.com/javascript/design-patterns
## MP4影片處理
Screen to 開始 Screen leave 結束 
時間 1:01:27 > https://www.youtube.com/watch?v=tzaHrMx1ncc 
## iframe
若需用js更改或處理iframe內部的element會有[同源安全策略]問題<br />
error: Blocked a frame with origin "null" from accessing a cross-origin frame<br />
[refer]<br /> https://stackoverflow.com/questions/29983786/blocked-a-frame-of-origin-null-from-accessing-a-cross-origin-frame-chrome
## 其他
- 斷言
[methods] 辨識後加上 ! <br />
[example] <br />
``` javascript
const partItem: Partial<SpecificPartType> = reactive({})
```
``` html
<FormPart
  v-for="item in partList"
  :key="item.bundle_part_type"
  :part-type="partItem[item.bundle_part_type]!"
  @remove-part-type="removePart"
/>
```
[description] <br />
partItem 可能為 undefined<br />
因此在 :part-type="partItem[item.bundle_part_type]!" 這行最後加上 !