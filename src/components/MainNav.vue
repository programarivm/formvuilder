<template>
  <div>
    <md-toolbar>
      <h3 class="md-title" style="flex: 1">Form Builder</h3>
      <router-link to="/about">
        <md-button>About</md-button>
      </router-link>
      <router-link to="/build">
        <md-button>Build</md-button>
      </router-link>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>
