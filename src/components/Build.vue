<template>
  <div>
    <md-button class="md-raised">Input</md-button>
    <md-button class="md-raised">Select</md-button>
    <md-button class="md-raised">Textarea</md-button>
    <InputDialog />
  </div>
</template>

<script>
import InputDialog from './InputDialog.vue'

export default {
  name: 'Build',
  components: {
    InputDialog
  }
}
</script>
