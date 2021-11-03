import { FloatingMenu } from '../../components/FloatingMenu'
import styles from './styles.module.scss'

export function AccessControl() {
  return (
    <div className={styles.container}>
      <header>
        <FloatingMenu />
      </header>

      <h1>Controle de Acesso</h1>

    </div>
  )
}