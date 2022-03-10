import React from 'react'
import { useState } from 'react'
import MinuteSlider from './Components/Range-Sliders/MinutesSlider'
import TrafficSlider from './Components/Range-Sliders/TrafficSlider'
import HeaderComponent from './Components/Range-Sliders/Header/Header'
import './Styles/Styles.scss'


import './App.css'

function App() {
 return(
   <div className='MainAppDiv'>
   <HeaderComponent/>
   <MinuteSlider/>
   <TrafficSlider/>
   </div>
 )
}

export default App
