# Javascript
## Prototype
參考資料:
https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

## 陣列處理
- 物件屬性排序
[methods]
Array.sort(function (a, b) {
  return a.id - b.id;
});

## 取得物件屬性唯一值
[methods]
const set = new Set();
const removeDupArray = Array.filter(item => {
return !set.has(item.id) ? set.add(item.id) : false});

## Join -> 連結Array並回傳String
const emptyFiled = ['name', 'age', 'gender'];
console.log(emptyFiled.join(','));
=>'name,age,gender';

# 其他JS相關
## Babel 
註解 Javascript Preprocessor

## JS design-patterns
參考網址:
https://www.dofactory.com/javascript/design-patterns

## lodash
處理陣列比對
1. intersectionBy
2. keyby+filter

陣列重新處理
- map

陣列篩選
- filter


## MP4影片處理
Screen to 開始 Screen leave 結束 
時間 1:01:27 > https://www.youtube.com/watch?v=tzaHrMx1ncc 