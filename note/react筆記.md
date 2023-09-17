## Note
## Set Up
- Create-react-app
Need:
node.js version v15 up
## Hook
### useRef()
[description] <br />
不re-render狀態下更新值<br />
[refer] <br />
https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-useref-c628cbf0d7fb
### useMemo()
[description] <br/>
物件宣告記憶體處理<br />
[refer] <br />
https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/react-optimize-performance-using-memo-usecallback-usememo-a76b6b272df3

## React 教學課程

### Setup React project step by step
[refer] <br />
https://www.youtube.com/watch?v=EUM78cxo0i8&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=3

### Zero-why react (react & react-dom(for web))
0-1.
``` javascript
ReactDOM.render(React.creatElement('h1', {style: {color: 'red'}}, 'HELLO'), document.querySelector('#app'));
```
0-2.<br />
JSX -> babel -> React.creatElement...<br />
[refer] <br />
ReactDOM: https://www.youtube.com/watch?v=OFHAIpw2oZI&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=6<br />
JSX: https://www.youtube.com/watch?v=BS9g6Z3lbBU&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=8<br />
### First-basic
1. 建立function component
2. return <></>
3. export default function component
4. <div className />
5. useState
6. props
7. map(data =>())
[refer] <br />
https://www.youtube.com/watch?v=dGcsHMXbSOA&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE

### Second-get api data
8. useEffect
9. import style from './xxx.css'
10. input onChange()
11. e.target.value & e.preventDefault();
12. fetch async await promise 
[refer] <br />
https://www.youtube.com/watch?v=U9T6YkEDkMo&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=2

### Third-router 
13. react-router-dom
  a. browserRouter 包住所有component 
  b. route  <Route path="/home" component={home}>
  c. switch 只顯示一個 route 內容
  d. exact <Route path="/home" exact component={home}> path完全正確才顯示
  e. link <Link to="/home">Home</Link>
14. match >> function child({match}) {}; 取得router資訊
[refer] <br />
https://www.youtube.com/watch?v=Law7wfdg_ls&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=3
### Fourth-state management 
15. context api > contextFile > import createContext > export provider > useContext
16. 用到 context的地方都會rerender
[refer] <br />
https://www.youtube.com/watch?v=35lXWvCuM8o&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=4
### Fifth- redux(vuex) 狀態管理 redux react-redux(hook) | Redux DevTools(chrome plugin) 
17. ACTION(action) 宣告要做的事情
18. REDUCER(call action & called by dispatch) 
- 宣告state
- 使用action選擇(switch)
19. DISPATCH(dispatch)
20. create [actions folder] && [reducers folder]
- 創建一個[allReducers file]引入所有reducer
- 創建action index.js 放要被呼叫的事情 ex: type: 'INCREMENT'...
21. in component
- import { createStore } from 'redux';
- import allReducer from './reducers/index.js'
- import { Provider } from 'react-redux';
- const appStore = createStore(allReducer); | store.subscribe(查看store狀態改變)
- [main.js]<Provider store={appStore}><app/></Provider>
- [app.js] useSelector(取得state), useDispatch(呼叫action) -> react-redux
  import { function } from './actions/index.js';<br />
[refer]<br />
https://www.youtube.com/watch?v=CVpUuw9XSjY&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=5
### 建立一個fetch function (最後一段影片)
[refer]<br />
https://www.youtube.com/watch?v=GGo3MVBFr1A

## TypeScript
1. State: const [note, setNote] = setState<number | string>(''); 
2. State Interface for array[{object}]: 24:10
``` javascript
	interface IState {
		people: {
			name: string
			age: number
			...
		}[]
	}
	const [people, setPeople] = setState<IState['people']>([])
```
3. Props: 30:20
   - child component -
``` javascript
   interface IProps {
		people: {
			name: string
			age: number
			...
		}[]
	}

	// 1. 
    const List = (propsL iProps) => {}

	// 2.
	const List: React.FC<IProps> = ({ people }) => {}
```
4. Function: 39:38
``` javascript
   const renderList = (): JSX.Element[] => {
    return people.map((person) => {
 		return (
 			<li>
 				....
 			</li>
 		)
	})
   }
   // 如果沒有要 return 東西 (void)
   const handleClick = (): void => {}
```
5. Event: 50:40

