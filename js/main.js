window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementByIdId('navbar').style.padding = '10px 10px'
    document.getElementByIdId('logo').style.fontSize = '25px'
  } else {
    document.getElementByIdId('navbar').style.padding = '50px 10px'
    document.getElementByIdId('logo').style.fontSize = '35px'
  }
}