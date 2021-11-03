import { FloatingMenu } from '../../components/FloatingMenu'
import styles from './styles.module.scss'

export function Contacts() {
  return (
    <div className={styles.container}>
      <header>
        <FloatingMenu />
      </header>

      <h1>Contatos</h1>

    </div>
  )
}