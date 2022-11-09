<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white q-pt-xs" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          Cardápio
        </q-toolbar-title>

        <q-btn :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'" round flat @click="$q.dark.toggle" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/almoco" label="Almoço" />
        <q-route-tab to="/jantar" label="Jantar" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar class="flex flex-center column">
        <div>Desenvolvido por <a href="https://github.com/machinebitezz">@machinebitezz</a>, com amor &hearts;</div>
        <div style="font-size: 10px; opacity: 0.7">Este site não possui afiliação ao RU UFPA ou à UFPA. Gustavo Rodrigues &copy; 2022</div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import { useStore } from '../stores/cardapio.js'
import { useQuasar } from 'quasar'
import axios from 'axios'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const store = useStore()
    const $q = useQuasar()

    onMounted(async () => {
      $q.loading.show()
      const menu = (await axios.get('https://4i7g44.deta.dev/')).data.cardapio
      // console.log(menu)
      const cardapio = {
        almoco: [],
        jantar: []
      }

      console.log(menu)
      for (let i = 0; i < 10; i++) {
        if (menu[`cardapio${i}`].horaInicio === '11:00') {
          cardapio.almoco.push(menu[`cardapio${i}`])
        } else {
          cardapio.jantar.push(menu[`cardapio${i}`])
        }
      }

      store.set(cardapio)
      $q.loading.hide()
    })

    return {
      store: store.cardapio
    }
  }
})
</script>
