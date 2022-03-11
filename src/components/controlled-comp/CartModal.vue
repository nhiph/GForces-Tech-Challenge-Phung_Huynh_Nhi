<template>
  <div>
    <a-modal width='80%' :visible="isShowModal" title="Your Cart" @ok="handleOk">
      <div class="content-cart" v-if="carts.length">
          <div v-for="(item, idx) in carts" :key="idx">
        <a-divider />
        <a-row>
          <a-col :span="6">
            <img :src="item.img" alt="" />
          </a-col>
          <a-col :span="6">
            <p>{{ item.title }}</p>
            <p>$ {{ item.price }}</p>
          </a-col>
          <a-col :span="8">
            <a-button @click="() => changeQuantityCart({id: item.id, val: -1})">-</a-button>
            <span class="mx-3">{{ item.quantity }}</span>
            <a-button @click="() => changeQuantityCart({id: item.id, val: 1})">+</a-button>
          </a-col>
          <a-col :span="4"> {{ item.quantity*item.price }} </a-col>
        </a-row>
      </div>
      <p class="text-right px-4">Total: {{ totalPrice }} </p>
      </div>
      <template v-else>
          <span>You need to choose product</span>
      </template>
    </a-modal>
  </div>
</template>
<script>
export default {
  props: {
    isShowModal: Boolean,
  },
  computed: {
      carts() {
      return this.$store.getters.getCart
    },
    totalPrice() {
        let totalCart = this.carts.reduce((total, item)=> {
            return total + item.quantity*item.price
        }, 0)
        return totalCart
    }
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.$emit("updateModal", true);
    },
    handleOk() {
      this.$emit("updateModal", false);
    },
    changeQuantityCart(info) {
        this.$store.commit('changeQuantity', info)
    },
  },
};
</script>
<style lang='scss' scoped>
.content-cart {
    height: 300px;
    overflow-y: auto;
    scrollbar-color: #d6d6d6 #fff;
    &::-webkit-scrollbar {
      width: 8px;
      cursor: pointer;
      &-track {
        background: #fff;
        border-radius: 4px;
      }
      &-thumb {
        background: #d6d6d6;
        cursor: pointer;
      }
    }
}
</style>
