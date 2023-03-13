export default class UrlController {
  constructor() {}
  
  setSession(user) {
    console.log(user)
    localStorage.setItem('logged', true)
    localStorage.setItem('user', user.user)
    localStorage.setItem('userId', user.id)
    localStorage.setItem('userName', user.name)
  }

  getSession() {
    let logged = localStorage.getItem('logged')
    if (logged) {
      const user = localStorage.setItem('user')
      const userId = localStorage.setItem('userId')
      const name = localStorage.setItem('userName')

      const session = {userId,user,name}
      return session;
    }
        return false
    
  }

  logout() {
    localStorage.clear();

  }
}
