import styles from './styles.module.scss'

import { FiX } from 'react-icons/fi'
import { useState } from 'react'

import { iconColors } from '../../localData/appointments'

interface ModalNewAppointmentProps {
  closeModal: () => void
}

export function ModalNewAppointment({ closeModal }: ModalNewAppointmentProps) {
  const [progressBar, setProgressBar] = useState(20)
  const [progressToAdd, setProgressToAdd] = useState(20)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [appointmentType, setAppointmentType] = useState('')



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
    setProgressToAdd(progressToAdd + 20)
    setProgressBar(progressBar + 20)
  }

  function handleSelectType(type: string) {
    setAppointmentType(type)
  }

  function handleAddNewAppointment() {

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

        <div className={progressBar === 60 ? ` ${styles.step} ${styles.active}` : styles.step}>

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