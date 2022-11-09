<template>
  <div class="row q-col-gutter-sm q-pa-sm justify-center">
    <div class="col-12 col-md-4" :key="index" v-for="prato, index in menu">
      <q-card class="fit">
        <q-card-section class="text-h5">
          {{ dias[index] }}
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-list bordered separator>
            <q-item>
              <q-item-section>
                <q-item-label overline>Principal</q-item-label>
                <q-item-label> {{ capitalize(prato.principal) }} </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label overline>Vegetariano</q-item-label>
                <q-item-label> {{ capitalize(prato.vegetariano) }} </q-item-label>
              </q-item-section>
            </q-item>

            <q-item :key="index+acompIndex" v-for="acompanhamento, acompIndex in filteredMenu[index]">
              <q-item-section>
                <q-item-label>
                  {{ capitalize(acompanhamento) }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'DisplayCardapio',
  props: ['menu'],
  setup (props) {
    const dias = ref(['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira'])

    function capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }

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

    return {
      dias,
      filteredMenu,
      capitalize
    }
  }
})
</script>
