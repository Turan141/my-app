import React from 'react'
import { useState } from 'react'
import Values from '../Values'
import '../../../Styles/Styles.scss'

const TrafficSlider = ({ setPayForTraffic }) => {
  const [isActive, setIsActive] = useState({
    isActive1: false,
    isActive2: false,
    isActive3: false,
    isActive4: false,
  })

  function onMove(e) {
    switch (e.target.valueAsNumber) {
      case 1:
        setPayForTraffic(5)
        setIsActive({
          isActive1: true,
          isActive2: false,
          isActive3: false,
          isActive4: false,
        })
        break
      case 2:
        setPayForTraffic(15)
        setIsActive({
          isActive1: false,
          isActive2: true,
          isActive3: false,
          isActive4: false,
        })
        break
      case 3:
        setPayForTraffic(30)
        setIsActive({
          isActive1: false,
          isActive2: false,
          isActive3: true,
          isActive4: false,
        })
        break
      case 4:
        setPayForTraffic(35)
        setIsActive({
          isActive1: false,
          isActive2: false,
          isActive3: false,
          isActive4: true,
        })
        break
      default:
        setPayForTraffic(0)
    }
  }

  return (
    <div className="MainMinuteSliderDiv">
      <div className="internetText">
        <h1>Интернет</h1>
        <h2>Выберите пожалуйста желаемое количество интернет трафика</h2>
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
            <option value="1" label="5" />
            <option value="2" label="15" />
            <option value="3" label="30" />
            <option value="4" label="35" />
          </datalist>
        </div>
        <div className="rangeToShow">
          <Values value={5} isActive={isActive.isActive1} type={' ГБ'} />
          <Values value={15} isActive={isActive.isActive2} type={' ГБ'} />
          <Values value={30} isActive={isActive.isActive3} type={' ГБ'} />
          <Values value={35} isActive={isActive.isActive4} type={' ГБ'} />
        </div>
      </div>
    </div>
  )
}

export default TrafficSlider
