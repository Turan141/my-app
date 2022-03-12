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
  const [payForSocial, setPayForSocial] = useState(0)
  const [icons, setIcons] = useState('')
  const [totalSum, setTotalSum] = useState(
    payForMinutes + payForSMS + payForTraffic + payForSocial
  )

  useEffect(() => {
    ;(function totalSumHandler() {
      return setTotalSum(
        payForMinutes + payForSMS + payForTraffic + payForSocial
      )
    })()
  }, [payForSMS, payForMinutes, payForTraffic, payForSocial])

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
      <div className="socialSection">
        {icons && (
          <SocialApps
            type={'Соцсети'}
            icons={icons.social}
            setPayForSocial={setPayForSocial}
          />
        )}
        {icons && (
          <SocialApps
            type={'Мессенджеры'}
            icons={icons.messengers}
            setPayForSocial={setPayForSocial}
          />
        )}
      </div>
      <div style={{ height: '50px' }} />
      <TotalComponent totalSum={totalSum} />
    </div>
  )
}

export default App
