import React from 'react'
import './Leaderboard.scss'
import Company from "../../Company/Company"

function Leaderboard() {
  return (
    <div className='board'>
      <div className='title'>
        <h4 className='lead'>Leadboard</h4>
        <li>View More</li>
      </div>
      <div className='links'>
        <li>Organisation</li>
        <li>Individual</li>
        <li>Tree type</li>
      </div>
      <div className='company'>
        <li>Kenya Water Towers</li>
        <li>Kefri</li>
        <li>Kenya Airways</li>
      </div>
      <div className="partners">
      <Company/>
      <div className='companies'>
        <Company company={'Britam'} total={200000}/>
        <Company company={'Equity'} total={200000}/>
        <Company company={'KCB'} total={200000}/>
        <Company company={'KenGen'} total={200000}/>
        <Company company={'Total Energies'}  total={200000}/>
        <Company company={'KFS'} total={1000000}/>

      </div>
      </div>
    </div>
  )
}

export default Leaderboard
