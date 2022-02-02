function set(cell, press) {
  document.getElementById(cell).innerHTML = press
}
let ent = ['']
let n = 1
function key(press) {
  if (n < 6) {
    press = press.toUpperCase()
    set(String(n), press)
    ent[n - 1] = press
    n = n + 1
    go(press)
  }
}
function go(item) {
  $('ol').append('<li>' + item + '</li>')
}
