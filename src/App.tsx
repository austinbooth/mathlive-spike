import { useState } from "react"
import Mathfield from "./Mathfield"
function App() {
  const [value, setValue] = useState("x^2 + y^2 = z^2")

  return (
    <>
      <div>
        <h1>Mathfield</h1>
        <Mathfield value={value} onChange={setValue} />
        <div>
          <h2>Output</h2>
          <pre>{value}</pre>
        </div>
      </div>
    </>
  )
}

export default App
