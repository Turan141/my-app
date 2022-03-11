import React from 'react'
import { useState } from 'react'
import '../../../Styles/Styles.scss'
import Values from '../Values'

const MinuteSlider = ({ setPayForMinutes }) => {
  const [isActive, setIsActive] = useState({
    isActive1: false,
    isActive2: false,
    isActive3: false,
    isActive4: false,
  })

  function onMove(e) {
    switch (e.target.valueAsNumber) {
      case 1:
        setPayForMinutes(200)
        setIsActive({
          isActive1: true,
          isActive2: false,
          isActive3: false,
          isActive4: false,
        })
        break
      case 2:
        setPayForMinutes(350)
        setIsActive({
          isActive1: false,
          isActive2: true,
          isActive3: false,
          isActive4: false,
        })
        break
      case 3:
        setPayForMinutes(600)
        setIsActive({
          isActive1: false,
          isActive2: false,
          isActive3: true,
          isActive4: false,
        })
        break
      case 4:
        setPayForMinutes(650)
        setIsActive({
          isActive1: false,
          isActive2: false,
          isActive3: false,
          isActive4: true,
        })
        break
      default:
        setPayForMinutes(0)
    }
  }

  return (
    <div className="MainMinuteSliderDiv">
      <div className="internetText">
        <h1>Минуты</h1>
        <h2>Выберите пожалуйста желаемые минуты разговора</h2>
      </div>
      <div className="rangeDiv">
      <div className="rangeSlider">
        <input
          onTouchEnd={(e) => onMove(e)}
          onMouseUp={(e) => onMove(e)}
          type="range"
          min="1"
          max="4"
          list="tickmarks"
          defaultValue="1"
        ></input>
        <datalist id="tickmarks">
          <option value="1" label="200" />
          <option value="2" label="350" />
          <option value="3" label="600" />
          <option value="4" label="650" />
        </datalist>
      </div>
      <div className="rangeToShow">
        <Values value={200} isActive={isActive.isActive1} type={' мин.'} />
        <Values value={350} isActive={isActive.isActive2} type={' мин.'} />
        <Values value={600} isActive={isActive.isActive3} type={' мин.'} />
        <Values value={650} isActive={isActive.isActive4} type={' мин.'} />
      </div>
      </div>
    </div>
  )
}

export default MinuteSlider
