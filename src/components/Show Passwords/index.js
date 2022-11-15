/* eslint-disable react/no-unknown-property */
import './index.css'

const ShowPasswords = props => {
  const {details, onDelItem, viewPwd} = props
  const {website, username, password, id, initialClassName} = details

  const onDelPwd = () => {
    onDelItem(id)
  }
  //   const stars = () => (
  //     <img
  //       src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
  //       alt="stars"
  //     />
  //   )
  //   const pElement = () => <p className="list-para">{password}</p>

  return (
    <li className="pwd-list-item">
      <div className="pwd-list-details">
        <p className={`dp ${initialClassName}`}>{username[0].toUpperCase()}</p>
        <div className="pwd-list-names">
          <p className="list-para">{website}</p>
          <p className="list-para">{username}</p>
          {viewPwd ? (
            <p className="list-para">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-img"
            />
          )}
        </div>
      </div>

      <button
        className="del-btn"
        type="button"
        testid="delete"
        onClick={onDelPwd}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="del-icon"
        />
      </button>
    </li>
  )
}

export default ShowPasswords
