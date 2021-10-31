
import { FaBookReader, FaEllipsisV } from 'react-icons/fa'

import styles from './styles.module.scss'

interface AppointmentCardProps {
  type?: 'default' | 'emphasis'
}

export function AppointmentCard({ type = 'default' }: AppointmentCardProps) {


  return (

    <div className={type === 'default' ? `${styles.container} ${styles.default}` : `${styles.container} ${styles.emphasis}`}>
      <div className={styles.iconContainer}>
        <FaBookReader />
      </div>

      <div className={styles.appointmentData}>
        <div className={styles.aboutAppointment}>
          <h3 className={styles.appointmentTitle}>Estudo</h3>
          <span className={styles.appointmentDescription}>Faculdade</span>
        </div>

        <span className={styles.appointmentTime}>10:30 - 12:30</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <FaEllipsisV />
        </button>
      </div>
    </div>
  )
}