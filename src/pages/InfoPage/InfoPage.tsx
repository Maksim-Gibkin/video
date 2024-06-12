import React, { useEffect, useState } from 'react'
import styles from './InfooPage.module.scss'
import global from '../../shared/style/global.module.scss'
import Title from '../../shared/components/Title/Title'
import Ad from '../../shared/components/Ad/Ad'
import info from '../../shared/img/Info.png'
import Button from '../../shared/components/Button/Button'
import Input from '../../shared/components/Input/Input'
import { Form, useParams } from 'react-router-dom'
import FormBlock from './components/FormBlock/FormBlock'
import {
  Comment,
  createComment,
  CurrentData,
  DataList,
  getCurrentVideo,
  getListComment,
  getListVideo,
} from '../../api'

export const CircleIco = () => {
  return (
    <svg
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill="#747587" />
    </svg>
  )
}

export const LogoIco = () => {
  return (
    <svg
      width="79"
      height="17"
      viewBox="0 0 79 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.3528 8.4997C28.3528 5.71878 29.7758 3.49414 32.3418 3.49414C34.9084 3.49414 36.3308 5.71878 36.3308 8.4997C36.3308 11.2811 34.9079 13.5053 32.3423 13.5053C29.7758 13.5053 28.3528 11.2811 28.3528 8.4997ZM32.3418 12.1169C33.3399 12.1169 33.7648 10.4481 33.7648 8.50347C33.7648 6.55792 33.3366 4.89003 32.3418 4.89003C31.3471 4.89003 30.9189 6.55839 30.9189 8.50347C30.9155 10.4481 31.3437 12.1169 32.3418 12.1169ZM1.8512 3.63581V6.27836H1.99282L3.84402 3.63581H6.40671L2.98755 6.69297L3.12917 6.83133L9.39811 3.6325V5.85714L3.84065 7.80222V7.94011L9.39811 7.45467V9.54142L3.84065 9.05597V9.19434L9.39811 11.1389V13.3641L3.12917 10.1648L2.98755 10.3031L6.40671 13.3603H3.84402L1.99282 10.7177H1.8512V13.3603H0V3.6292H1.8512V3.63581ZM11.1144 3.63581H13.536L13.3944 9.47389H13.536L16.3853 3.63581H18.5231V13.3674H16.102L16.2437 7.52881H16.102L13.2518 13.3678H11.114V3.63581H11.1144ZM22.6537 3.63581H20.2327V13.3674H22.6537V9.05597H24.6466V13.3674H27.0676V3.63581H24.6466V7.39092H22.6537V3.63581ZM44.451 3.63581H37.6156V13.3674H40.0371V5.30417H42.0299V13.3674H44.451V3.63581ZM45.7323 8.4997C45.7323 5.71878 47.1553 3.49414 49.7218 3.49414C52.2845 3.49414 53.7108 5.71878 53.7108 8.4997C53.7108 11.2811 52.2879 13.5053 49.7218 13.5053C47.1591 13.5053 45.7323 11.2811 45.7323 8.4997ZM49.7218 12.1169C50.7199 12.1169 51.1448 10.4481 51.1448 8.50347C51.1448 6.55792 50.7166 4.89003 49.7218 4.89003C48.7237 4.89003 48.2989 6.55839 48.2989 8.50347C48.2989 10.4481 48.7237 12.1169 49.7218 12.1169ZM57.4132 3.63581H54.9922V13.3674H57.13L59.9798 7.52881H60.1214L59.9798 13.3674H62.4008V3.63581H60.263L57.4132 9.47389H57.2716L57.4132 3.63581ZM68.8148 10.0302L71.0942 10.3064C70.666 12.252 69.6713 13.5053 67.5469 13.5053C64.9842 13.5053 63.6856 11.2811 63.6856 8.4997C63.6856 5.71878 64.9809 3.49414 67.5469 3.49414C69.6265 3.49414 70.666 4.74506 71.0942 6.55178L68.8148 7.10758C68.6732 6.13339 68.2584 4.88342 67.5469 4.88342C66.6938 4.88342 66.2516 6.55178 66.2516 8.49639C66.2516 10.4278 66.6938 12.1098 67.5469 12.1098C68.2449 12.1169 68.6693 11.0044 68.8148 10.0302ZM74.5134 3.63628H72.2339V13.3674H74.5134V9.05597H74.655L76.3646 13.3674H79L76.5062 8.36181L78.9273 3.63581H76.5062L74.655 7.9472H74.5134V3.63581V3.63628Z"
        fill="#747587"
      />
    </svg>
  )
}

