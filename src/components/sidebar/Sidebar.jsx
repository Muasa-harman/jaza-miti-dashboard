import React from 'react'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ParkIcon from '@mui/icons-material/Park';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './sidebar.scss';

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">GENERAL</h3>
        <ul className="sidebarList">
          <Link to="/" className='link'>
          <Link className="sidebarListItem active">
            <SpaceDashboardIcon className='sidebarIcon'/>
            Dashboard
          </Link>
            </Link>
          <li className="sidebarListItem">
            <LeaderboardIcon className='sidebarIcon'/>
            LeaderBoard
          </li>
        </ul>

        <h3 className="sidebarTitle">RECORDS</h3>
        <ul className="sidebarList">
          {/* <Link to="/" className='link'> */}
          <li className="sidebarListItem">
            <SummarizeIcon className='sidebarIcon'/>
            Reports
          </li>
          {/* </Link> */}
          {/* <Link to="/products" className='link'> */}
          <li className="sidebarListItem">
            <ParkIcon className='sidebarIcon'/>
            Tree Bank
          </li>
          {/* </Link> */}
          <li className="sidebarListItem">
            <CorporateFareIcon className='sidebarIcon'/>
            Organisation
          </li>
          <li className="sidebarListItem">
            <PersonIcon className='sidebarIcon'/>
            Individual
          </li>
        </ul>

        <h3 className="sidebarTitle">USER SETTINGS</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <GroupIcon className='sidebarIcon'/>
            Users
          </li>
          <li className="sidebarListItem">
            <AccountCircleIcon className='sidebarIcon'/>
            Profile
          </li>
        </ul>  
      </div>
    </div>
  </div>
  )
}

export default Sidebar
