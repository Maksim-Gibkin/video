import React, { useEffect, useState } from 'react'
import styles from './VideoPage.module.scss'
import global from '../../shared/style/global.module.scss'
import VideoItem from './components/VideoItem/VideoItem'
import { DataList, getCurrentVideo, getListVideo } from '../../api'
import Paginator from './components/Paginator/Paginator'
import Ad from '../../shared/components/Ad/Ad'
import Title from '../../shared/components/Title/Title'
import { Link } from 'react-router-dom'

function VideoPage() {
  const [listVideo, setList] = useState<DataList[]>([])

  useEffect(() => {
    const getData = async () => {
      const result = await getListVideo() // Вызываем функцию для выполнения запроса
      setList(result)
    }

    getData()
  }, [])

  return (
    <div className={styles.videoPage}>
      <div className={global.wrapper}>
        <Title text={'Наши видео'} />
        <div className={global.gridContainer}>
          {listVideo.length ? (
            <ul className={styles.videoList}>
              {listVideo.slice(0, 6).map((el, i) => (
                <li className={styles.item} key={el.id}>
                  <Link to={`/item/${el.id}`}>
                    <VideoItem
                      title={el.title}
                      description={el.description}
                      image={el.image}
                      detail={el.detail}
                      text={el.text}
                    />
                  </Link>
                </li>
              ))}
              <div className={styles.paginatorBlock}>
                <Paginator />
              </div>
            </ul>
          ) : (
            <h2 className={styles.videoList}>Повторите позже, ошибка</h2>
          )}

          <Ad />
        </div>
      </div>
    </div>
  )
}

export default VideoPage
