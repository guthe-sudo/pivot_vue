<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <div
      class="bg-light border-right .d-none .d-lg-block .d-xl-none"
      id="sidebar-wrapper"
      v-show="toggle"
    >
      <div class="sidebar-heading">Dashboard</div>
      <div class="list-group list-group-flush" @click="toggle = false">
        <router-link
          link
          to="/"
          class="list-group-item list-group-item-action bg-light"
          >Dashboard FSO</router-link
        >
        <a href="#" class="list-group-item list-group-item-action bg-light"
          >FSO Cube</a
        >
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="btn btn-info" @click="toggle = !toggle">
            <span class="navbar-toggler-icon"></span>
            Menu
          </button>
        </div>
      </nav>

      <div class="container-fluid">
        <router-view class="mt-3" />
      </div>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
  <!-- /#wrapper -->
</template>

<script>
export default {
  data() {
    return {
      toggle: false, //toggle variable
    };
  },
};
</script>
