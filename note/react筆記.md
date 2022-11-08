React效能處理
Code-Splitting: https://zh-hant.reactjs.org/docs/code-splitting.html
VirtualizedList: https://reactnative.dev/docs/virtualizedlist

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

## Memo hook
https://www.youtube.com/watch?v=6-BfMpTT2PE

# Q&A?

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