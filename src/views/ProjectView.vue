<template>
    <div class="container" id="projectPage">
        <div class="row">
            <h2 class="display-2">Projects</h2>
        </div>
        <div class="card mb-3">
            <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0 mt-3">
    <div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">To-Do List</h5>
    <img src="https://i.ibb.co/3m5Xsfv/printable-to-do-list-template-1-fefefe-010101.png" alt="">
    <p class="card-text">Simple To-Do List app I created using HTML, CSS and JS</p>
    <a href="#" class="btn btn-primary">Github</a>
    <a href="#" class="btn btn-primary">Netlify</a>
  </div>
</div>
    <div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">Calculator</h5>
    <img src="https://i.ibb.co/X5cgG4c/257791.png" alt="">
    <p class="card-text">A functional calculator I created using HTML, CSS and JS </p>
    <a href="https://github.com/veroniquex1/js-calculator.git" class="btn btn-primary">Github</a>
    <a href="https://veroniquex1.github.io/js-calculator/" class="btn btn-primary">Netlify</a>
  </div>
</div>
    <div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">Bootstrap Portfolio</h5>
    <img src="https://i.ibb.co/9wb72wX/bootstrap.png" alt="">
    <p class="card-text">Portfolio created using HTML, CSS and Bootstrap</p>
    <a href="#" class="btn btn-primary">Github</a>
    <a href="#" class="btn btn-primary">Netlify</a>
  </div>
</div>
  </div>
  <div class="col-sm-6">
    <div class="card w-75 mb-3 mt-3">
  <div class="card-body">
    <h5 class="card-title">The Book Corner</h5>
    <img src="https://i.ibb.co/mzPBnS0/57142cdf38e2605105831275646d36a8.jpg" alt="">
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="https://github.com/veroniquex1/js-Ecommerce-Store.git" class="btn btn-primary">Github</a>
    <a href="https://veroniquex1.github.io/js-Ecommerce-Store/" class="btn btn-primary">Netlify</a>
  </div>
</div>
    <div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">Netflix Clone</h5>
    <img src="https://i.ibb.co/8D1vdpn/netflix.png" alt="netflix">
    <p class="card-text">Netflix clone created using HTML and CSS</p>
    <a href="https://github.com/veroniquex1/netflixClone.git" class="btn btn-primary">Github</a>
    <a href="https://veroniquex1.github.io/netflixClone/" class="btn btn-primary">Netlify</a>
  </div>
</div>
    <div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">MobiCare</h5>
    <img src="https://i.ibb.co/4Z8z7Nr/download-1.png" alt="">
    <p class="card-text">MobiCare clone I created using HTML, CSS and Bootstrap.</p>
    <a href="https://github.com/veroniquex1/mobicare-bootstrap.git" class="btn btn-primary">Github</a>
    <a href="#" class="btn btn-primary">Netlify</a>
  </div>
</div>
  </div>
</div>
</div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

#projectPage{
    width: 100%;
    height: fit-content;
    /* font-family: 'Star Wars', sans-serif; */
    /* display: flex; */
}
@import url('https://fonts.cdnfonts.com/css/star-jedi');
@import url('https://fonts.cdnfonts.com/css/star-wars');

img{
    width: 80px;
}

.btn{
    background-color:rgba(18,220,246,255) !important;
    border: rgba(18,220,246,255) !important;
}

h2, h5{
    font-family: 'Star Wars', sans-serif;
    text-decoration: underline ;
    text-align: center;
    color: rgba(18,219,254,255);
}

.card-body:hover { 
  color: #111;  
  /* background:rgba(18,219,254,255); */
  box-shadow: 0 0 100px rgba(18,219,254,255);  
}
</style>