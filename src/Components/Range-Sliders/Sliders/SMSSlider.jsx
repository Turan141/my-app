import React from 'react'
import { useState } from 'react'
import Values from '../Values'
import '../../../Styles/Styles.scss'

const SMSSlider = ({ setPayForSMS }) => {
  const [isActive1, setActive1] = useState(false)
  const [isActive2, setActive2] = useState(false)
  const [isActive3, setActive3] = useState(false)
  const [isActive4, setActive4] = useState(false)

  function onMove(e) {
    switch (e.target.valueAsNumber) {
      case 1:
        setPayForSMS(0)
        setActive1(true)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        break
      case 2:
        setPayForSMS(50)
        setActive1(false)
        setActive2(true)
        setActive3(false)
        setActive4(false)
        break
      case 3:
        setPayForSMS(100)
        setActive1(false)
        setActive2(false)
        setActive3(true)
        setActive4(false)
        break
      case 4:
        setPayForSMS(150)
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(true)
        break
      default:
        setPayForSMS(0)
    }
  }

  return (
    <div className="MainMinuteSliderDiv">
            <h2>Выберите пожалуйста желаемое количество СМС</h2>
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
          <option value="1" label="0" />
          <option value="2" label="50" />
          <option value="3" label="100" />
          <option value="4" label="150" />
        </datalist>
      </div>
      <div className="rangeToShow">
        <Values value={0} isActive={isActive1} type={ ' смс'}/>
        <Values value={50} isActive={isActive2} type={ ' смс'}/>
        <Values value={100} isActive={isActive3} type={ ' смс'}/>
        <Values value={150} isActive={isActive4} type={ ' смс'}/>
      </div>
    </div>
  )
}

export default SMSSlider
