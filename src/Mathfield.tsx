import { useEffect, useState, FC } from 'react'
import { MathfieldElement, MathfieldOptions } from 'mathlive'

export type MathfieldProps = {
  // options?: Partial<MathfieldOptions>;
  value: string;
  onChange: (latex: string) => void;
  className?: string;
}

const MathField: FC<MathfieldProps> = ({ value, onChange, className }) => {
  const [mathField, setMathField] = useState<MathfieldElement>()

  useEffect(() => {
    const mf = new MathfieldElement();
    setMathField(mf);
  }, [])

  useEffect(() => {
    if (mathField) {
      window.addEventListener('input', (e) => {
        onChange((e.target as HTMLInputElement).value)
      })
    }
  }, [mathField])

  return (
    <math-field class={className}>{value}</math-field>
  )
}

export default MathField
