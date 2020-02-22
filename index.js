String.prototype.sarcastic = function() {
  let index = 0

  return this.split('').reduce((str, char) => {
    str += index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()

    if (char.match(/[a-zA-Z]/)) {
      index++
    }

    return str
  }, '')
}
