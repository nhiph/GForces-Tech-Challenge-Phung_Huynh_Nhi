<template>
  <div class="img-card text-left" :class="{ 'dark-mode-card': isDarkMode }">
    <div class="card-image">
      <span class="card-title font-weight-bold">{{
        ((book || {}).volumeInfo || {}).title
      }}</span>
      <img
        :src="(((book || {}).volumeInfo || {}).imageLinks || {}).smallThumbnail"
      />
    </div>
    <p
      class="px-3 truncase description"
      :title="((book || {}).volumeInfo || {}).description"
    >
      {{ ((book || {}).volumeInfo || {}).description }}
    </p>
    <div class="card-link px-3 py-4">
      <a href="#" title="Read Full">
        <a-rate
          :value="((book || {}).volumeInfo || {}).averageRating"
          disabled
        /><br />
        <div class="mt-3 d-flex justify-content-between align-items-center">
          <router-link :to="`/book/${book.id}`">View detail</router-link>
          <a-button type="primary" @click="() => addToCart(book)"
            >Add to cart</a-button
          >
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    book: Object,
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.getMode;
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    addToCart(book) {
      this.$store.commit("addBook", book);
    },
  },
};
</script>

<style lang="scss" scoped>
$text-gray-hover: #fec503;
.img-card {
  position: relative;
  border-radius: 5px;
  box-shadow: 5px 2px 19px 3px rgba(0, 0, 0, 0.36);
  .card-image {
    overflow: hidden;
    border-radius: 5px 5px 0px 0px;
    height: 200px;
    .card-title {
      position: absolute;
      left: 5px;
      color: $text-gray-hover;
      transition: 0.3s;
    }
    img {
      width: 100%;
      transition: 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .card-link {
    border-top: 1px solid #d6d6d6;
  }
  .truncase {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .description {
    height: 44px;
  }
}
.dark-mode-card {
  background: #fafafa;
}
</style>
