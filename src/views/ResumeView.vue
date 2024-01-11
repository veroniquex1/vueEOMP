<template>
    <div class="container">
        <div class="row">
            <div v-if="resume"></div>
            <!-- <h2 class="">Resume</h2> -->
        </div>
        

    </div>
</template>

<script>
    export default {
        computed: {
            resume(){
                return this.$store.state.resume;
            },
        },
        mounted(){
            this.$store.dispatch('fetchresume')
        }
        
    }
</script>

<style scoped>

</style>