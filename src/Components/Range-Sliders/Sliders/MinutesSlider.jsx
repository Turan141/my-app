import React from 'react'
import { useState } from 'react'
import '../../../Styles/Styles.scss'
import Values from '../Values'

const MinuteSlider = ({ setPayForMinutes }) => {
  const [isActive1, setActive1] = useState(false)
  const [isActive2, setActive2] = useState(false)
  const [isActive3, setActive3] = useState(false)
  const [isActive4, setActive4] = useState(false)

  function onMove(e) {
    switch (e.target.valueAsNumber) {
      case 1:
        setPayForMinutes(200)
        setActive1(true)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        break
      case 2:
        setPayForMinutes(350)
        setActive1(false)
        setActive2(true)
        setActive3(false)
        setActive4(false)
        break
      case 3:
        setPayForMinutes(600)
        setActive1(false)
        setActive2(false)
        setActive3(true)
        setActive4(false)
        break
      case 4:
        setPayForMinutes(650)
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(true)
        break
      default:
        setPayForMinutes(0)
    }
  }


  return (
    <div className="MainMinuteSliderDiv">
      <h2>Выберите пожалуйста желаемые минуты разговора</h2>
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
        <Values value={200} isActive={isActive1} type={' мин.'} />
        <Values value={350} isActive={isActive2} type={' мин.'}/>
        <Values value={600} isActive={isActive3} type={' мин.'}/>
        <Values value={650} isActive={isActive4} type={' мин.'}/>
      </div>
    </div>
  )
}

export default MinuteSlider
