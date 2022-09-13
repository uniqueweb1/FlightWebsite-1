import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AdminSettings from './Pages/AdminSettings.js'
import SettingsTab from './Pages/AdminSettingsPages/SettingsTab.js'
import Users from './Pages/Users.js'
import FullUserEdit from './Components/UserComponents/FullUserEdit.js'
import Sched from './Pages/Sched';
import Sales from './Pages/Sales';
import Ops from './Pages/Ops';
import Crew from './Pages/Crew';
import Handling from './Pages/Handling';
import Report from './Pages/Report';

import{BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Fleet from './Pages/MX Pages/Fleet'
import FleetDocument from './Pages/MX Pages/FleetDocument'
import FleetDocumentForm from './Pages/MX Pages/FleetDocument'
import FleetForm from './Pages/MX Pages/MX Pages Component/FleetForm';
import FleetPlanning from'./Pages/MX Pages/FleetPlanning';
import HoldItemList from './Pages/MX Pages/HoldItemList';
import Home from'./Pages/Home';
import LogOut from'./Pages/LogOut';
import NewHIL from'./Pages/MX Pages/MX Pages Component/NewHIL';
import NewscheduledMaintenance from'./Pages/MX Pages/MX Pages Component/NewscheduledMaintenance';
import AddNewscheduledMaintenance from './Pages/MX Pages/MX Pages Component/AddNewscheduledMaintenanance';
import ScheduledMaintenance from './Pages/MX Pages/ScheduledMaintenance';
import Tlb from'./Pages/MX Pages/Tlb';

// route and link  to the pages element//
function App() {

  return (
   <Router>
    <Navbar />
    <Routes>
<Route exact path='/'  element={<Home />} />
<Route exact path='/fleetplanning' element={<FleetPlanning />} />
<Route exact path='/fleet' element={<Fleet />} />
<Route exact path='/fleetdocuments' element={<FleetDocument />} />
<Route exact path='/scheduledmaintenance' element={<ScheduledMaintenance />} />
<Route exact path='/holditemlist' element={<HoldItemList />} />
<Route exact path='/tlb' element={<Tlb />} />
<Route exact path='/log-out' element={<LogOut />} />
<Route exact path='/add-new-scheduled-maintenance' element={<AddNewscheduledMaintenance />} />
<Route exact path='/new-scheduled-maintenance' element={<NewscheduledMaintenance />} />
<Route exact path='/new-hil' element={<NewHIL />} />
<Route exact path='/fleetform' element={<FleetForm />} />
<Route exact path='/fleet-document-form' element={<FleetDocumentForm />} />
<Route exact path="/" element={<Sched />} />
<Route exact path="/sales" element={<Sales />} />
<Route exact path="/ops" element={<Ops />} />
<Route exact path="/crew" element={<Crew />} />
<Route exact path="/handling" element={<Handling />} />
<Route exact  path="/report" element={<Report />} /> 
<Route exact path="/admin-settings" element={<AdminSettings />} /> 
<Route exact path="/url/to/SettingsTab" element={<SettingsTab />} />
<Route exact path="/url/to/Users" element={<Users />} />
<Route exact path="/url/to/FullUserEdit" element={<FullUserEdit />} />
</Routes>
    </Router>
  );
}

export default App;
