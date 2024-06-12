import React, { FC } from 'react'
import styles from './Title.module.scss'

interface TitleProps {
  text: string
  className?: string
}

const Title: FC<TitleProps> = ({ text, className }) => (
  <h1 className={`${styles.title} ${className}`}>{text}</h1>
)

export default Title
