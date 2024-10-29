const swiperfood = new Swiper('.swiper-food', {
    direction: 'horizontal',
    spaceBetween: 20,
    slidesOffsetAfter: 20,
    slidesOffsetBefore: 20,
    freeMode: true,
    slidesPerView: 'auto'
})

const swipercategory = new Swiper('.swiper-category', {
    direction: 'horizontal',
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
    freeMode: true,
    slidesPerView: 'auto'
})

const swipergallery = new Swiper('.swiper-food-gallery', {
    direction: 'horizontal',
    spaceBetween: 20,
    freeMode: true,
    slidesPerView: 'auto'
})