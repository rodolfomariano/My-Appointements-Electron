
import { FaEllipsisV } from 'react-icons/fa'

import styles from './styles.module.scss'

import { iconColors } from '../../localData/appointments'

interface AppointmentData {
  title: string,
  description: string,
  date: {
    year: number,
    month: number,
    day: number,
    time: {
      initial: number,
      finish: number
    }
    // multi?: {
    //   firstDay?: 20,
    //   lastDay?: 30,
    //   lastMonth?: 11
    // }
  },
  type: string,
  status: string
}

interface AppointmentCardProps {
  type?: 'default' | 'emphasis'
  data: AppointmentData
}



export function AppointmentCard({ type = 'default', data }: AppointmentCardProps) {


  const icon = iconColors.find(item => item.type === data.type)


  return (

    <div className={type === 'default' ? `${styles.container} ${styles.default}` : `${styles.container} ${styles.emphasis}`}>

      <div className={styles.iconContainer} style={{ backgroundColor: icon?.color }}>
        {icon?.icon}
      </div>

      <div className={styles.appointmentData}>
        <div className={styles.aboutAppointment}>
          <h3 className={styles.appointmentTitle}>{data.title}</h3>
          <span className={styles.appointmentDescription}>{data.description.length > 32 ? `${data.description.substr(0, 32)}...` : data.description}</span>
        </div>

        <span className={styles.appointmentTime}>Das {data.date.time.initial}:00 as {data.date.time.finish}:00</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <FaEllipsisV />
        </button>
      </div>
    </div>
  )
}