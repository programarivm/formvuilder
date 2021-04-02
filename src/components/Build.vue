<template>
  <div>
    <md-button class="md-raised" @click="clickInput()">Input</md-button>
    <md-button class="md-raised">Select</md-button>
    <md-button class="md-raised">Textarea</md-button>
    <InputDialog />
  </div>
</template>

<script>
import InputDialog from './InputDialog.vue'
import inputActionTypes from '@/store/modules/input/constants'

export default {
  name: 'Build',
  components: {
    InputDialog
  },
  methods: {
    clickInput () {
      this.$store.dispatch('clickInput')
    }
  }
}
</script>
