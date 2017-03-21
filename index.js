function getFirstSelector(selector) {
  var answer = document.querySelector(selector)

  return answer
}

function nestedTarget() {
  var answer = document.querySelector('#nested .target')

  return answer
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
}

function deepestChild() {
  var start = document.querySelector('#grand-node')
  var child = start.children[0]

  while(child) {
    start = child
    child = start.children[0]
  }

  return start
}