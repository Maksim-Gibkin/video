import React, { ChangeEvent, FC, FormEvent, ReactNode } from 'react'
import styles from './Input.module.scss'

interface InputProps {
  className?: string
  classNameLabel?: string
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
  value: string
  name: string
  required?: boolean
  label: ReactNode
}

const Input: FC<InputProps> = ({
  className,
  label,
  classNameLabel,
  onChange,
  value,
  name,
  required = false,
}) => (
  <label className={`${styles.label} ${classNameLabel}`}>
    {label}
    <input
      className={`${styles.input} ${className}`}
      onChange={onChange}
      name={name}
      value={value}
      required={required}
    />
  </label>
)
export default Input
