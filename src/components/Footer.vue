<template>
    <div class="container-fluid">
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
.row{
    background-color: black;
    color: rgba(23,222,251,255);
    font-family: 'Star Wars', sans-serif;
}


@import url('https://fonts.cdnfonts.com/css/star-jedi');
@import url('https://fonts.cdnfonts.com/css/star-wars');


</style>