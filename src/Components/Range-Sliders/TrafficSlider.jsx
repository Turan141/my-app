import React from 'react'
import { useState } from 'react'
import '../../Styles/Styles.scss'


const TrafficSlider = () => {
  const [payForMinutes, setPayForMinutes] = useState(0)

  function onMove(e) {
    switch (e.target.valueAsNumber) {
      case 1:
        setPayForMinutes(5)
        break
      case 2:
        setPayForMinutes(15)
        break
      case 3:
        setPayForMinutes(30)
        break
      case 4:
        setPayForMinutes(35)
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
        <option value="1" label="5" />
        <option value="2" label="15" />
        <option value="3" label="30" />
        <option value="4" label="35" />
      </datalist>
      </div>
      <div className='rangeToShow'>
        <p>5</p>
        <p>15</p>
        <p>30</p>
        <p>35</p>
        </div>
      {/* <h1>{payForMinutes}</h1> */}
    </div>
  )
}

export default TrafficSlider
