import { useState } from 'react'

import styles from './styles.module.scss'

import { FiX } from 'react-icons/fi'

import { appointments, iconColors } from '../../localData/appointments'

interface ModalNewAppointmentProps {
  closeModal: () => void
}

export function ModalNewAppointment({ closeModal }: ModalNewAppointmentProps) {
  const [progressBar, setProgressBar] = useState(20)
  const [progressToAdd, setProgressToAdd] = useState(20)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [appointmentType, setAppointmentType] = useState('')
  const [selectDate, setSelectDate] = useState('')
  const [selectInitialTime, setSelectInitialTime] = useState('')
  const [selectFinalTime, setSelectFinalTime] = useState('')

  const dayFormatted = Number(selectDate.substr(8, 2))
  const monthFormatted = Number(selectDate.substr(5, 2)) - 1
  const yearFormatted = Number(selectDate.substr(0, 4))

  const initialTimeFormatted = Number(selectInitialTime.substr(0, 2))
  const finalTimeFormatted = Number(selectFinalTime.substr(0, 2))


  function handleNextStep() {

    if (title === '') {
      return alert('Digite um titulo para o compromisso')
    }
    if (description === '' && progressBar > 20) {
      return alert('Digite uma descrição')
    }
    if (appointmentType === '' && progressBar > 20) {
      return alert('Selecione um tipo')
    }
    if (selectDate === '' && progressBar > 40) {
      return alert('Selecione uma data')
    }
    if (selectInitialTime === '' && progressBar > 60) {
      return alert('Selecione um horario de inicio')
    }
    if (selectFinalTime === '' && progressBar > 60) {
      return alert('Selecione um horario de término')
    }

    setProgressToAdd(progressToAdd + 20)
    setProgressBar(progressBar + 20)
  }

  function handleSelectType(type: string) {
    setAppointmentType(type)
  }

  function handleSelectDate(e: string) {
    setSelectDate(e)
  }



  function handleAddNewAppointment() {

    const currentId = appointments.length + 1

    try {
      appointments.push({
        id: currentId + 1,
        title: title,
        description: description,
        date: {
          year: yearFormatted,
          month: monthFormatted,
          day: dayFormatted,
          time: {
            initial: initialTimeFormatted,
            finish: finalTimeFormatted
          }
        },
        type: appointmentType,
        status: 'next'
      })

      closeModal()
      // window.location.reload()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <header>
        <h2>Novo Compromisso</h2>

        <div className={styles.steps}>
          <button onClick={() => setProgressBar(20)}>Titulo</button>
          <button onClick={() => setProgressBar(40)} disabled={progressToAdd < 40}>Descrição</button>
          <button onClick={() => setProgressBar(60)} disabled={progressToAdd < 60}>Data</button>
          <button onClick={() => setProgressBar(80)} disabled={progressToAdd < 80}>Hora</button>
          <button onClick={() => setProgressBar(100)} disabled={progressToAdd < 100}>Pronto</button>
          <div className={styles.stepProgress} style={{ width: `${progressBar}%` }} />
        </div>

        <button className={styles.closeModal} onClick={closeModal}>
          <FiX />
        </button>
      </header>

      <main>

        <div className={progressBar === 20 ? ` ${styles.step1} ${styles.active}` : styles.step1}>
          <label htmlFor="title">Qual o nome do compromisso?</label>
          <input
            id='title'
            type="text"
            placeholder='ex: Reunião'
            onKeyDown={(e) => e.nativeEvent.key === 'Enter' && handleNextStep()}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className={`${styles.step2} ${progressBar === 40 && styles.active}`}>
          <label htmlFor="title">De uma descrição ao compromisso</label>
          <input
            id='title'
            type="text"
            placeholder='ex: Reunião com colaboradores'
            onKeyDown={(e) => e.nativeEvent.key === 'Enter' && handleNextStep()}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <div className={styles.selectType}>
            <label htmlFor="selectType">Selecione um tipo: </label>

            <select name="" id="selectType" onChange={e => handleSelectType(e.target.value)} >
              <option value=""></option>
              {iconColors.map(item => (
                <option value={item.type} key={item.type} >
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={progressBar === 60 ? ` ${styles.step3} ${styles.active}` : styles.step3}>
          <label htmlFor="selectType">Selecione a data: </label>
          <input type="date" name="" id="" onChange={e => handleSelectDate(e.target.value)} />
          <div className={styles.calendarContent}>

          </div>
        </div>

        <div className={progressBar === 80 ? ` ${styles.step4} ${styles.active}` : styles.step4}>
          <div>
            <label htmlFor="selectType">Selecione a hora inicial: </label>
            <input type="time" name="" id="" min="08:00" max="16:00" onChange={e => setSelectInitialTime(e.target.value)} />

          </div>

          <div>
            <label htmlFor="selectType">Selecione a hora final: </label>
            <input type="time" name="" id="" min="08:00" max="16:00" onChange={e => setSelectFinalTime(e.target.value)} />
          </div>

        </div>

        <div className={progressBar === 100 ? ` ${styles.step5} ${styles.active}` : styles.step5}>
          <div>
            <h3>Detalhes do compromisso</h3>
            <p><span>Titulo:</span> {title}</p>
            <p><span>Descrição:</span> {description}</p>
            <p><span>Dia:</span> {dayFormatted}/{monthFormatted}/{yearFormatted}</p>
            <p><span>Hora:</span> Inicio: {selectInitialTime} , Fim: {selectFinalTime}</p>
          </div>

        </div>

      </main>

      <footer>
        <button className={styles.cancel} onClick={closeModal}>
          Cancelar
        </button>

        <button className={styles.next} onClick={progressToAdd < 100 ? handleNextStep : handleAddNewAppointment}>
          {progressToAdd < 100 ? 'Próximo' : 'Cadastrar'}
        </button>
      </footer>
    </div>
  )
}