export const SaveIco = () => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 3C1 1.89543 1.89543 1 3 1H13.1176C14.2222 1 15.1176 1.89543 15.1176 3V17.1324C15.1176 18.7556 13.2861 19.7027 11.9616 18.7645L9.21486 16.8189C8.52224 16.3283 7.5954 16.3283 6.90279 16.8189L4.15604 18.7645C2.83152 19.7027 1 18.7556 1 17.1324V3Z"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export const FavIco = () => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0715 1.73469C17.2656 1.27255 16.3348 1 15.3473 1C13.5993 1 12.0329 1.82949 11 3.13298C9.95573 1.82949 8.38933 1 6.64132 1C5.6538 1 4.72304 1.27255 3.91714 1.73469C2.18048 2.74194 1 4.67347 1 6.90125C1 7.54115 1.10216 8.14549 1.28377 8.71429C2.24858 13.2646 11 19 11 19C11 19 19.7401 13.2646 20.7162 8.71429C20.8978 8.14549 21 7.5293 21 6.90125C20.9886 4.67347 19.8082 2.74194 18.0715 1.73469Z"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export const ShareIco = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3636 2C11.3636 1.5853 11.6196 1.21363 12.007 1.06575C12.3945 0.91786 12.833 1.02445 13.1093 1.33367L20.7457 9.87912C21.0848 10.2586 21.0848 10.8323 20.7457 11.2118L13.1093 19.7572C12.833 20.0665 12.3945 20.173 12.007 20.0252C11.6196 19.8773 11.3636 19.5056 11.3636 19.0909L11.3636 15.0804C11.1692 15.0768 10.98 15.0726 10.7961 15.0685C10.3061 15.0576 9.85884 15.0476 9.43237 15.0497C8.58022 15.0538 7.86307 15.1064 7.18736 15.2765C5.88994 15.6032 4.56121 16.4101 2.77937 18.6266C2.51356 18.9572 2.06803 19.0841 1.66787 18.9432C1.2677 18.8023 0.999999 18.4242 0.999999 18C0.999999 14.55 2.1446 11.5449 4.16965 9.39405C5.9912 7.45936 8.482 6.26307 11.3636 6.03855L11.3636 2Z"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const PlayIco = () => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.3519 15.7524C1.36679 16.2858 0 15.9529 0 14.7971V1.25792C0 0.146661 1.45635 -0.331171 2.3519 0.246682L13.4394 7C14.1869 7.33333 14.1869 8.66667 13.4394 9L2.3519 15.7524Z"
        fill="white"
      />
    </svg>
  )
}

const InfoPage = () => {
  const [dataVideo, setData] = useState<CurrentData | null>(null)
  const [commentsVideo, setCommentsVideo] = useState<Comment | null>(null)

  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const result = await getCurrentVideo(parseInt(id))
        const comments = await getListComment(parseInt(id))
        setData(result)
        setCommentsVideo(comments)
      }
    }

    getData()
  }, [id])

  const submitComment = async (data: {
    author: string
    description: string
    comment: string
  }) => {
    if (id) {
      await createComment(parseInt(id), data)

      const comments = await getListComment(parseInt(id))

      setCommentsVideo(comments)
    }
  }

  return (
    <div className={styles.infoPage}>
      <div className={global.wrapper}>
        <Title text={'выбранное видео'} />
        <div className={`${global.gridContainer} ${styles.grid}`}>
          <div className={styles.pageContainer}>
            <div className={styles.info}>
              <div className={styles.img}>
                <img src={dataVideo?.image} alt="Фото видео" />
              </div>
              <div className={styles.paramBlock}>
                <div className={styles.infoBlock}>
                  <h2 className={styles.name}>{dataVideo?.title}</h2>
                  <div className={styles.labelBlock}>
                    {dataVideo?.labels.fullhd && (
                      <span className={styles.labelInfo}>Full HD</span>
                    )}
                    {dataVideo?.labels.subtitles && (
                      <span className={styles.labelInfo}>СУБ</span>
                    )}
                    <span className={styles.labelInfo}>
                      {dataVideo?.labels.age_restrictions}
                    </span>
                  </div>
                  <div className={styles.otherInfo}>
                    <span className={styles.year}>
                      {dataVideo?.production.year}
                    </span>
                    <CircleIco />
                    {dataVideo?.genre.map((el, i) => (
                      <span key={i}>
                        <span className={styles.genre}>{el}</span>
                        <CircleIco />
                      </span>
                    ))}
                    <span className={styles.country}>
                      {dataVideo?.production.country}
                    </span>
                  </div>
                  <div className={styles.versionBlock}>
                    <LogoIco />
                    <span>7.1</span>
                  </div>
                </div>
                <div className={styles.actionBlock}>
                  <Button className={styles.defaultView}>
                    <span>смотреть</span>
                    <span className={styles.description}>
                      осталось смотреть 7 дней
                    </span>
                  </Button>
                  <Button className={styles.primeView}>
                    СМОТРЕТЬ за 1 ₽ без рекламы
                  </Button>
                </div>
                <div className={styles.addBtn}>
                  <Button className={styles.trailer}>
                    <div className={styles.flex}>
                      <PlayIco />
                      <span>трейлер</span>
                    </div>
                  </Button>
                  <Button className={styles.save}>
                    <SaveIco />
                  </Button>
                  <Button className={styles.fav}>
                    <FavIco />
                  </Button>
                  <Button className={styles.share}>
                    <ShareIco />
                  </Button>
                </div>
              </div>
            </div>
            {commentsVideo?.comments.map((c) => (
              <div className={styles.commentsBlock} key={c.id}>
                <h3 className={styles.name}>{c.author}</h3>
                <p className={styles.role}>{c.description}</p>
                <p className={styles.comment}>{c.comment}</p>
              </div>
            ))}

            <div>
              <Title
                text={'ОСТАВЬТЕ КОММЕНТАРИЙ'}
                className={styles.titleFormBlock}
              />
              <p className={styles.subtitleFormBlock}>
                Что вы думаете об этом видео?
              </p>
            </div>
            <div className={styles.formBlock}>
              <FormBlock onSubmit={submitComment} />
            </div>
          </div>
          <Ad className={styles.ad} />
        </div>
      </div>
    </div>
  )
}

export default InfoPage
