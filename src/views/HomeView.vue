<template>
  <div class="home">
  </div>

  <!-- Main Content left side -->
  <div class="row g-0" id="homeContent">
    <div class="col g-0">
      <div class="left">
        <h2>left</h2>
      </div>

    </div>

    <!-- Main content right side -->
    <div class="col g-0">
      <div class="right">
        <h2>right</h2>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped >

.left, .right{
  height: 100vh;;
  width: 100%;
}

.left{
  background: linear-gradient(rgb(27, 69, 207), rgb(114, 39, 114));
}

.right{
  background: linear-gradient(rgb(220,2,3), rgb(114, 39, 114));
}

</style>
