import { FloatingMenu } from '../../components/FloatingMenu'
import styles from './styles.module.scss'

export function Finances() {
  return (
    <div className={styles.container}>
      <header>
        <FloatingMenu />
      </header>

      <h1>Finanças</h1>

    </div>
  )
}