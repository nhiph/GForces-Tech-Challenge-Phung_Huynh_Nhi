<template>
  <footer class="py-4 px-0">
    <div class="container">
      <div class="row">
        <div
          v-for="info in footerInfo || []"
          :key="info.id"
          class="col-md-4 footer-column"
        >
          <ul class="nav flex-column">
            <li class="nav-item mb-3">
              <span class="text-uppercase text-white">{{ info.title }}</span>
            </li>
            <li
              v-for="child in info.data || []"
              :key="child.id"
              class="nav-item mb-2"
            >
              <a class="px-0 text-decoration-none" :href="child.link"
                ><i :class="child.icon" class="mr-2" v-if="child.icon"></i>
                {{ child.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="text-center text-white">
        <i class="fas fa-ellipsis-h"></i>
      </div>

      <div class="row text-center">
        <div
          v-for="(contact, index) in footerContact || []"
          :key="index"
          class="col-md-4 box"
        >
          <ul class="list-inline mb-0">
            <li
              v-for="(content, idx) in contact.content"
              :key="`${content}-${idx}`"
              class="list-inline-item"
            >
              <a href="#" class="text-decoration-none">
                <i v-if="index === 1" :class="content"></i>
                <span v-else>{{ content }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerInfo: [
        {
          id: 1,
          title: "Product",
          data: [
            {
              id: "1-1",
              name: "Product 1",
              link: "/",
            },
            {
              id: "1-2",
              name: "Product 2",
              link: "/",
            },
            {
              id: "1-3",
              name: "Plans & Prices",
              link: "/",
            },
            {
              id: "1-4",
              name: "Frequently asked questions",
              link: "/",
            },
          ],
        },
        {
          id: 2,
          title: "Company",
          data: [
            {
              id: "2-1",
              name: "About us",
              link: "/",
            },
            {
              id: "2-2",
              name: "Job postings",
              link: "/",
            },
            {
              id: "2-3",
              name: "News and articles",
              link: "/",
            },
          ],
        },
        {
          id: 3,
          title: "Contact",
          data: [
            {
              id: "3-1",
              icon: "fas fa-phone",
              name: "+47 45 80 80 80",
              link: "/",
            },
            {
              id: "3-2",
              icon: "fas fa-comments",
              name: "Live chat",
              link: "/",
            },
            {
              id: "3-3",
              icon: "fas fa-envelope",
              name: "Contact us",
              link: "/",
            },
            {
              id: "3-4",
              icon: "fas fa-star",
              name: "Give feedback",
              link: "/",
            },
          ],
        },
      ],
      footerContact: [
        { content: ["Copyright @ Your Website"] },
        {
          content: [
            "fab fa-twitter",
            "fab fa-facebook-f",
            "fab fa-linkedin-in",
          ],
        },
        {
          content: ["Privacy Policy", "Terms of Use"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$text-gray-main: #929292;
$text-gray-hover: #fec503;
$main-background: #1a294d;

footer {
  background: $main-background;
  ul {
    display: inline-block;
    @media (min-width: 768px) {
      text-align: left;
    }
    a {
      color: $text-gray-main;
      &:hover {
        color: $text-gray-hover;
      }
    }
  }
}
</style>
