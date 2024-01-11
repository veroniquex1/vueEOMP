<template>
  <main class="container-fluid">
    <NavBar/>
    
    <router-view/>
    
    <Footer/>
  </main>
</template>

<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';

export default{
  components:{
    Footer,
    NavBar


  }
}

</script>

<style >
</style>

