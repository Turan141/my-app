import '../../../Styles/Styles.scss'


const SocialApps = () => {
  const icons = [
    {
      name: 'facebook',
      icon: 'https://www.svgrepo.com/show/158427/facebook.svg',
      price: 20,
    },
    {
      name: 'vk',
      icon: 'https://www.svgrepo.com/show/349554/vk.svg',
      price: 20,
    },
    {
      name: 'odnoklassniki',
      icon: 'https://www.svgrepo.com/show/40575/odnoklassniki-logo.svg',
      price: 20,
    },
    {
      name: 'instagram',
      icon: 'https://www.svgrepo.com/show/111199/instagram.svg',
      price: 60,
    },
    {
      name: 'tiktok',
      icon: 'https://www.svgrepo.com/show/303260/tiktok-logo-logo.svg',
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
        <h2>Соцсети</h2>
      </div>
      
      <div className="socialMainDiv">
      <div className="leftColumn">
        <h1>Интернет</h1>
        <h2>Выберите пожалуйста желаемое количество интернет трафика</h2>
      </div>
        <div className="socialSecondaryDiv">{iconsMap}</div>
      </div>
    </>
  )
}

export default SocialApps
