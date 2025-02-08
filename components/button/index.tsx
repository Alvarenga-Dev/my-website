'use client'
import { tv } from 'tailwind-variants'

interface ButtonProps {
  color: 'primary' | 'secondary'
  text: string
  onClick: () => void
}

const button = tv({
  base: 'font-medium px-4 py-3 rounded-lg cursor-pointer transition ease-in-out duration-300',
  variants: {
    color: {
      primary: 'bg-primary text-white',
      secondary:
        'bg-background-primary text-white border border-white hover:bg-white hover:text-background-primary'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})
const Button: React.FC<ButtonProps> = ({ color, text, onClick }) => {
  return <button onClick={() => onClick()} className={button({ color })}>{text}</button>
}

export default Button
