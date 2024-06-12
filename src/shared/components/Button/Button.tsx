import React, { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  className?: string
  children: ReactNode
  type?: 'submit' | 'reset' | 'button'
}

const Button: FC<ButtonProps> = ({ className, children, type }) => (
  <button type={type} className={`${styles.btn} ${className}`}>
    {children}
  </button>
)

export default Button
