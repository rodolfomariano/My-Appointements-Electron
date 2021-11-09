
import { FaCalendarCheck, FaBookOpen, FaCarAlt, FaDumbbell } from 'react-icons/fa'

export const iconColors = [
  { type: 'meet', color: '#16b152', icon: <FaCalendarCheck /> },
  { type: 'study', color: '#dd2acc', icon: <FaBookOpen /> },
  { type: 'vacation', color: '#22aadd', icon: <FaCarAlt /> },
  { type: 'exercise', color: '#22cc22', icon: <FaDumbbell /> }
]

export const appointments = [
  {
    id: '01',
    title: 'Estudar Portugues',
    description: 'Estudar portugues',
    date: {
      year: 2021,
      month: 10,
      day: 30,
      time: {
        initial: 11,
        finish: 12
      }
    },
    type: 'study',
    status: 'next'
  },
  {
    id: '02',
    title: 'Reunião',
    description: 'Reunião com investifores',
    date: {
      year: 2021,
      month: 11,
      day: 2,
      time: {
        initial: 11,
        finish: 12
      }
    },
    type: 'meet',
    status: 'open'
  },
  {
    id: '03',
    title: 'Férias',
    description: 'Férias internacional',
    date: {
      year: 2021,
      month: 11,
      day: 20,
      time: {
        initial: 11,
        finish: 12
      },
      multi: {
        firstDay: 20,
        lastDay: 30,
        lastMonth: 11
      }
    },
    type: 'vacation',
    status: 'next'
  },
  {
    id: '04',
    title: 'Niver',
    description: 'Férias internacional',
    date: {
      year: 2021,
      month: 11,
      day: 8,
      time: {
        initial: 11,
        finish: 12
      },
      multi: {
        firstDay: 8,
        lastDay: 30,
        lastMonth: 11
      }
    },
    type: 'vacation',
    status: 'next'
  },
  {
    id: '05',
    title: 'Reunião',
    description: 'Reuião com colaboradores',
    date: {
      year: 2021,
      month: 11,
      day: 20,
      time: {
        initial: 10,
        finish: 11
      }
    },
    type: 'meet',
    status: 'next'
  },
  {
    id: '06',
    title: 'Treino Funcional',
    description: 'Treino de explosão',
    date: {
      year: 2021,
      month: 11,
      day: 20,
      time: {
        initial: 14,
        finish: 13
      }
    },
    type: 'exercise',
    status: 'next'
  },
]
