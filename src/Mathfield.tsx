import { useEffect, useRef, FC, useCallback } from 'react'
import { MathfieldElement, MathfieldOptions, VirtualKeyboardName, VirtualKeyboardLayout } from 'mathlive'

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
    console.log(window.mathVirtualKeyboard)
    window.mathVirtualKeyboard.layouts = ['minimalist'] as unknown as VirtualKeyboardName[]
    // 'minimalist' isn't in this type even though it's in the docs - https://cortexjs.io/mathlive/guides/virtual-keyboards/
    return () => {
      refValue?.removeEventListener('input', handleInputChange)
    }
 }, [])

  return (
    <math-field ref={mfRef} class={className}>{value}</math-field>
  )
}

export default MathField
