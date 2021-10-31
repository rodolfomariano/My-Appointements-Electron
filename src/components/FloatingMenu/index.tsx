import { useState } from 'react'

import { FiMenu, FiX } from 'react-icons/fi'

import {
  FaUserAlt,
  FaUserShield,
  FaAddressBook,
  FaUniversity,
} from 'react-icons/fa'

import { IoPieChartSharp, IoLogoUsd, IoCalendarSharp } from 'react-icons/io5'

import styles from './styles.module.scss'

export function FloatingMenu() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  function handleToggleMenuVisibility() {
    setMenuIsVisible(!menuIsVisible)
  }

  return (
    <div
      className={styles.container}
      onClick={handleToggleMenuVisibility}
    >
      <button className={styles.button_container}>
        {menuIsVisible ? <FiX /> : <FiMenu />}

      </button>

      <section className={menuIsVisible ? `${styles.button_options} ${styles.visible}` : `${styles.button_options} ${styles.hidden}`}>
        <button>
          <IoPieChartSharp style={{ marginRight: '0.5rem' }} />
          Dashboard
        </button>

        <button>
          <IoCalendarSharp style={{ marginRight: '0.5rem' }} />
          Agendamentos
        </button>

        <button>
          <IoLogoUsd style={{ marginRight: '0.5rem' }} />
          Finanças
        </button>

        <button>
          <FaUserAlt style={{ marginRight: '0.5rem' }} />
          Clientes
        </button>

        <button>
          <FaUniversity style={{ marginRight: '0.5rem' }} />
          Audiência
        </button>

        <button>
          <FaAddressBook style={{ marginRight: '0.5rem' }} />
          Contatos
        </button>

        <button>
          <FaUserShield style={{ marginRight: '0.5rem' }} />
          Controle de acesso
        </button>

      </section>
    </div>
  )
}