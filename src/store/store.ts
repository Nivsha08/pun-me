import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

const store: any = new Vuex.Store({
    state: {
        loading: false,
        joke: ""
    },
    getters: {
        getLoading: state => state.loading,
        getJoke: state => state.joke
    },
    mutations: {
        SET_LOADING: (state, payload) => state.loading = payload,
        SET_JOKE: (state, payload) => state.joke = payload,
    },
    actions: {
        setLoading: ({commit}, payload) => commit('SET_LOADING', payload),
        setJoke: ({commit}, payload) => commit('SET_JOKE', payload)
    }
})

export default store;