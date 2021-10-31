
import { FiPlus } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SimpleButton() {
  return (
    <button className={styles.container}>
      Novo
      <FiPlus style={{ marginLeft: '.5rem' }} />
    </button>
  )
}