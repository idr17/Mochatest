const assert = require('assert');
const LoginController = require('../controller/auth.controller')

before('Load User List', () => {
  const users = LoginController.loadUserList(['abc123','xyz321'])
  assert.equal(users.length, 2);
})

after('Clear User List', () => {
  const users = LoginController.clearUserList()
  assert.equal(users.length, 0);
})

describe('Auth test', () => {

  // Sync auth scenario
  it('Should return true if valid userId sync ', () => {
    const isValid = LoginController.isValidUserId('abc123')
    assert.equal(isValid, true)
  })

  // Async auth scenario
  it('Should return true if valid userId async ', done => {
    LoginController.isValidUserIdAsync('abc123', (isValid) => {
      assert.equal(isValid, true)
      done()
    })
  })

})