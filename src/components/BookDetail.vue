<template>
  <div class="px-5 my-5">
    <div class="d-flex justify-content-end">
      <a-button @click="() => addToCart(book)" type="primary"
        >Add to cart</a-button
      >
    </div>
    <a-descriptions
      :title="((bookDetail || {}).volumeInfo || {}).title"
      bordered
      :class="{ 'dark-mode-detail': isDarkMode }"
    >
      <a-descriptions-item label="Subtitle">{{
        ((bookDetail || {}).volumeInfo || {}).subtitle
      }}</a-descriptions-item>
      <a-descriptions-item label="Page">{{
        ((bookDetail || {}).volumeInfo || {}).pageCount
      }}</a-descriptions-item>
      <a-descriptions-item label="Published Date">{{
        ((bookDetail || {}).volumeInfo || {}).publishedDate
      }}</a-descriptions-item>
      <a-descriptions-item label="Image">
        <img
          :src="
            (((bookDetail || {}).volumeInfo || {}).imageLinks || {})
              .smallThumbnail
          "
        />
      </a-descriptions-item>
      <a-descriptions-item label="Retail Price" :span="2">
        {{
          (((bookDetail || {}).saleInfo || {}).retailPrice || {}).amount ||
          "Not for sale"
        }}
        VND
      </a-descriptions-item>
      <a-descriptions-item label="Rating" :span="3">
        <a-rate
          :value="((bookDetail || {}).volumeInfo || {}).ratingsCount"
          disabled
        />
      </a-descriptions-item>
      <a-descriptions-item label="Description">
        <div v-html="((bookDetail || {}).volumeInfo || {}).description"></div>
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>
<script>
import axios from "axios";
import { DOMAIN } from '@/common';

export default {
  computed: {
    isDarkMode() {
      return this.$store.getters.getMode;
    },
  },
  data() {
    return {
      bookDetail: {},
    };
  },
  mounted() {
    if (this.$route.params.bookId) {
      this.getBookDetail(this.$route.params.bookId);
    }
  },
  methods: {
    addToCart(book) {
      this.$store.commit("addBook", book);
    },
    async getBookDetail(id) {
      try {
        let res = await axios({
          url: `${DOMAIN}/v1/volumes/${id}`,
          method: "GET",
        });
        if (res && res.data) {
          this.bookDetail = res.data;
          console.log("this.bookDetail", this.bookDetail);
        }
      } catch (e) {
        this.$router.push('/books')
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$bg-detail: #fff;

.dark-mode-detail {
  background: $bg-detail;
}
</style>
