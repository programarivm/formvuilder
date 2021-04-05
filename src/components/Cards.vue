<template>
  <div>
    <div v-for="(item, i) in this.$store.state.input.items" :key="i">
      <InputCard :data="item" />
    </div>
  </div>
</template>

<style scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
import InputCard from './InputCard.vue'

export default {
  name: 'Cards',
  components: {
    InputCard
  }
}
</script>
