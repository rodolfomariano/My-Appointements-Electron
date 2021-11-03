import {
  Routes,
  Route,
} from "react-router-dom"

import { Dashboard } from '../pages/Dashboard'
import { Appointments } from '../pages/Appointments'
import { Finances } from '../pages/Finances'
import { Clients } from "../pages/Clients"
import { CourtHearing } from "../pages/CourtHearing"
import { Contacts } from "../pages/Contacts"
import { AccessControl } from "../pages/AccessControl"

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/finances" element={<Finances />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/court-hearing" element={<CourtHearing />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/access-control" element={<AccessControl />} />

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}