<template>
    <div class="container-fluid" id="footer">
        <div class="row">
            <p class="lead">Veronique's Portfolio &copy;
                <span> {{ currYear}}</span>
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'FooterComp',
        data() {
            return{
                currYear: new Date ().getFullYear()
        }
        
    }
}
</script>

<style scoped>
#footer{
    /* background-color: black; */
    color: rgba(23,222,251,255);
    font-family: 'Star Wars', sans-serif;
    width: 100%;
    position: relative;
    text-align: center;
    bottom: 0;
    /* padding-top: 25% */

}


@import url('https://fonts.cdnfonts.com/css/star-jedi');
@import url('https://fonts.cdnfonts.com/css/star-wars');


</style>