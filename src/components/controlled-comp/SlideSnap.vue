<template>
  <h1 class="font-weight-bold text-left text-danger px-5 pt-5">FLASH SALE</h1>
  <div class="images3 p-5">
    <div v-for="img in flashSaleImg" :key="img.id" class="img-item">
      <img :src="img.link" :alt="img.link" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flashSaleImg: [
        {
          id: 1,
          link: "https://www.fahasa.com/media/wysiwyg/Thang-03-2022/FS_T3_310x210.jpg",
        },
        {
          id: 2,
          link: "https://cdn0.fahasa.com/media/wysiwyg/Thang-03-2022/coupon_t3_310x210.jpg",
        },
        {
          id: 3,
          link: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/B2S-T11/310x210-303.jpg",
        },
        {
          id: 4,
          link: "https://cdn0.fahasa.com/media/wysiwyg/Thang-03-2022/Moca_thang3_310_x_210-100.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
$screen-md: 992px;
.img-item {
  border-radius: 10px;
  height: 220px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    box-shadow: 5px 5px 15px 5px #929292;
  }
}
.images3 {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
@media screen and (max-width: $screen-md) {
  .images3 {
    grid-template-columns: unset;
    grid-auto-flow: column; /* set direction to scroll*/
    grid-auto-columns: 40%; /* set width img */
    overflow-x: scroll;
    /* scroll snap for mobile smooth */
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;
    /* fix for case box-shadow hide;*/
    scroll-padding: 25px;
  }
  .images3 .img-item {
    scroll-snap-align: start; /* start, end, center */
  }
  /* css to hide scrollbar (optional) */
  .images3 {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .images3::-webkit-scrollbar {
    display: none;
  }
}
</style>
