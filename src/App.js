import React from 'react'
import { useState, useEffect } from 'react'
import TrafficSlider from './Components/Range-Sliders/Sliders/TrafficSlider'
import MinuteSlider from './Components/Range-Sliders/Sliders/MinutesSlider'
import HeaderComponent from './Components/Range-Sliders/Header/Header'
import SMSSlider from './Components/Range-Sliders/Sliders/SMSSlider'
import TotalComponent from './Components/Range-Sliders/TotalComponent'
import SocialApps from './Components/Range-Sliders/SocialAndMessegners/SocialComponent'
import ReactDOM from 'react-dom'

import './Styles/Styles.scss'
import './App.css'

function App() {
  const [payForTraffic, setPayForTraffic] = useState(0)
  const [payForSMS, setPayForSMS] = useState(0)
  const [payForMinutes, setPayForMinutes] = useState(0)
  const [totalSum, setTotalSum] = useState(
    payForMinutes + payForSMS + payForTraffic
  )

  useEffect(() => {
    (function totalSumHandler() {
      return setTotalSum(payForMinutes + payForSMS + payForTraffic)
    })()
  }, [payForSMS, payForMinutes, payForTraffic])

  return (
    <div className="MainAppDiv">
      <HeaderComponent />
      <MinuteSlider setPayForMinutes={setPayForMinutes} />
      <TrafficSlider setPayForTraffic={setPayForTraffic} />
      <SMSSlider setPayForSMS={setPayForSMS} />
      <TotalComponent totalSum={totalSum} />
      <SocialApps/>
    </div>
  )
}

export default App
