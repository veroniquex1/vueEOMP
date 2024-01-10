<template>
  <div class="aboutContent">
    <div class="star-container">
    <h1>ABoUT</h1>
  </div>
  <div class="twinkle">
  </div>
    <h1 class="glow">About</h1>
  

  <div class="container" id="aboutCard">
    <div class="card mb-3 " style="max-width: 1500px">
  <div class="row g-6">
    <div class="col-md-4">
      <img src="#" class="img-fluid rounded-start" alt="#">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  </div>
    <!-- <div class="col" id="about-text">
                <p>
                  I’m <span class="fw-bolder">Veronique Nappie</span>, an aspiring full stack web developer. I
                  would consider myself introverted but highly ambitious. I am
                  not likely to wait for an opportunity to come to me but rather
                  create one and not give up until I achieve what I set out to.
                </p>
  </div> -->
</div>
</template>

<script></script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/star-jedi');
@import url('https://fonts.cdnfonts.com/css/star-wars');

*, 
*::before, 
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.aboutContent{
  font-family: 'Star Wars', sans-serif;
  background-color: black;
  width: 100%;
  height: 100vh;
  
}

@keyframes move-background {
  from {
    left: -1000px
  }

  to {
    left: 1000px;
  }
}
.twinkle {
  animation: move-background 100s linear infinite;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png') repeat;
}

.star-container {
  background: black url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png') repeat;
}

.twinkle, .star-container {
  height: 100%;
  position: absolute; 
  width: 100%;
}
#aboutCard *{
  border: solid 2PX red;
  height: 80%;
  width: 100% !important; 
  background: transparent !important;
}
h1{
  text-align: center;
  
}


</style>