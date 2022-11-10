<template>
  <q-card>
    <q-card-section class="text-h5">
      {{ title }} - {{ main.horaInicio }} até {{ main.horaFim }}
    </q-card-section>

    <q-separator />

    <q-card-section v-if="main.cancelado === 'NAO'">
      <q-list bordered separator>
        <q-item>
          <q-item-section>
            <q-item-label overline>Principal</q-item-label>
            <q-item-label> {{ capitalize(main.principal) }} </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline>Vegetariano</q-item-label>
            <q-item-label> {{ capitalize(main.vegetariano) }} </q-item-label>
          </q-item-section>
        </q-item>

        <q-item :key="acompIndex" v-for="acompanhamento, acompIndex in sides">
          <q-item-section>
            <q-item-label>
              {{ capitalize(acompanhamento) }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

    </q-card-section>

    <q-card-section class="text-center text-h6" v-else>
      <div>O RU não funcionará nesse horário 😢</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['title', 'main', 'sides'],
  setup () {
    function capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }

    return {
      capitalize
    }
  }
}
</script>
