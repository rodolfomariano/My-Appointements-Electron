import { useState } from 'react'

import { FaSearch } from 'react-icons/fa'

import styles from './styles.module.scss'

export function FindAction() {
  const [toFind, setToFind] = useState('')

  return (
    <>
      <section className={styles.container}>
        <input
          type="text"
          placeholder="Buscar"
          onChange={event => setToFind(event.target.value)}
          value={toFind}
        />
        <button>
          <FaSearch size={16} />
        </button>

        <div
          className={toFind !== ''
            ? `${styles.foundContainer} ${styles.visibleSearchResults}`
            : `${styles.foundContainer} ${styles.hiddenSearchResults}`
          }
        >
          <p>
            Buscando por: <strong>{toFind}</strong>
          </p>
        </div>
      </section>

      <div
        className={toFind !== ''
          ? `${styles.searchBackground} ${styles.searchVisibleBackground}`
          : `${styles.searchBackground} ${styles.searchHiddenBackground}`
        }
        onClick={() => setToFind('')}
      />
    </>
  )
}