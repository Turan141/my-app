import '../../../Styles/Styles.scss'
import { useState } from 'react'

const SocialApps = ({ type, icons, setPayForSocial }) => {
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
          facebook: (social.facebook = !social.facebook),
        })
        break
      case 'vk':
        setSocial({
          ...social,
          vk: (social.vk = !social.vk),
        })
        break
      case 'odnoklassniki':
        setSocial({
          ...social,
          odnoklassniki: (social.odnoklassniki = !social.odnoklassniki),
        })
        break
      case 'instagram':
        setSocial({
          ...social,
          instagram: (social.instagram = !social.instagram),
        })
        break
      case 'tiktok':
        setSocial({
          ...social,
          tiktok: (social.tiktok = !social.tiktok),
        })
        break
      case 'whatsapp':
        setSocial({
          ...social,
          whatsapp: (social.whatsapp = !social.whatsapp),
        })
        break
      case 'discord':
        setSocial({
          ...social,
          discord: (social.discord = !social.discord),
        })
        break
      case 'viber':
        setSocial({
          ...social,
          viber: (social.viber = !social.viber),
        })
        break
      case 'wechat':
        setSocial({
          ...social,
          wechat: (social.wechat = !social.wechat),
        })
        break
      case 'telegram':
        setSocial({
          ...social,
          telegram: (social.telegram = !social.telegram),
        })
        break

      default:
        return 'sometig bad'
    }
  }

  const setPayment = (sc) => {
    social[sc.name]
      ? setPayForSocial((prev) => prev + Number(sc.price))
      : setPayForSocial((prev) => prev - Number(sc.price))
  }

  const iconsMap = icons.map((elem) => {
    return (
      <div className="iconMapsDiv" key={elem.name}>
        <div
          className={
            social[elem.name] ? 'socialIconsActive' : 'socialIconsDeactive'
          }
        >
          <img
            src={elem.icon}
            alt={elem.name}
            onClick={() => {
              addExtra(elem)
              setPayment(elem)
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
