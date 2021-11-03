import { FloatingMenu } from '../../components/FloatingMenu'
import styles from './styles.module.scss'

export function Clients() {
  return (
    <div className={styles.container}>
      <header>
        <FloatingMenu />
      </header>

      <h1>Clientes</h1>

    </div>
  )
}