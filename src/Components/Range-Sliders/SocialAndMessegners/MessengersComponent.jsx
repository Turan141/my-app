import '../../../Styles/Styles.scss'


const MessengerComp = () => {
  const icons = [
    {
      name: 'whatsapp',
      icon: 'https://www.svgrepo.com/show/349563/whatsapp.svg',
      price: 20,
    },
    {
      name: 'discord',
      icon: 'https://www.svgrepo.com/show/331368/discord-v2.svg',
      price: 20,
    },
    {
      name: 'viber',
      icon: 'https://www.svgrepo.com/show/125448/viber.svg',
      price: 20,
    },
    {
      name: 'wechat',
      icon: 'https://www.svgrepo.com/show/349560/wechat.svg',
      price: 60,
    },
    {
      name: 'telegram',
      icon: 'https://www.svgrepo.com/show/349527/telegram.svg',
      price: 60,
    },
  ]

  const iconsMap = icons.map((elem) => {
    return (
      <div className="iconMapsDiv" key={elem.name}>
        <div className="socialIcons">
          <img src={elem.icon} alt={elem.name} />
        </div>
        <div className="socialPrice">
          <p>{elem.price}</p>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="socialHeaderName">
        <h2>Мессенджеры</h2>
      </div>
      
      <div className="socialMainDiv">
      <div className="leftColumn">
        <h1>Мессенджеры</h1>
        <h2>Выберите пожалуйста желаемые мессенджеры</h2>
      </div>
        <div className="socialSecondaryDiv">{iconsMap}</div>
      </div>
    </>
  )
}

export default MessengerComp
