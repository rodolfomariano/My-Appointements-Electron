
import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { ModalNewAppointment } from '../ModalNewAppointment'

import styles from './styles.module.scss'


export function SimpleButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <button className={styles.container} onClick={handleOpenModal}>
        Novo
        <FiPlus style={{ marginLeft: '.5rem' }} />
      </button>

      {isModalOpen &&
        <>
          <ModalNewAppointment closeModal={handleOpenModal} />
          <div className={styles.modalBackground} onClick={handleOpenModal} />
        </>
      }
    </>
  )
}