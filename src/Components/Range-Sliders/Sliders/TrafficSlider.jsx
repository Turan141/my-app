import React from 'react'
import { useState } from 'react'
import Values from '../Values'
import '../../../Styles/Styles.scss'

const TrafficSlider = ({ setPayForTraffic }) => {
  const [isActive1, setActive1] = useState(false)
  const [isActive2, setActive2] = useState(false)
  const [isActive3, setActive3] = useState(false)
  const [isActive4, setActive4] = useState(false)

  function onMove(e) {
    switch (e.target.valueAsNumber) {
      case 1:
        setPayForTraffic(5)
        setActive1(true)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        break
      case 2:
        setPayForTraffic(15)
        setActive1(false)
        setActive2(true)
        setActive3(false)
        setActive4(false)
        break
      case 3:
        setPayForTraffic(30)
        setActive1(false)
        setActive2(false)
        setActive3(true)
        setActive4(false)
        break
      case 4:
        setPayForTraffic(35)
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(true)
        break
      default:
        setPayForTraffic(0)
    }
  }

  return (
    <div className="MainMinuteSliderDiv">
      <h2>Выберите пожалуйста желаемое количество интернет трафика</h2>
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
          <option value="1" label="5" />
          <option value="2" label="15" />
          <option value="3" label="30" />
          <option value="4" label="35" />
        </datalist>
      </div>
      <div className="rangeToShow">
        <Values value={5} isActive={isActive1} type={' ГБ'} />
        <Values value={15} isActive={isActive2} type={' ГБ'} />
        <Values value={30} isActive={isActive3} type={' ГБ'} />
        <Values value={35} isActive={isActive4} type={' ГБ'} />
      </div>
    </div>
  )
}

export default TrafficSlider
