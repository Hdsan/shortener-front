import axios from 'axios'

const localhost = 'http://localhost:3000'
export default class AuthController {
  constructor() {}
  async sendLogin(user, password) {
    try {
      const res = await axios.post(`${localhost}/auth`, {
        user: user,
        password: password
      })
      if (res.status == 200) {
        return res.data
      } else {
        console.log('not')
        return false
      }
    } catch (err) {
      console.log(err)
      return false
    }
  }
}
