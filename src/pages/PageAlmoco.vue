<template>
  <q-page class="flex flex-center">
    <display-cardapio :menu="cardapio.almoco" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from '../stores/cardapio.js'
import DisplayCardapio from 'components/DisplayCardapio.vue'

export default defineComponent({
  name: 'PageAlmoço',
  components: {
    DisplayCardapio
  },

  setup () {
    const store = useStore()
    const cardapio = store.getCardapio

    return {
      cardapio
    }
  }
})
</script>
