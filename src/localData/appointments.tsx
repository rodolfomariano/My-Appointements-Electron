
import { FaCalendarCheck, FaBookOpen, FaCarAlt } from 'react-icons/fa'

export const iconColors = [
  { type: 'meet', color: '#16b152', icon: <FaCalendarCheck /> },
  { type: 'study', color: '#dd2acc', icon: <FaBookOpen /> },
  { type: 'vacation', color: '#22aadd', icon: <FaCarAlt /> }
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
      time: '10:30 as 11:30'
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
      time: '10:30 as 11:30'
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
      time: '10:30 as 11:30',
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
      time: '10:30 as 11:30',
      multi: {
        firstDay: 8,
        lastDay: 30,
        lastMonth: 11
      }
    },
    type: 'vacation',
    status: 'next'
  }
]
