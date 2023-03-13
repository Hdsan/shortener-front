import axios from 'axios'
const localhost = 'http://localhost:3000'
export default class UrlController {
  constructor() {
   
  }

  async getAllFromUser(userId) {
    try {
      const res = await axios.post(`${localhost}/url`, {
        id: userId,
      })
      console.log(res)
     return res;
    } catch (err) {
      console.log(err)
      return false
    }
  }
}
