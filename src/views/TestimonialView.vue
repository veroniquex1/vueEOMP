<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Testimonial</h2>
        </div>
        <!-- <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
        </div> -->

        <div>
            <h3 v-for="info in $store.state.testimonials" :key="info" > {{ info.name }}</h3>
        </div>
    
</div>
</template>

<script>
    export default {
        //  computed : {
        //      testimonials(){
        //          this.$store.dispatch('fetchData');
        //      }
        //  },
        //  mounted (){
        //     this.testimonials
        //  }
        
    }
</script>

<style scoped>

</style>