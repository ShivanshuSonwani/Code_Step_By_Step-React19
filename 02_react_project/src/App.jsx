function App() {
  return (
    <div>
      <h1>First Component</h1>

      {/* <Fruit></Fruit> */}
      <Fruit />

      <Colors />
    </div>
  )
}

function Fruit() {
  return (
    <h1>Apple</h1>
  )
}
function Colors() {
  return (
    <h1>Red color</h1>
  )
}

export default App;