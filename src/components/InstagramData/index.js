import './index.css'

const InstagramData = props => {
  const {instagramDetails, DeleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = instagramDetails

  const onDelete = () => {
    DeleteUser(id)
  }
  return (
    <div className="white-container">
      <li>
        <div className="flex-Container">
          <p className="time">{timeAccessed}</p>
          <img className="logoImage" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domainurl">{domainUrl}</p>
        </div>
      </li>
      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </div>
  )
}

export default InstagramData
