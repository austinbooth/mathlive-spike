import { useState } from "react"
import Mathfield from "./Mathfield"
function App() {
  const [value, setValue] = useState('')

  return (
    <>
      <div>
        <h1>Mathfield</h1>
        <Mathfield value={value} onChange={setValue} style={{width: '100px', padding: '4px 5px'}} />
        <div>
          <h2>Output</h2>
          <pre>{value}</pre>
        </div>
      </div>
    </>
  )
}

export default App
