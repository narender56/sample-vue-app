'use strict'

Array.prototype.last = function() {
  return this[this.length - 1]
}

Array.prototype.first = function() {
  return this.length ? this[0] : undefined
}

Array.prototype.deepCopy = function(obj) {
  try {
    return JSON.parse(JSON.stringify(obj))
  } catch(err) {
    console.log({ err })
  }
}

window.onload = function() {}

window.onbeforeunload = function() {}

window.ls = {
  get(key) {
    return window.localStorage.getItem(key)
  },
  set(key, value) {
    return window.localStorage.setItem(key, value)
  },
  delete(key) {
    return window.localStorage.removeItem(key)
  }
}
