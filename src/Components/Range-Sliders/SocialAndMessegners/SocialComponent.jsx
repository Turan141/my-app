import '../../../Styles/Styles.scss'
import { useState, useEffect } from 'react'

const SocialApps = ({ type, icons }) => {
  const iconsMap = icons.map((elem) => {
    return (
      <div className="iconMapsDiv" key={elem.name}>
        <div className="socialIcons">
          <img
            src={elem.icon}
            alt={elem.name}
            onClick={() => console.log(elem)}
          />
        </div>
        <div className="socialPrice">
          <p>{elem.price}</p>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="socialMainDiv">
        <div className="leftColumn">
          <h1>{type}</h1>
          <h2>Выберите пожалуйста желаемые соцсети</h2>
        </div>
        <div className="socialSecondaryDiv">{iconsMap}</div>
      </div>
    </>
  )
}

export default SocialApps
