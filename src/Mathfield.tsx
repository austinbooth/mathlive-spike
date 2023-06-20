import { useEffect, useRef } from 'react'
import { MathfieldElement } from 'mathlive'

const mfe = new MathfieldElement()

const MathField = () => {
  const mathFieldRef = useRef<MathfieldElement>(null)

  useEffect(() => {
    if (!mathFieldRef.current) {
      (mathFieldRef.current as any).setOptions({
        // whatever
      })
    }
  }, [])

  return (
    <math-field ref={mathFieldRef}>3\times10^7</math-field>
  )
}

export default MathField
