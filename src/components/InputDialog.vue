<template>
  <div>
    <md-dialog :md-active.sync="$store.state.input.open">
      <md-dialog-title>Input</md-dialog-title>
      <InputForm />
      <md-dialog-actions>
        <md-button class="md-primary" @click="cancelInput()">Cancel</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  import InputForm from './InputForm.vue'

  export default {
    name: 'InputDialog',
    components: {
      InputForm
    },
    methods: {
      cancelInput () {
        this.$store.dispatch('cancelInput')
      }
    }
  }
</script>

<style scoped>
  .md-dialog /deep/.md-dialog-container {
    max-width: 768px;
  }
</style>
