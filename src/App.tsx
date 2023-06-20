import Mathfield from "./Mathfield"
function App() {

  return (
    <>
      <div>
        <h1>Mathfield</h1>
        {/* <Mathfield
          value="x^2 + y^2 = z^2"
          onChange={(latex) => console.log(latex)}
        /> */}
        <Mathfield />
        <hr />
      </div>
    </>
  )
}

export default App
