import axios from "axios";
import { createStore } from "vuex";

const isDarkModeLocal = localStorage.getItem('darkMode') === 'true' ? true : false
const cartLocal = localStorage.getItem('cart')

const store = createStore({
    state: {
        isDarkMode: isDarkModeLocal,
        books: [],
        cart:  JSON.parse(cartLocal) || [],
        isLoading: false,
    },
    getters: {
        appName(state) {
            return state.appName
        },
        getMode(state) {
            return state.isDarkMode
        },
        getBooks(state) {
            return state.books
        },
        getCart(state) {
            return state.cart
        },
        getLoading(state) {
            return state.isLoading
        },
    },
    mutations: {
        changeMode(state, val) {
            state.isDarkMode = val
        },
        setBooks(state, payload) {
            state.books = payload
        },
        addBook(state, payload) {
            let cartUpdate = [...state.cart]
            let idx = cartUpdate.findIndex(item => item.id === payload.id)
            if(idx >= 0) {
                state.cart[idx].quantity += 1
            } else {
                let title = ((payload || {}).volumeInfo  || {}).title
                let id = payload.id
                let price = (((payload || {}).saleInfo || {}).retailPrice || {}).amount || 100
                let quantity = 1
                let img = (((payload || {}).volumeInfo || {}).imageLinks || {})
                .smallThumbnail
                let product =  {id, title, price, quantity, img}
                cartUpdate.push(product)
            }
            state.cart = cartUpdate
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        changeQuantity (state, info) {
            let {id, val} = info
            let idx = state.cart.findIndex(item => item.id === id)
            let cartUpdate = [...state.cart]

            if(val === -1 && cartUpdate[idx].quantity === 1) {
                cartUpdate.splice(idx, 1)
            } else {
                cartUpdate[idx].quantity += val
            }
            state.cart = cartUpdate
            localStorage.setItem('cart', JSON.stringify(state.cart))

        },
        setLoading(state, val) {
            state.isLoading = val
        }
    },
    actions: {
        async getBooksApi({commit}, keyword) {
            commit('setLoading', true)
            try {
                let res = await axios({
                    url: `https://www.googleapis.com/books/v1/volumes?q=${keyword}`,
                    method: "GET",
                });
                if(res && res.data) {
                    commit('setBooks', res.data.items)
                }
            } catch (e) {
                console.log(e);
            }
            commit('setLoading', false)
        },
    }
})
export default store