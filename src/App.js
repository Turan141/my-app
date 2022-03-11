import React from 'react'
import { useState, useEffect } from 'react'
import TrafficSlider from './Components/Range-Sliders/Sliders/TrafficSlider'
import MinuteSlider from './Components/Range-Sliders/Sliders/MinutesSlider'
import HeaderComponent from './Components/Range-Sliders/Header/Header'
import SMSSlider from './Components/Range-Sliders/Sliders/SMSSlider'
import TotalComponent from './Components/Range-Sliders/TotalComponent'
import SocialApps from './Components/Range-Sliders/SocialAndMessegners/SocialComponent'

import './Styles/Styles.scss'
import './App.css'

function App() {
  const [payForTraffic, setPayForTraffic] = useState(0)
  const [payForSMS, setPayForSMS] = useState(0)
  const [payForMinutes, setPayForMinutes] = useState(0)
  const [icons, setIcons] = useState('')
  const [totalSum, setTotalSum] = useState(
    payForMinutes + payForSMS + payForTraffic
  )

  useEffect(() => {
    ;(function totalSumHandler() {
      return setTotalSum(payForMinutes + payForSMS + payForTraffic)
    })()
  }, [payForSMS, payForMinutes, payForTraffic])

  useEffect(() => {
    ;(function getData() {
      fetch('https://api.jsonbin.io/b/622b9ff20618276743749675')
        .then((response) => {
          return response.json()
        })
        .then((data) => setIcons(data))
    })()
  }, [])

  return (
    <div className="MainAppDiv">
      <HeaderComponent />
      <MinuteSlider setPayForMinutes={setPayForMinutes} />
      <TrafficSlider setPayForTraffic={setPayForTraffic} />
      <SMSSlider setPayForSMS={setPayForSMS} />
      <TotalComponent totalSum={totalSum} />
      {icons && <SocialApps type={'Соцсети'} icons={icons.social} />}
      {icons && <SocialApps type={'Мессенджеры'} icons={icons.messengers} />}
    </div>
  )
}

export default App
