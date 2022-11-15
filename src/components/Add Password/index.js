import {Component} from 'react'
import {v4} from 'uuid'
import ShowPasswords from '../Show Passwords'
import NotFound from '../Not Found'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class AddPassword extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    pwdList: [],
    searchInput: '',
    viewPwd: false,
  }

  togglePwdDisplay = () => {
    const {viewPwd} = this.state
    this.setState({viewPwd: !viewPwd})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  submitDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const pwdObj = {
      id: v4(),
      website,
      username,
      password,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      pwdList: [...prevState.pwdList, pwdObj],
      website: '',
      password: '',
      username: '',
    }))
  }

  onDelItem = id => {
    const {pwdList} = this.state
    const results = pwdList.filter(each => each.id !== id)
    this.setState({pwdList: results})
  }

  render() {
    const {
      website,
      username,
      password,
      pwdList,
      searchInput,
      viewPwd,
    } = this.state
    const filteredPwdList = pwdList.filter(eachPwd =>
      eachPwd.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = filteredPwdList.length
    return (
      <>
        <div className="card-bg">
          <div className="add-pwd-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="add-pwd-img"
            />
          </div>
          <form className="add-pwd-card" onSubmit={this.submitDetails}>
            <h1 className="add-pwd-heading">Add New Password</h1>
            <div className="input-container">
              <img
                className="input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                value={website}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-container">
              <img
                className="input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-container">
              <img
                className="input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="submit-btn">
              Add
            </button>
          </form>
        </div>
        <div className="card-pwd-bg">
          <div className="your-pwd-details-container">
            <div className="pwds-count-container">
              <h1 className="pwd-heading">Your Passwords</h1>
              <p className="pwd-count">{count}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="search"
                className="search-input"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="pwd-show-container">
            <input
              type="checkbox"
              id="checkbox"
              onClick={this.togglePwdDisplay}
            />
            <label htmlFor="checkbox" className="pwd-show-heading">
              Show Passwords
            </label>
          </div>
          {count === 0 ? (
            <NotFound />
          ) : (
            <ul className="pwd-list-container">
              {filteredPwdList.map(eachPwd => (
                <ShowPasswords
                  key={eachPwd.id}
                  details={eachPwd}
                  onDelItem={this.onDelItem}
                  viewPwd={viewPwd}
                />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default AddPassword
