import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import styles from './styles.module.scss'

import { FindAction } from '../../components/FindAction'
import { FloatingMenu } from '../../components/FloatingMenu'
import { SimpleButton } from '../../components/SimpleButton'


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

        <main className={styles.content}>
          <header className={styles.selectMonthContainer}>
            <div>
              <button className={styles.previousMonth}>
                <FiChevronLeft />
              </button>
              <span className={styles.monthTitle}>Outubro de 2021</span>
              <button className={styles.nextMonth}>
                <FiChevronRight />
              </button>
            </div>
          </header>

          <section className={styles.monthContainer}>
            <div className={styles.monthContent}>
              <header className={styles.weekDayContainer}>
                <strong className={`${styles.dayTitle} ${styles.weekend}`}>Dom</strong>
                <strong className={styles.dayTitle}>Seg</strong>
                <strong className={styles.dayTitle}>Ter</strong>
                <strong className={styles.dayTitle}>Qua</strong>
                <strong className={styles.dayTitle}>Qui</strong>
                <strong className={styles.dayTitle}>Seg</strong>
                <strong className={`${styles.dayTitle} ${styles.weekend}`}>Sáb</strong>
              </header>

              <main className={styles.dayContainer}>
                <button className={styles.dayButton}>
                  <span className={styles.day}>0</span>
                  <div className={styles.appointmentTagContainer}>
                    <span className={styles.tag} />
                    <span className={styles.tag} />
                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>0</span>
                  <div className={styles.appointmentTagContainer}>
                    <span className={styles.tag} />
                    <span className={styles.tag} />
                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>0</span>
                  <div className={styles.appointmentTagContainer}>
                    <span className={styles.tag} />
                    <span className={styles.tag} />
                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>0</span>
                  <div className={styles.appointmentTagContainer}>
                    <span className={styles.tag} />
                    <span className={styles.tag} />
                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>0</span>
                  <div className={styles.appointmentTagContainer}>
                    <span className={styles.tag} />
                    <span className={styles.tag} />
                  </div>
                </button>



                <button className={styles.dayButton}>
                  <span className={styles.day}>1</span>
                  <div className={styles.appointmentTagContainer}>
                    <span className={styles.tag} />
                    <span className={styles.tag} />
                  </div>
                </button>

                <button className={styles.dayButton}>
                  <span className={styles.day}>2</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>3</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>4</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>5</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>6</span>
                  <div className={styles.appointmentTagContainer}>
                    <span className={styles.tag} />
                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>7</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>8</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>9</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>10</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>11</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>12</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>13</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>14</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>15</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>16</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button><button className={styles.dayButton}>
                  <span className={styles.day}>17</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>

                <button className={styles.dayButton}>
                  <span className={styles.day}>18</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>19</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>20</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>

                <button className={styles.dayButton}>
                  <span className={styles.day}>21</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>22</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>23</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>24</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>25</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>26</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>27</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>28</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>29</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>30</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>
                <button className={styles.dayButton}>
                  <span className={styles.day}>31</span>
                  <div className={styles.appointmentTagContainer}>

                  </div>
                </button>


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
          <h2 className={styles.appointmentTitle}>29 de Outubro de 2021</h2>
        </header>

        <main className={styles.appointmentsContainer}>
          <p>
            Próximo compromisso
          </p>
        </main>
      </section>
    </main>
  )
}