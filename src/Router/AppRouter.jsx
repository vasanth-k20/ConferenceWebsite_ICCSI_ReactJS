import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Main from '../Components/Main/Main'
import AboutConference from '../Components/Pages/AboutUs/AboutConference/AboutConference'
import ScopeOfConference from '../Components/Pages/AboutUs/ScopeConference/ScopeConf'
import OrganizingCommittee from '../Components/Pages/AboutUs/OrgCommitee/Comitee'
import EditorialBoard from '../Components/Pages/AboutUs/Editorial/EditoBoard'
import KeyDates from '../Components/Pages/Author\'sDesk/KeyDates/Key'
import RegistrationDetails from '../Components/Pages/Author\'sDesk/RegDetails/RegDetail'
import PaperSubmission from '../Components/Pages/Author\'sDesk/PaperSub/Papersub'
import ContactSection from '../Components/Pages/Contact/Contact'
import ScrollToTop from '../Scrolltotop'
import MetaTags from '../Core/MetaTags'

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop/>
        <MetaTags/>
          <Routes>
            <Route element={<Main />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutConference />} />
              <Route path="/scope" element={<ScopeOfConference />} />
              <Route path="/organize" element={<OrganizingCommittee />} />
              <Route path="/editorial" element={<EditorialBoard />} />
              <Route path="/keydates" element={<KeyDates />} />
              <Route path="/registration" element={<RegistrationDetails />} />
              <Route path="/papersub" element={<PaperSubmission />} />
              <Route path="/contact" element={<ContactSection />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}
