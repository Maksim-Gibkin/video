import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import styles from './FormBlock.module.scss'
import Input from '../../../../shared/components/Input/Input'
import Button from '../../../../shared/components/Button/Button'
import { createComment, getCurrentVideo } from '../../../../api'
import { useParams } from 'react-router-dom'

interface FormBlockProps {
  onSubmit: (data: {
    author: string
    description: string
    comment: string
  }) => void
}

interface FormState {
  [key: string]: { value: string; isValid?: boolean }
}

const FormBlock: FC<FormBlockProps> = ({ onSubmit }) => {
  const { id } = useParams()

  const [formState, setFormState] = useState<FormState>({
    author: { value: '', isValid: true },
    city: { value: '', isValid: true },
    comment: { value: '' },
  })

  const [btnState, setBtnState] = useState({
    isDone: false,
    isError: false,
    isDefault: true,
  })

  const reqArray = Object.keys(formState).reduce((acc: string[], key) => {
    if (formState[key].hasOwnProperty('isValid')) {
      acc.push(key)
    }
    return acc
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, required } = event.target
    setBtnState({ isError: false, isDefault: true, isDone: false })

    if (!value.trim()) {
      setFormState((prevState) => ({
        ...prevState,
        [name]: { value: '', isValid: false },
      }))
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: { value: value, isValid: true },
      }))
    }
  }

  const catchInvalid = () => {
    setFormState((prevState) => {
      reqArray.forEach((key) => {
        if (prevState[key].value.trim() === '') {
          prevState[key].isValid = false
        }
      })
      return { ...prevState }
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!reqArray.map((k) => formState[k].value).every((e) => Boolean(e))) {
      catchInvalid()

      setBtnState((prevState) => ({
        ...prevState,
        isError: true,
        isDefault: false,
      }))
      return
    }
    onSubmit({
      author: formState.author.value,
      comment: formState.comment.value,
      description: formState.city.value,
    })

    setBtnState({ isError: false, isDefault: false, isDone: true })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label={
          <p>
            Фамилия и имя <span className={styles.star}>*</span>
          </p>
        }
        className={!formState.author.isValid && styles.invalidInput}
        classNameLabel={!formState.author.isValid && styles.invalidLabel}
        name="author"
        value={formState.author.value}
        onChange={handleChange}
      />
      <Input
        label={
          <p>
            Город <span className={styles.star}>*</span>
          </p>
        }
        classNameLabel={!formState.city.isValid && styles.invalidLabel}
        className={!formState.city.isValid && styles.invalidInput}
        name="city"
        value={formState.city.value}
        onChange={handleChange}
      />

      <Input
        label={'Ваше мнение'}
        name="comment"
        value={formState.comment.value}
        onChange={handleChange}
      />

      {btnState.isDefault && (
        <Button type="submit" className={styles.submitBtn}>
          отправить
        </Button>
      )}
      {btnState.isError && (
        <Button type="submit" className={`${styles.submitBtn} ${styles.error}`}>
          произошла ошибка
        </Button>
      )}
      {btnState.isDone && (
        <Button type="submit" className={`${styles.submitBtn} ${styles.done}`}>
          успешно
        </Button>
      )}
    </form>
  )
}

export default FormBlock
