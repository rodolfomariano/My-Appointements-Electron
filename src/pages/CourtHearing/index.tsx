import { FloatingMenu } from '../../components/FloatingMenu'
import styles from './styles.module.scss'

export function CourtHearing() {
  return (
    <div className={styles.container}>
      <header>
        <FloatingMenu />
      </header>

      <h1>Audiência</h1>

    </div>
  )
}