document.addEventListener('DOMContentLoaded', () => {

  // Взял картинки из разных источников
  // (сайт GitHub Pages - https, картинки с сайта http
  // и браузер не даёт загружать смешанный контент)
  let imageSliderArr = [
    'https://99px.ru/sstorage/53/2017/12/tmb_215871_399815.png',
    'img/meme.jpg',
    'img/kotik-meme.jpg',
    'https://img1.joyreactor.com/pics/post/anime-art-girl-sword-1403085.jpeg'
  ]

  let slidesHtml = document.querySelector('.slides')
  let currentSlide = 1
  let imageSliderArrSum = imageSliderArr.length

  imageSliderArr.forEach((image, i) => {
    i == 0 ?
      slidesHtml.innerHTML += `<img class="active" src="${image}" alt="">` :
      slidesHtml.innerHTML += `<img src="${image}" alt="">`
  })

  slidesHtml.addEventListener('click', () => {
    let currentActive = document.querySelector('.active')

    currentActive.classList.remove('active')
    if (currentSlide == imageSliderArrSum) {
      document.querySelector('.slides img').classList.add('active')
      currentSlide = 1
    } else {
      currentActive.nextElementSibling.classList.add('active')
      currentSlide++
    }
  })

})
