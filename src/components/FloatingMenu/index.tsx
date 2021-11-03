import { useState } from 'react'
import { Link } from 'react-router-dom'

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
        <Link to="/">
          <button>
            <IoPieChartSharp style={{ marginRight: '0.5rem' }} />
            Dashboard
          </button>
        </Link>

        <Link to="/appointments">
          <button>
            <IoCalendarSharp style={{ marginRight: '0.5rem' }} />
            Agendamentos
          </button>
        </Link>

        <Link to="/finances">
          <button>
            <IoLogoUsd style={{ marginRight: '0.5rem' }} />
            Finanças
          </button>
        </Link>

        <Link to="/clients">
          <button>
            <FaUserAlt style={{ marginRight: '0.5rem' }} />
            Clientes
          </button>
        </Link>

        <Link to="/court-hearing">
          <button>
            <FaUniversity style={{ marginRight: '0.5rem' }} />
            Audiência
          </button>
        </Link>

        <Link to="/contacts">
          <button>
            <FaAddressBook style={{ marginRight: '0.5rem' }} />
            Contatos
          </button>
        </Link>

        <Link to="/access-control">
          <button>
            <FaUserShield style={{ marginRight: '0.5rem' }} />
            Controle de acesso
          </button>
        </Link>

      </section>
    </div>
  )
}