## Hook
1. useRef() > 不re-render狀態下更新值
https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-useref-c628cbf0d7fb
2. useMemo() > 物件宣告記憶體處理
https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/react-optimize-performance-using-memo-usecallback-usememo-a76b6b272df3

## React 教學課程

# Setup React project step by step
https://www.youtube.com/watch?v=EUM78cxo0i8&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=3

# Zero-why react (react & react-dom(for web))
ReactDOM: https://www.youtube.com/watch?v=OFHAIpw2oZI&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=6
JSX: https://www.youtube.com/watch?v=BS9g6Z3lbBU&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=8
0-1. ReactDOM.render(React.creatElement('h1', {style: {color: 'red'}}, 'HELLO'), document.querySelector('#app'));
0-2. JSX -> babel -> React.creatElement...

# First-basic
https://www.youtube.com/watch?v=dGcsHMXbSOA&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE
1. 建立function component
2. return <></>
3. export default function component
4. <div className />
5. useState
6. props
7. map(data =>())

# Second-get api data
https://www.youtube.com/watch?v=U9T6YkEDkMo&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=2
8. useEffect
9. import style from './xxx.css'
10. input onChange()
11. e.target.value & e.preventDefault();
12. fetch async await promise 

# Third-router 
https://www.youtube.com/watch?v=Law7wfdg_ls&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=3
13. react-router-dom
  a. browserRouter 包住所有component 
  b. route  <Route path="/home" component={home}>
  c. switch 只顯示一個 route 內容
  d. exact <Route path="/home" exact component={home}> path完全正確才顯示
  e. link <Link to="/home">Home</Link>
14. match >> function child({match}) {}; 取得router資訊

# Fourth-state management 
https://www.youtube.com/watch?v=35lXWvCuM8o&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=4
15. context api > contextFile > import createContext > export provider > useContext
16. 用到 context的地方都會rerender

# Fifth- redux(vuex) 狀態管理 redux react-redux(hook) | Redux DevTools(chrome plugin) 
https://www.youtube.com/watch?v=CVpUuw9XSjY&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=5
17. ACTION(action) 宣告要做的事情
18. REDUCER(call action & called by dispatch) 
    | a.宣告state b.使用action選擇(switch)
19. DISPATCH(dispatch)
20. create [actions folder] && [reducers folder]
a.創建一個[allReducers file]引入所有reducer
b.創建action index.js 放要被呼叫的事情 ex: type: 'INCREMENT'...
21. in component
a.import { createStore } from 'redux';
b.import allReducer from './reducers/index.js'
c.import { Provider } from 'react-redux';
d.const appStore = createStore(allReducer); | store.subscribe(查看store狀態改變)
e.[main.js]<Provider store={appStore}><app/></Provider>
f.[app.js] useSelector(取得state), useDispatch(呼叫action) -> react-redux
  import { function } from './actions/index.js';

# 建立一個fetch function (最後一段影片)
https://www.youtube.com/watch?v=GGo3MVBFr1A

# TypeScript
https://www.youtube.com/watch?v=jrKcJxF0lAU
1. State: const [note, setNote] = setState<number | string>(''); 
2. State Interface for array[{object}]: 24:10
	interface IState {
		people: {
			name: string
			age: number
			...
		}[]
	}
	const [people, setPeople] = setState<IState['people']>([])
3. Props: 30:20
   - child component -
   interface IProps {
		people: {
			name: string
			age: number
			...
		}[]
	}

	A. const List = (propsL iProps) => {}

	B. const List: React.FC<IProps> = ({ people }) => {}
4. Function: 39:38
   const renderList = (): JSX.Element[] => {
    return people.map((person) => {
 		return (
 			<li>
 				....
 			</li>
 		)
	})
   }
   *** 如果沒有要 return 東西 (void)
   const handleClick = (): void => {}
5. Event: 50:40

6. 不重複定義 interface 可以父層 export 子層 import: 55:43

7. 定義 const [people, setPeople] 到子層: 58:18


# React效能處理
Code-Splitting: https://zh-hant.reactjs.org/docs/code-splitting.html
VirtualizedList: https://reactnative.dev/docs/virtualizedlist

# React物件宣告錯誤處理
https://www.youtube.com/watch?v=Fhu5cu864ag

Create-react-app
Need:
node.js version v15 up

### React Life Cycle
https://www.w3schools.com/react/react_lifecycle.asp

- elements into the DOM
// setup initial state
1. constructor(props)
// before rendering the element in the DOM
// place to set state object based on the initial props
// takes state as argument, and return an new changed state
2. getDerivedStateFormProps(props, state)
// require output HTML to the DOM
3. render() 
// run after component is rendered
// run statement that component is already placed in the DOM
4. componentDidMount()

- update
// place to set state object based on the initial props
1. getDerivedStateFromProps(props, state)
// return Boolean that want to update or not
2. shouldComponentUpdate()
// require output HTML to the DOM
3. render()
// can get before changing value
4. getSnapshotBeforeUpdate(prevProps, prevState)
// is called after the component is updated in the DOM
// can get changed value
5. componentDidUpdate()

- unmounting
// about to be removed from the DOM
1. componentWillUnmount()

## Class Component
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
useEffect(() => {
	console.log('componentDidMount');
},[]);

- componentDidUpdate()
useEffect(() => {
	console.log('componentDidUpdate');
},[updateData]);

- componentWillUnmount()
useEffect(() => {
	return () => {
		console.log('componentWillUnmount');
	}
});

- 
useLayoutEffect & useRef
refer: https://linguinecode.com/post/when-to-use-useref-and-uselayouteffect


## Function Component VS Class Component
1. F 檔案大小 < C 檔案大小
2. 

## React測試
https://medium.com/hannah-lin/jest-enzyme-1-%E5%B0%B1%E5%BE%9E%E8%A8%88%E6%95%B8%E5%99%A8%E9%96%8B%E5%A7%8B-bd4d7d223f72

# Q&A?
Q: 更改物件某特定值?
A: const [input, setInput] = setState({
	name: '',
	age: '',
	...
   })

   setInput({
    ...input,
    name: newName
   })

Q: 如何宣告變數並修改變數?
A: import { useState } from 'react';
   const [data, setData] = useState(0);
   data 會是 0
   改變data直接 setData(data + 1)

Q: 如何使用變數管理?
A: import { createContext } from 'react';

Q: 父層變動如何防止子層渲染?
A: import { PureComponent } from 'react';

Q: 隱藏子層最外層標籤?
A: 使用 <Fragment> or <></> 

