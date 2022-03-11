import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'; 
import {Button, Modal, Pagination, BackTop, Rate, Carousel, Row, Col, Menu, SubMenu, Switch, Descriptions, DescriptionsItem, Divider} from 'ant-design-vue'

const app = createApp(App);
app.config.productionTip = false;
app.use(Button);
app.use(Modal);
app.use(Pagination);
app.use(BackTop);
app.use(Rate);
app.use(Carousel);
app.use(Row);
app.use(Col);
app.use(Menu);
app.use(SubMenu);
app.use(Switch);
app.use(Modal);
app.use(Descriptions);
app.use(DescriptionsItem);
app.use(Divider);

app.use(router);
app.use(store);
app.mount('#app')