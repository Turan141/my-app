import React from 'react'
import { useState } from 'react'
import Values from '../Values'
import '../../../Styles/Styles.scss'

const SMSSlider = ({ setPayForSMS }) => {
  const [isActive, setIsActive] = useState({
    isActive1: false,
    isActive2: false,
    isActive3: false,
    isActive4: false,
  })

  function onMove(e) {
    switch (e.target.valueAsNumber) {
      case 1:
        setPayForSMS(0)
        setIsActive({
          isActive1: true,
          isActive2: false,
          isActive3: false,
          isActive4: false,
        })
        break
      case 2:
        setPayForSMS(50)
        setIsActive({
          isActive1: false,
          isActive2: true,
          isActive3: false,
          isActive4: false,
        })
        break
      case 3:
        setPayForSMS(100)
        setIsActive({
          isActive1: false,
          isActive2: false,
          isActive3: true,
          isActive4: false,
        })
        break
      case 4:
        setPayForSMS(150)
        setIsActive({
          isActive1: false,
          isActive2: false,
          isActive3: false,
          isActive4: true,
        })
        break
      default:
        setPayForSMS(0)
    }
  }

  return (
    <div className="MainMinuteSliderDiv">
      <div className="internetText">
        <h1>СМС</h1>
        <h2>Выберите пожалуйста желаемое количество СМС пакета</h2>
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
          <option value="1" label="0" />
          <option value="2" label="50" />
          <option value="3" label="100" />
          <option value="4" label="150" />
        </datalist>
      </div>
      <div className="rangeToShow">
        <Values value={0} isActive={isActive.isActive1} type={' смс'} />
        <Values value={50} isActive={isActive.isActive2} type={' смс'} />
        <Values value={100} isActive={isActive.isActive3} type={' смс'} />
        <Values value={150} isActive={isActive.isActive4} type={' смс'} />
      </div>
      </div>
    </div>
  )
}

export default SMSSlider
