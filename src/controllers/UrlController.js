import axios from 'axios'
const localhost = 'http://localhost:3000'
export default class UrlController {
  constructor() {
   
  }

  async getAllFromUser(userId) {
    try {
      const res = await axios.get(`${localhost}/url/${userId}`)
     return res.data;
    } catch (err) {
      console.log(err)
      return false
    }
  }
  async getAll() {
    try {
      const res = await axios.get(`${localhost}/url`)
     return res.data;
    } catch (err) {
      console.log(err)
      return false
    }
  }
  async createUrl(url) {
    try {
      const res = await axios.post(`${localhost}/url`, {
        url:url
      })
     return res.data;
    } catch (err) {
      console.log(err)
      return false
    }
  }
  async accessUrl(url){
    try {
      const res = await axios.patch(`${localhost}/url/${url}`)
     return res.data;
    } catch (err) {
      console.log(err)
      return false
    }
  }
  async deleteUrl(id) {
    try {
      const res = await axios.delete(`${localhost}/url/${id}`)
     return res.data;
    } catch (err) {
      console.log(err)
      return false
    }
  }
}
