<template>
    <a-carousel autoplay>
    <div class="d-flex justify-content-center" v-for="carousel in carousels" :key='carousel.id'><img :src='carousel.link' /></div>
  </a-carousel>
</template>

<script>
export default {
    data() {
        return {
            carousels: [
                {id: 1, link: 'https://cdn0.fahasa.com/media/magentothem/banner7/920_monthly_sale_t3.jpg'},
                {id: 2, link: 'https://cdn0.fahasa.com/media/magentothem/banner7/920x420_T3_2022.png'},
                {id: 3, link: 'https://cdn0.fahasa.com/media/magentothem/banner7/manga_920_x_420-t3.jpg'},
                {id: 4, link: 'https://cdn0.fahasa.com/media/magentothem/banner7/920X420-100.jpg'},
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
.ant-carousel :deep(.slick-slide) {
  height: 450px;
  line-height: 160px;
  line-height: 160px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.ant-carousel :deep(.slick-dots li button) {
    background: blue;
}
.ant-carousel :deep(.slick-dots li.slick-active button) {
    background: orange;
}
.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>