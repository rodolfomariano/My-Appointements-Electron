import { FloatingMenu } from '../../components/FloatingMenu'
import styles from './styles.module.scss'

export function Dashboard() {
  return (
    <div className={styles.container}>
      <header>
        <FloatingMenu />
      </header>

      <h1>Dashboard</h1>

    </div>
  )
}