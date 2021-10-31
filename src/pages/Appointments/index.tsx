
import { FindAction } from '../../components/FindAction'
import { FloatingMenu } from '../../components/FloatingMenu'
import { SimpleButton } from '../../components/SimpleButton'
import styles from './styles.module.scss'

export function Appointments() {
  return (
    <main className={styles.container}>
      <section className={styles.calendar_container}>
        <header>
          <div className={styles.leftContainer}>
            <FloatingMenu />
            <SimpleButton />
          </div>

          <div className={styles.findAppointmentContainer}>
            <FindAction />
          </div>
        </header>
      </section>

      <section className={styles.appointments_container}>
        <h2>Agendamentos</h2>
      </section>
    </main>
  )
}