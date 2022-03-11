<template>
  <div class="book-view">
    <!-- categories && carousel -->
    <h1 class="font-weight-bold text-left text-danger p-5">OUTSTANDING COUPONS</h1>
    <a-row class="m-4 mt-0 wrapper-carousel rounded-sm">
      <a-col :span="5"><Sidebar /></a-col>
      <a-col :span="19" class="p-3"><Carousel /></a-col>
    </a-row>
    <!-- flash sale slide snap -->
    <SlideSnap />
    <!-- books view -->
    <h1 class="font-weight-bold text-left text-danger px-5 pt-5">BOOK VIEW</h1>
    <div class="wrapper-books p-5">
      <Product v-for="book in books" :key="book.id" :book="book" />
    </div>
    <BackTop />
  </div>
</template>

<script>
import Product from "./controlled-comp/Product.vue"
import Carousel from './controlled-comp/Carousel.vue'
import Sidebar from './controlled-comp/Sidebar.vue'
import BackTop from './controlled-comp/BackTop.vue'
import SlideSnap from './controlled-comp/SlideSnap.vue'

export default {
  name: "book-view",
  components: {
    Product, Carousel, Sidebar, BackTop, SlideSnap,
  },
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.getMode
    },
    books() {
      return this.$store.getters.getBooks
    }
  },
  data() {
    return {
      searchText: '',
    };
  },
}
</script>
<style lang="scss" scoped>
.wrapper-books {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.wrapper-carousel {
  background: oldlace;
  box-shadow: 0px 2px 9px 3px rgba(0, 0, 0, 0.36);
}
</style>
