<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 100%; background: oldlace"
    mode="vertical"
  >
    <a-sub-menu v-for="category in categories" :key="category.id">
      <template #title><span @click="() => sortCate(category.keyword)">{{ category.cate }}</span></template>
      <a-menu-item v-for='subcate in category.subCate' :key="subcate.id">
        <span @click="() => sortCate(category.keyword)">{{ subcate.title }}</span>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>

</template>
<script>
import { reactive, toRefs } from "vue";

export default {
  data() {
    return {
      ...toRefs(
        reactive({
          selectedKeys: [],
          openKeys: [],
        })
      ),
      categories: [
        {
          id: 1,
          cate: "National Books",
          keyword: 'national',
          subCate: [
            { id: "1-1", title: "National Books 1" },
            { id: "1-2", title: "National Books 2" },
            { id: "1-3", title: "National Books 3" },
            { id: "1-4", title: "National Books 4" },
          ],
        },
        {
          id: 2,
          cate: "Foreign Books",
          keyword: 'foreign',
          subCate: [
            { id: "2-1", title: "Foreign Books 1" },
            { id: "2-2", title: "Foreign Books 2" },
            { id: "2-3", title: "Foreign Books 3" },
            { id: "2-4", title: "Foreign Books 4" },
          ],
        },
        {
          id: 3,
          cate: "Toys",
          keyword: 'toys', 
          subCate: [
            { id: "3-1", title: "Toys Books 1" },
            { id: "3-2", title: "Toys Books 2" },
            { id: "3-3", title: "Toys Books 3" },
            { id: "3-4", title: "Toys Books 4" },
          ],
        },
        {
          id: 4,
          cate: "Stationery Tools",
          keyword: 'stationery', 
          subCate: [
            { id: "4-1", title: "stationery tools 1" },
            { id: "4-2", title: "stationery tools 2" },
            { id: "4-3", title: "stationery tools 3" },
            { id: "4-4", title: "stationery tools 4" },
          ],
        },
        {
          id: 5,
          cate: "Textbook",
          keyword: 'textbook', 
          subCate: [
            { id: "5-1", title: "Textbook 1" },
            { id: "5-2", title: "Textbook 2" },
            { id: "5-3", title: "Textbook 3" },
            { id: "5-4", title: "Textbook 4" },
          ],
        },
        {
          id: 6,
          cate: "Department and Store",
          keyword: 'department', 
          subCate: [
            { id: "6-1", title: "Department and Store Books 1" },
            { id: "6-2", title: "Department and Store Books 2" },
            { id: "6-3", title: "Department and Store Books 3" },
            { id: "6-4", title: "Department and Store Books 4" },
          ],
        },
        {
          id: 7,
          cate: "Toys By Brand",
          keyword: 'toy', 
          subCate: [
            { id: "7-1", title: "Toys By Brand 1" },
            { id: "7-2", title: "Toys By Brand 2" },
            { id: "7-3", title: "Toys By Brand 3" },
            { id: "7-4", title: "Toys By Brand 4" },
          ],
        },
        {
          id: 8,
          cate: "Novels",
          keyword: 'novel', 
          subCate: [
            { id: "8-1", title: "Novels Books 1" },
            { id: "8-2", title: "Novels Books 2" },
            { id: "8-3", title: "Novels Books 3" },
            { id: "8-4", title: "Novels Books 4" },
          ],
        },
      ],
    };
  },
  methods: {
    sortCate(keyword) {
      this.$store.dispatch("getBooksApi", keyword);
    }
  },
};
</script>
