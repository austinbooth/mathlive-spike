import { useEffect, useRef, FC } from 'react'
import { MathfieldElement, MathfieldOptions } from 'mathlive'

export type MathfieldProps = {
  // options?: Partial<MathfieldOptions>;
  value: string;
  onChange: (latex: string) => void;
  className?: string;
}

// The math-field does not work if the next line is commented out.
new MathfieldElement()

const MathField: FC<MathfieldProps> = ({ value, onChange, className }) => {
  const mf = useRef<MathfieldElement>(null)

  useEffect( () => {
    mf.current?.addEventListener('input', () => onChange(mf.current?.value ?? ''))
 }, [])

  return (
    <math-field ref={mf} class={className}>{value}</math-field>
  )
}

export default MathField
