<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white q-pt-xs" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="mdi-food-drumstick" size="md" color="white" />
          </q-avatar>
          Cardápio RU UFPA
        </q-toolbar-title>

        <q-btn :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'" round flat @click="$q.dark.toggle" />
        <q-btn icon="help" round flat @click="createDialog" />
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
        <div>Desenvolvido por <a target="_blank" href="https://linktree.com/machinebitezz">@machinebitezz</a>, com amor &hearts;</div>
        <div style="font-size: 10px; opacity: 0.7">Este site não possui afiliação ao RU UFPA ou à UFPA. Gustavo Rodrigues &copy; 2022</div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import { useStore } from '../stores/cardapio.js'
import { useQuasar } from 'quasar'
import DialogSobre from '../components/DialogSobre.vue'
import axios from 'axios'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const store = useStore()
    const $q = useQuasar()

    onMounted(async () => {
      $q.loading.show()
      const menu = (await axios.get('https://cardapioruback-1-a4608481.deta.app/')).data.cardapio
      const cardapio = {
        almoco: [],
        jantar: []
      }
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

    function createDialog () {
      $q.dialog({
        component: DialogSobre
      })
    }

    return {
      store: store.cardapio,
      createDialog
    }
  }
})
</script>
