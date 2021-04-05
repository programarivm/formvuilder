<template>
  <div>
    <md-button class="md-raised" @click="clickInput()">Input</md-button>
    <md-button class="md-raised">Select</md-button>
    <md-button class="md-raised">Textarea</md-button>
    <Cards />
    <InputDialog />
  </div>
</template>

<script>
import Cards from './Cards.vue'
import InputDialog from './InputDialog.vue'

export default {
  name: 'Build',
  components: {
    Cards,
    InputDialog
  },
  methods: {
    clickInput () {
      this.$store.dispatch('clickInput')
    }
  }
}
</script>
