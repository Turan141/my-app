import React from 'react'
import { useState } from 'react'
import '../../Styles/Styles.scss'


const MinuteSlider = () => {
  const [payForMinutes, setPayForMinutes] = useState(0)

  function onMove(e) {
    switch (e.target.valueAsNumber) {
      case 1:
        setPayForMinutes(200)
        break
      case 2:
        setPayForMinutes(350)
        break
      case 3:
        setPayForMinutes(600)
        break
      case 4:
        setPayForMinutes(650)
        break
      default:
        setPayForMinutes(0)
    }
  }

  return (
    <div className='MainMinuteSliderDiv'>
      <div className='rangeSlider'>
      <input
        onMouseUp={(e) => onMove(e)}
        type="range"
        min="1"
        max="4"
        list="tickmarks"
      ></input>
      <datalist id="tickmarks">
        <option value="1" label="200" />
        <option value="2" label="350" />
        <option value="3" label="600" />
        <option value="4" label="650" />
      </datalist>
      </div>
      <div className='rangeToShow'>
        <p>200</p>
        <p>350</p>
        <p>600</p>
        <p>650</p>
        </div>
      {/* <h1>{payForMinutes}</h1> */}
    </div>
  )
}

export default MinuteSlider
