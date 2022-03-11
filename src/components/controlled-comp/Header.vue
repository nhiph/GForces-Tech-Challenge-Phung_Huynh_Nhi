<template>
  <header>
    <!-- promotion -->
    <div class="coupon">
      <img
        class="py-3"
        src="../../assets/1263x60_monthly_sale_t3.jpg"
        alt="coupon"
      />
    </div>
    <!-- search and cart -->
    <div class="search-bar py-1 px-5">
      <img src="../../assets/book.png" alt="logo" />
      <input
        v-model="searchText"
        @keypress.enter="debouncedSearch"
        placeholder="Search for products"
        name="searchText"
        class="search-text px-4"
      />
      <div class="wrapper-user-info">
        <span class="mr-3"><img src="../../assets/noti.png" alt="" /></span>
        <span @click="() => isShowModal = true" class="mr-3 cart">
            <img src="../../assets/cart.png" alt="noti" />
            <span class="count font-weight-bold">{{ (this.carts || []).length }}</span>
        </span>

        <span class="mr-3"><img src="../../assets/signout.jpg" alt="signout" /></span>
        <a-switch v-model:checked='isDarkMode' @change="onChange" />
      </div>
    </div>
  </header>
  <CartModal :isShowModal='isShowModal' @updateModal='updateModal'/>
</template>
<script>
import _ from 'lodash'
import CartModal from '../controlled-comp/CartModal.vue'
export default {
  components: { CartModal },
  data() {
    return {
      isShowModal: false,
      searchText: "",
      debouncedSearch: _.debounce(this.getBooks, 1000)
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.getMode
    },
    carts() {
      return this.$store.getters.getCart
    },
  },
   methods: {
     updateModal(val) {
       this.isShowModal = val
     }, 
    onChange(checked) {
      localStorage.setItem('darkMode', checked)
      this.$store.commit('changeMode', checked)
    },
    getBooks() {
      if(!this.searchText.trim()) return
      this.$store.dispatch('getBooksApi', this.searchText)
    }
  },
};
</script>

<style lang="scss" scoped>
$text-gray-hover: #fec503;

header {
  .coupon {
    background: #1a294d;
    img {
        width: 100%;
    }
  }
  .search-bar {
    background: $text-gray-hover;
    box-shadow: 5px 2px 19px 3px rgba(0, 0, 0, 0.36);
    display: flex;
    gap: 30px;
    align-items: center;
    img {
      width: 100px;
    }
    .search-text {
      border: 2px solid $text-gray-hover;
      border-radius: 4px;
      outline: none;
      height: 50px;
      flex: 1;
    }
    .wrapper-user-info {
      span {
        cursor: pointer;
        img {
          width: 50px;
        }
      }
      .cart {
        position: relative;
        .count {
            position: absolute;
            color: red;
            z-index: 2;
        }
      }
    }
  }
}
</style>
