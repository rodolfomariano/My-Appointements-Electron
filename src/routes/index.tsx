import {
  Routes,
  Route,
} from "react-router-dom"

import { Dashboard } from '../pages/Dashboard'
import { Appointments } from '../pages/Appointments'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/appointments" element={<Appointments />} />

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}