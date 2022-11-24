<template>
  <q-dialog>
    <q-card class="q-pa-sm">
      <q-card-section>
        <div class="text-h5">Sobre</div>
      </q-card-section>
      <q-card-section>
        <div class="text-justify">
          Desenvolvido por Gustavo Corrêa Rodrigues, bacharelando em Ciência da Computação na UFPA com o objetivo de praticar desenvolvimento web e prover uma maneira alternativa, e potencialmente mais prática, de consultar o cardápio do RU UFPA à comunidade academica.
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="text-h6">Stack:</div>
        <div>
          No frontend:
          <ul>
            <li><a href="https://vuejs.org" target="_blank">Vue 3</a></li>
            <li><a href="https://quasar.dev" target="_blank">Quasar Framework</a></li>
            <li><a href="https://pinia.vuejs.org" target="_blank">Pinia</a></li>
            <li><a href="https://materialdesignicons.com" target="_blank">Material Design Icons</a></li>
          </ul>

          No backend:
          <ul>
            <li><a href="https://axios-http.com/" target="_blank">Axios</a></li>
            <li><a href="https://expressjs.com/pt-br/" target="_blank">ExpressJs</a></li>
            <li><a href="https://nodejs.org/" target="_blank">NodeJs</a></li>
          </ul>

          Para hosting:
          <ul>
            <li>Do backend: <a href="https://deta.sh/" target="_blank">Deta</a></li>
            <li>Do frontend: <a href="https://vercel.com" target="_blank">Vercel</a></li>
          </ul>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup () {
    return {}
  }
}
</script>
