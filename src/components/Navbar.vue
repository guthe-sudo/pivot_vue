<template>
  <div id="content">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">LOGO</router-link>
        <button
          type="button"
          id="sidebarCollapse"
          class="btn btn-info"
          @click="toggle = !toggle"
        >
          <i class="navbar-toggler-icon"></i>
        </button>
      </div>
    </nav>
    <router-view />
  </div>
  <div class="overlay" v-bind:class="toggle ? '' : 'active'"></div>
</template>

<script>
//importing bootstrap 5 Modules
export default {
  data() {
    return {
      toggle: true, //toggle variable
    };
  },
};
</script>
