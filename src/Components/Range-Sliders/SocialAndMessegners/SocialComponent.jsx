import '../../../Styles/Styles.scss'
import { useState, useEffect } from 'react'

const SocialApps = ({ type, icons }) => {
  const [social, setSocial] = useState({
    facebook: false,
    vkontakte: false,
    odnoklassniki: false,
    instagram: false,
    tiktok: false,
  })

  function addExtra(elem) {
    switch (elem.name) {
      case 'facebook':
        setSocial({
          ...social,
          facebook: social.facebook = !social.facebook,
        })
        break
      case 'vk':
        setSocial({
          ...social,
          vk: social.vk = !social.vk,
        })
        break
      case 'odnoklassniki':
        setSocial({
          ...social,
          odnoklassniki: social.odnoklassniki === false ? true : false,
        })
        break
      case 'instagram':
        setSocial({
          ...social,
          instagram: social.instagram === false ? true : false,
        })
        break
      case 'tiktok':
        setSocial({
          ...social,
          tiktok: social.tiktok === false ? true : false,
        })
        break
      default:
        return 'sometig bad'
    }
  }
  const iconsMap = icons.map((elem) => {
    return (
      <div className="iconMapsDiv" key={elem.name}>
        <div className={social.elem ? "socialIconsActive" : "socialIconsDeactive"}>
          <img
            src={elem.icon}
            alt={elem.name}
            onClick={() => {
              addExtra(elem)
              console.log(elem)
              console.log(social{elem})

            }}
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
          <h2>Выберите пожалуйста желаемые {type}</h2>
        </div>
        <div className="socialSecondaryDiv">{iconsMap}</div>
      </div>
    </>
  )
}

export default SocialApps
