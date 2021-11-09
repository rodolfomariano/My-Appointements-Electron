import { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import styles from './styles.module.scss'

import { FindAction } from '../../components/FindAction'
import { FloatingMenu } from '../../components/FloatingMenu'
import { SimpleButton } from '../../components/SimpleButton'
import { AppointmentCard } from '../../components/AppointmentCard'

import { data } from '../../utils/dayAndMonths'
import { appointments } from '../../localData/appointments'

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
  const [optionsTypeAppointmentActive, setOptionTypeAppointmentActive] = useState('next' || 'open' || 'done' || 'canceled')

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

  useEffect(() => {
    handleAlterAppointmentsDay(currentDay)
  }, [])

  const statusNext = appointments.filter(item => item.status === 'next')
  const statusOpen = appointments.filter(item => item.status === 'open')
  const statusDone = appointments.filter(item => item.status === 'done')
  const statusCanceled = appointments.filter(item => item.status === 'canceled')

  const statusNextDay = statusNext.filter(item => item.date.day === appointmentOfDay.day).sort((a, b) => a.date.time.initial - b.date.time.initial)
  const statusOpenDay = statusOpen.filter(item => item.date.day === appointmentOfDay.day).sort((a, b) => a.date.time.initial - b.date.time.initial)
  const statusDoneDay = statusDone.filter(item => item.date.day === appointmentOfDay.day).sort((a, b) => a.date.time.initial - b.date.time.initial)
  const statusCanceledDay = statusCanceled.filter(item => item.date.day === appointmentOfDay.day).sort((a, b) => a.date.time.initial - b.date.time.initial)


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
                        {
                          statusNext.map(item => item.date.day === day.day && <span className={styles.tag} />)
                        }

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

            {
              statusNextDay.map((item, index) => index === 0 && <AppointmentCard type='emphasis' data={item} />)
            }

          </div>

          <div className={styles.nextAppointmentsContainer}>
            <header className={styles.nextAppointmentsOptions}>
              <button
                className={`${styles.appointmentButton} ${optionsTypeAppointmentActive === 'next' && styles.buttonActive}`}
                onClick={() => setOptionTypeAppointmentActive('next')}
              >
                Próximos
                {statusNext.length > 0 && statusNext.filter(item => item.date.day === appointmentOfDay.day).length - 1 > 0 &&
                  <div className={`${styles.badges} ${styles.badgesNext}`}>
                    <span>{statusNext.filter(item => item.date.day === appointmentOfDay.day).length - 1}</span>
                  </div>
                }
              </button>
              <button
                className={`${styles.appointmentButton} ${optionsTypeAppointmentActive === 'open' && styles.buttonActive}`}
                onClick={() => setOptionTypeAppointmentActive('open')}
              >
                Abertos
                {statusOpen.length > 0 && statusOpen.filter(item => item.date.day === appointmentOfDay.day).length > 0 &&
                  <div className={`${styles.badges} ${styles.badgesOpen}`}>
                    <span>{statusOpen.filter(item => item.date.day === appointmentOfDay.day).length}</span>
                  </div>
                }
              </button>
              <button
                className={`${styles.appointmentButton} ${optionsTypeAppointmentActive === 'done' && styles.buttonActive}`}
                onClick={() => setOptionTypeAppointmentActive('done')}
              >
                Finalizados
                {statusDone.length > 0 &&
                  <div className={`${styles.badges} ${styles.badgesDone}`}>
                    <span>{statusDone.length}</span>
                  </div>
                }
              </button>
              <button
                className={`${styles.appointmentButton} ${optionsTypeAppointmentActive === 'canceled' && styles.buttonActive}`}
                onClick={() => setOptionTypeAppointmentActive('canceled')}
              >
                Cancelados
                {statusCanceled.length < 0 &&
                  <div className={`${styles.badges} ${styles.badgesCanceled}`}>
                    <span>{statusCanceled.length}</span>
                  </div>
                }
              </button>
              <div
                className={styles.activeButton}
                style={{
                  left: optionsTypeAppointmentActive === 'next' ? 0 :
                    optionsTypeAppointmentActive === 'open' ? '25%' :
                      optionsTypeAppointmentActive === 'done' ? '50%' : '75%'
                }}
              />
            </header>


            {optionsTypeAppointmentActive &&

              <div className={styles.appointmentsListContainer}>
                {/* {appointments.map((item, index) =>
                  index !== 0 && appointmentOfDay.day === item.date.day && item.status === optionsTypeAppointmentActive && <AppointmentCard data={item} />
                )} */}
                {
                  optionsTypeAppointmentActive === 'next' ? statusNextDay.map((item, index) => index !== 0 && <AppointmentCard data={item} />)
                    : optionsTypeAppointmentActive === 'open' ? statusOpenDay.map((item) => <AppointmentCard data={item} />)
                      : optionsTypeAppointmentActive === 'done' ? statusDoneDay.map((item) => <AppointmentCard data={item} />)
                        : optionsTypeAppointmentActive === 'canceled' && statusCanceledDay.map((item) => <AppointmentCard data={item} />)
                }
              </div>
            }

          </div>
        </main>
      </section>
    </main>
  )
}