import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        aPoints: [
        ],
        bPoints: [
        ],
        turn: true,
        countA: 0,
        countB: 0,
    },
    getters: {
        aPoints: state => state.aPoints,
        bPoints: state => state.bPoints,
        turn: state => state.turn,
        countA: state => state.countA,
        countB: state => state.countB,
    },
    actions: {
        selectAPoint(store, {pointID, value}){
            store.commit('setAPoint', {pointID, value})
        },
        selectBPoint(store, {pointID, value}){
            store.commit('setBPoint', {pointID, value})
        },
        changeTurn(store, ){
            store.commit('changeTurn')
        }
    },
    mutations: {
        setAPoint(state, {pointID, value}){
            Vue.set(state.aPoints, pointID, value)
        },
        setBPoint(state, {pointID, value}){
            Vue.set(state.bPoints, pointID, value)
        },
        changeTurn(state){
            state.turn = !state.turn
        }
    }
})