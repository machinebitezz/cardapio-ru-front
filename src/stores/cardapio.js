import { defineStore } from 'pinia'

export const useStore = defineStore('cardapio', {
  state: () => ({
    cardapio: {}
  }),

  actions: {
    set (payload) {
      Object.assign(this.cardapio, payload)
    }
  },

  getters: {
    getCardapio (state) {
      return state.cardapio
    }
  }
})
