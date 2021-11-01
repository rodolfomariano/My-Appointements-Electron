import { useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import styles from './styles.module.scss'

import { FindAction } from '../../components/FindAction'
import { FloatingMenu } from '../../components/FloatingMenu'
import { SimpleButton } from '../../components/SimpleButton'
import { AppointmentCard } from '../../components/AppointmentCard'

import { data } from '../../utils/dayAndMonths'

interface AppointmentOfDayProps {
  day: number,
  dayFormatted: string
  month: number,
  monthFormatted: string
  year: number
}

export function Appointments() {
  const today = new Date()

  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [appointmentOfDay, setAppointmentOfDay] = useState({} as AppointmentOfDayProps)

  const currentDay = today.getDate()

  let currentMonthFormatted = ''
  let todayMonthFormatted = ''
  let currentDayFormatted = ''
  let daysOfMonth = []

  const { weekDays, months } = data

  months.find(month => month.key === currentMonth && (currentMonthFormatted = month.title))
  months.find(month => month.key === today.getMonth() && (todayMonthFormatted = month.title))

  const currentDayString = String(currentDay)
  currentDayString.length === 1 ? currentDayFormatted = `0${currentDayString}` : currentDayFormatted = currentDayString


  const dayOfMonth = new Date(currentYear, currentMonth, 1)
  let contDate = 0
  let dayKey = 0

  while (dayOfMonth.getMonth() === currentMonth) {
    const dayInWeek = dayOfMonth.getDay()
    dayKey++

    if (dayOfMonth.getDate() === 1 && dayInWeek > 0) {

      while (contDate < dayInWeek) {
        contDate++
        daysOfMonth.push({
          dayKey: dayKey++,
          day: null,
          dayOfWeek: dayInWeek
        })
      }
    }

    daysOfMonth.push({
      dayKey,
      fullDate: new Date(currentYear, currentMonth, contDate++),
      day: dayOfMonth.getDate(),
      dayOfWeek: dayInWeek
    })

    dayOfMonth.setDate(dayOfMonth.getDate() + 1)

  }

  function handleAlterMonth(type: 'increment' | 'decrement') {
    type === 'increment' && setCurrentMonth(currentMonth + 1)
    type === 'decrement' && setCurrentMonth(currentMonth - 1)

    if (type === 'increment' && currentMonth === 11) {
      setCurrentYear(currentYear + 1)
      setCurrentMonth(0)
    }

    if (type === 'decrement' && currentMonth === 0) {
      setCurrentYear(currentYear - 1)
      setCurrentMonth(11)
    }
  }

  function handleAlterAppointmentsDay(day: number) {
    const dayString = String(day)

    const data = {
      day,
      dayFormatted: dayString.length === 1 ? `0${day}` : String(day),
      month: currentMonth,
      monthFormatted: currentMonthFormatted,
      year: currentYear
    }

    setAppointmentOfDay(data)
  }

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

        <main className={styles.content}>
          <header className={styles.selectMonthContainer}>
            <div>
              {currentMonth === today.getMonth() && currentYear === today.getFullYear()
                ? ''
                : <button className={styles.previousMonth} onClick={() => handleAlterMonth('decrement')}>
                  <FiChevronLeft />
                </button>
              }
              <span className={styles.monthTitle}>{currentMonthFormatted} de {currentYear}</span>
              <button className={styles.nextMonth} onClick={() => handleAlterMonth('increment')}>
                <FiChevronRight />
              </button>
            </div>
          </header>

          <section className={styles.monthContainer}>
            <div className={styles.monthContent}>
              <header className={styles.weekDayContainer}>
                {
                  weekDays.map(day => (
                    <strong
                      key={day.key}
                      className={day.key === 0 || day.key === 6
                        ? `${styles.dayTitle} ${styles.weekend}`
                        : styles.dayTitle
                      }>
                      {day.short}
                    </strong>

                  ))
                }
              </header>

              <main className={styles.dayContainer}>

                {daysOfMonth.map((day) => (
                  day.day === null
                    ? <div key={day.dayKey}></div>
                    : <button
                      key={day.dayKey}
                      className={`
                        ${styles.dayButton} 
                        ${day.dayOfWeek === 0 && styles.isWeekend} ${day.dayOfWeek === 6 && styles.isWeekend}
                        ${day.day === appointmentOfDay.day
                        && appointmentOfDay.month === currentMonth
                        && currentYear === appointmentOfDay.year
                        && styles.isActive}
                        `
                      }
                      onClick={() => handleAlterAppointmentsDay(day.day)}
                    >
                      <span
                        className={`${styles.day} 
                        ${today.getDate() === day.day
                          && today.getMonth() === day.fullDate.getMonth()
                          && today.getFullYear() === day.fullDate.getFullYear()
                          && styles.toDay}`}
                      >
                        {day.day}
                      </span>
                      <div className={styles.appointmentTagContainer}>
                        {/* <span className={styles.tag} />
                        <span className={styles.tag} /> */}
                      </div>

                    </button>

                ))}

              </main>
            </div>

            <div className={styles.tagContainer}>
              <div className={styles.tagDescription}>
                <div className={styles.tagCircle} />
                <span className={styles.tagTitle}>Compromisso interno</span>
              </div>
            </div>
          </section>
        </main>
      </section>

      <section className={styles.appointments_container}>
        <header className={styles.appointmentTitleDay}>
          <h2 className={styles.appointmentTitle}>
            {appointmentOfDay.day
              ? `${appointmentOfDay?.dayFormatted} de ${appointmentOfDay?.monthFormatted} de ${appointmentOfDay?.year}`
              : `${currentDayFormatted} de ${todayMonthFormatted} de ${today.getFullYear()}`
            }
          </h2>
        </header>

        <main className={styles.appointmentsContainer}>
          <p>
            Próximo compromisso
          </p>
          <div className={styles.nextAppointment}>
            <AppointmentCard type='emphasis' />
          </div>

          <div className={styles.nextAppointmentsContainer}>
            <header className={styles.nextAppointmentsOptions}>
              <button className={`${styles.appointmentButton} ${styles.buttonActive}`}>Próximos</button>
              <button className={styles.appointmentButton}>Abertos</button>
              <button className={styles.appointmentButton}>Finalizados</button>
              <button className={styles.appointmentButton}>Cancelados</button>
            </header>

            <div className={styles.appointmentsListContainer}>
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />


            </div>
          </div>
        </main>
      </section>
    </main>
  )
}