import React, { FC } from 'react'
import styles from './Paginator.module.scss'
import { IcoEllipse } from '../../../../shared/IcoEllipse'
import { IcoArrow } from '../../../../shared/IcoArrow'

interface PaginatorProps {}

const Paginator: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dotContainer}>
        {[1, 2, 3, 4, 5].map((el) => {
          switch (el) {
            case 3:
              return <span className={styles.center} key={el}></span>
            default:
              return <IcoEllipse key={el} />
          }
        })}
      </div>
      <div className={styles.navigator}>
        <button className={`${styles.btn} ${styles.prev}`}>
          <IcoArrow />
        </button>
        <button className={`${styles.btn} ${styles.next}`}>
          {' '}
          <IcoArrow />
        </button>
      </div>
    </div>
  )
}

export default Paginator
