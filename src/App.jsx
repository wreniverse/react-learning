import { useState } from "react"

function App(){
	let [count, setCount] = useState(1)
	return <button onClick={() => {setCount(count + 1)}}>
		{count}
	</button>
}
export default App
