function LoginController () {
  
  let userList = []

  function loadUserList (users) {
    userList = users
    return userList
  }

  function clearUserList () {
    userList = []
    return userList
  }

  // sync auth scenario
  function isValidUserId(user) {
    return userList.indexOf(user) >= 0
  }

  // async auth scenario
  function isValidUserIdAsync(user, callback) {
    setTimeout(() => {
      callback(userList.indexOf(user) >= 0)
    }, 1)
  }

  return { loadUserList, isValidUserId, isValidUserIdAsync, clearUserList }
}

module.exports = LoginController()