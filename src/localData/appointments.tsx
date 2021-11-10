
import { FaCalendarCheck, FaBookOpen, FaCarAlt, FaDumbbell, FaBlackTie } from 'react-icons/fa'

export const iconColors = [
  { id: 1, type: 'meet', title: 'Reunião', color: '#16b152', icon: <FaCalendarCheck /> },
  { id: 2, type: 'study', title: 'Estudo', color: '#dd2acc', icon: <FaBookOpen /> },
  { id: 3, type: 'vacation', title: 'Férias', color: '#22aadd', icon: <FaCarAlt /> },
  { id: 4, type: 'exercise', title: 'Exercicio Fisico', color: '#22cc22', icon: <FaDumbbell /> },
  { id: 4, type: 'work', title: 'Trabalho', color: '#752c8b', icon: <FaBlackTie /> }
]

export const appointments = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
