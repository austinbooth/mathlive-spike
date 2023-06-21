import { useEffect, useRef, FC, useCallback } from 'react'
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
  const mfRef = useRef<MathfieldElement>(null)

  const handleInputChange = useCallback(() => onChange(mfRef.current?.value ?? ''), [onChange])

  useEffect( () => {
    const refValue = mfRef.current
    refValue?.addEventListener('input', handleInputChange)

    return () => {
      refValue?.removeEventListener('input', handleInputChange)
    }
 }, [])

  return (
    <math-field ref={mfRef} class={className}>{value}</math-field>
  )
}

export default MathField
