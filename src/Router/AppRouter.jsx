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
              <Route path="/about_the_conference" element={<AboutConference />} />
              <Route path="/scope_the_conference" element={<ScopeOfConference />} />
              <Route path="/organize_committee" element={<OrganizingCommittee />} />
              <Route path="/editorial_board" element={<EditorialBoard />} />
              <Route path="/key_dates" element={<KeyDates />} />
              <Route path="/registration_details" element={<RegistrationDetails />} />
              <Route path="/paper_submission" element={<PaperSubmission />} />
              <Route path="/contact_us" element={<ContactSection />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}
