<template>
  <div>
    <md-card>
      <md-card-content>
        {{ data.label }}
        <input type="text" :placeholder="data.placeholder" />
      </md-card-content>
      <md-card-actions>
        <md-button>Delete</md-button>
      </md-card-actions>
    </md-card>
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
export default {
  name: 'InputCard',
  props: {
    data: {
      type: Object
    }
  }
}
</script>
