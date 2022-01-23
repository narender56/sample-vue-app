const cookies = {
  get: (cookieName) => {
    const name = cookieName + '='
    const cookiesArr = document.cookie.split(';')
    for (let i = 0; i < cookiesArr.length; i++) {
      let c = cookiesArr[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  },

  set: (cookieName, cookieValue, expiration) => {
    document.cookie = `${cookieName}=${cookieValue}; max-age=${expiration}; path=/`
  },

  delete: (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`
  }
}

export default cookies
