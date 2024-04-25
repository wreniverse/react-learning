function Message({msg}) {
  return <p>{msg}</p>
}

function App() {
  return (
    <div>
      <Message msg="Hello, world!"/>
      <Message msg="Goodbye, world!"/>
      <Message msg="Testing"/>
    </div>
  )
}

export default App
