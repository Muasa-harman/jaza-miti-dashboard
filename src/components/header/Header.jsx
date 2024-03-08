import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { lightGreen } from '@mui/material/colors';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Header.scss';
// import  Logos from "/home/donfiles/Downloads/kwta.png"

function Header() {
  return (
    <div className='header'>
      <div className='left'>
        <p>
          kenya water towers agency
        </p>
          <image src={Logos} alt=""/>
      </div>
      <div className='right'>
        <div className='notification'>
          <NotificationsIcon className='icon'/>
        </div>
        <div className='profile'>
         <Avatar  className='avatar' sx={{ bgcolor: lightGreen[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"/>
        <h5>Harman</h5>
        <ArrowDropDownIcon className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Header