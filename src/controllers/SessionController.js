export default class UrlController {
  constructor() {}
  
  setSession(user) {
    localStorage.setItem('logged', true)
    localStorage.setItem('user', user.user)
    localStorage.setItem('userId', user.id)
    localStorage.setItem('userName', user.name)
  }

  async getSession() {
    let logged = localStorage.getItem('logged')
    if (logged) {
      const user = localStorage.getItem('user')
      const userId = localStorage.getItem('userId')
      const name = localStorage.getItem('userName')

      const session = {userId,user,name}
      return session;
    }
        return false
    
  }

  logout() {
    localStorage.clear();

  }
}
