<template>
  <main class="container-fluid">
    <NavBar/>
    <Footer/>

    <router-view/>
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

/* src="@/assets/css/style.css" */
</style>

