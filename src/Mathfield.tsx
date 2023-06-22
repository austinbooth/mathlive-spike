import { useEffect, useRef, FC, useCallback, CSSProperties } from 'react'
import { MathfieldElement, MathfieldOptions } from 'mathlive'

export type MathfieldProps = {
  // options?: Partial<MathfieldOptions>;
  value: string;
  onChange: (latex: string) => void;
  style?: CSSProperties;
}

// The math-field does not work if the next line is commented out.
new MathfieldElement()

const MathField: FC<MathfieldProps> = ({ value, onChange, style }) => {
  const mfRef = useRef<MathfieldElement>(null)

  const handleInputChange = useCallback(() => onChange(mfRef.current?.value ?? ''), [onChange])

  useEffect(() => {
    const refValue = mfRef.current
    refValue?.addEventListener('input', handleInputChange)
    window.mathVirtualKeyboard.layouts = {
      rows: [
        [
          "+", "-", "\\times", "\\frac{#@}{#?}", "\\times10^{#?}", "#@^{#?}",
          "(", ")", "\\sqrt{#0}", "[backspace]",
        ],
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      ]
    }
    return () => {
      refValue?.removeEventListener('input', handleInputChange)
    }
  }, [])

  return (
    <math-field ref={mfRef} style={style}>{value}</math-field>
  )
}

export default MathField