6. 不重複定義 interface 可以父層 export 子層 import: 55:43

7. 定義 const [people, setPeople] 到子層: 58:18
[refer]<br />
https://www.youtube.com/watch?v=jrKcJxF0lAU

## React效能處理
Code-Splitting: https://zh-hant.reactjs.org/docs/code-splitting.html
VirtualizedList: https://reactnative.dev/docs/virtualizedlist

## React物件宣告錯誤處理
[refer]<br />https://www.youtube.com/watch?v=Fhu5cu864ag

## React Life Cycle
- elements into the DOM
1. constructor(props)
setup initial state
2. getDerivedStateFormProps(props, state)
before rendering the element in the DOM<br />
place to set state object based on the initial props<br />
takes state as argument, and return an new changed state
3. render() 
require output HTML to the DOM
4. componentDidMount()
run after component is rendered<br />
run statement that component is already placed in the DOM

- update
1. getDerivedStateFromProps(props, state)
place to set state object based on the initial props
2. shouldComponentUpdate()
return Boolean that want to update or not
3. render()
require output HTML to the DOM
4. getSnapshotBeforeUpdate(prevProps, prevState)
can get before changing value
5. componentDidUpdate()
is called after the component is updated in the DOM<br />
can get changed value

- unmounting
1. componentWillUnmount()
about to be removed from the DOM
[refer]<br />https://www.w3schools.com/react/react_lifecycle.asp

## Class Component
``` javascript
import { Component } from 'react';

class TestComponent extends Component{
	constructor(props){ // 需帶入props
		super(props) // 並且繼承才能在constructor進行呼叫 this.props
		this.state = 'Test Component Value';
	}
	render(){
		return(<></>) // 必備實作回傳JSX react elements
	}
}
```
- 需繼承 component
- 生命週期
- 有state
- 需要實作render
- 有 this
- 可以拿到最新的 this.props, 因為this隨時都在變化

## Function Component
- 沒有生命週期 (React Hook useEffect後有)
- 沒有state (useState後有)
- 可用 arrow function
- 沒有this
- 編譯更快 (不用轉class -> es5)
- 閉包 props不會更新

### Hook Life Cycle
- renders -> useLayoutEffect -> before the screen is updated
- componentDidMount()
``` javascript
useEffect(() => {
	console.log('componentDidMount');
},[]);
```
- componentDidUpdate()
``` javascript
useEffect(() => {
	console.log('componentDidUpdate');
},[updateData]);
```
- componentWillUnmount()
``` javascript
useEffect(() => {
	return () => {
		console.log('componentWillUnmount');
	}
});
```
- useLayoutEffect & useRef
[refer]<br /> https://linguinecode.com/post/when-to-use-useref-and-uselayouteffect


## Function Component VS Class Component
1. F 檔案大小 < C 檔案大小
2. 

## React測試
[refer]<br />https://medium.com/hannah-lin/jest-enzyme-1-%E5%B0%B1%E5%BE%9E%E8%A8%88%E6%95%B8%E5%99%A8%E9%96%8B%E5%A7%8B-bd4d7d223f72

## Q&A?
Q: 更改物件某特定值
A: 
``` javascript
const [input, setInput] = setState({
	name: '',
	age: '',
	...
   })

   setInput({
    ...input,
    name: newName
   })
```
Q: 如何宣告變數並修改變數?
A: 
``` javascript
import { useState } from 'react';
   const [data, setData] = useState(0);
```
data 會是 0<br />
改變data直接 setData(data + 1)

Q: 如何使用變數管理?
A:
``` javascript
import { createContext } from 'react';
```
Q: 父層變動如何防止子層渲染?
A: 
``` javascript
import { PureComponent } from 'react';
```
Q: 隱藏子層最外層標籤?
A: 使用 <Fragment> or <></> 

