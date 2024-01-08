<template>
  <main class="container-fluid">
    <NavBar>

    </NavBar>

    <Footer>

    </Footer>

    <router-view/>
  </main>



  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/project">Projects</router-link>|
    <router-link to="/testimonial">Testimonial</router-link> |
    <router-link to="/reachme">Reach Me</router-link> -->
    <!-- router-link is the same as an a tag  -->
    <!-- to is the path for that page similar to the href -->
  <!-- </nav> -->
  <!-- router view alllows the rendered pages to be seen -->
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

