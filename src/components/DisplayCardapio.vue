<template>
  <div class="row q-col-gutter-sm q-pa-sm justify-center">
    <div class="col-12 col-md-4">
      <card-menu v-if="hoje <= 4 && hoje >= 0" class="fit" title="Hoje" :main="menu[hoje]" :sides="filteredMenu[hoje]" />
    </div>
    <div class="col-12 col-md-4" :key="index" v-for="prato, index in menu">
      <card-menu class="fit" :title="dias[index]" :main="prato" :sides="filteredMenu[index]" />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, defineComponent, computed } from 'vue'
import CardMenu from './CardMenu.vue'

export default defineComponent({
  name: 'DisplayCardapio',
  props: ['menu'],
  components: {
    CardMenu
  },
  setup (props) {
    const dias = ref(['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira'])

    const filteredMenu = computed(() => {
      const filtered = []
      for (const item of props.menu) {
        const tempObj = {}
        for (let i = 1; i <= 6; i++) {
          if (item[`acompanhamento${i}`] !== '') {
            tempObj[`acompanhamento${i}`] = item[`acompanhamento${i}`]
          }
        }

        filtered.push(tempObj)
      }

      return filtered
    })

    const hoje = new Date().getDay() - 1

    return {
      hoje,
      dias,
      filteredMenu
    }
  }
})
</script>
