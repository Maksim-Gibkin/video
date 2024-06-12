import React, { FC } from 'react'
import styles from './Ad.module.scss'
import main from '../../img/main.png'

interface AdProps {
  className?: string
}

const Ad: FC<AdProps> = ({ className }) => {
  return (
    <aside className={`${styles.advertisement} ${className}`}>
      <a href="#" target="_blank" className={styles.link}>
        <img src={main} alt="advertisement" />
      </a>
    </aside>
  )
}

export default Ad
