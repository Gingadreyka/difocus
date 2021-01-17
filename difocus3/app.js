document.addEventListener('DOMContentLoaded', () => {

  let imageSlider = [
    'http://newshop.kupikupi.org/alboms/3/195/00002.jpeg',
    'http://newshop.kupikupi.org/alboms/3/193/00006.jpeg',
    'http://newshop.kupikupi.org/alboms/3/140/60-375.jpeg',
    'http://img1.joyreactor.com/pics/post/anime-art-girl-sword-1403085.jpeg'
  ]

  let slidesHtml = document.querySelector('.slides')
  let currentSlide = 1
  let imageSliderSum = imageSlider.length

  imageSlider.forEach((image, i) => {
    i == 0 ?
      slidesHtml.innerHTML += `<img class="active" src="${image}" alt="">` :
      slidesHtml.innerHTML += `<img src="${image}" alt="">`
  })

  slidesHtml.addEventListener('click', () => {
    let currentActive = document.querySelector('.active')

    currentActive.classList.remove('active')
    if (currentSlide == imageSliderSum) {
      document.querySelector('.slides img').classList.add('active')
      currentSlide = 1
    } else {
      currentActive.nextElementSibling.classList.add('active')
      currentSlide++
    }
  })

})
