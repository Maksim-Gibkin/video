import React, { FC } from 'react'
import styles from './VideoItem.module.scss'

interface VideoItemProps {
  description: string
  detail: string
  image: string
  text: string
  title: string
}

const VideoItem: FC<VideoItemProps> = ({ description, image, text, title }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={image} alt="" />
      <div className={styles.info}>
        <p className={styles.name}>{title}</p>
        <p className={styles.date}>{description}</p>
      </div>
    </div>
  )
}

export default VideoItem
