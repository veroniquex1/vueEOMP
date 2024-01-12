<template class="homePage">
  <div class="home">
    <div class="row" id="homeContent">
      <div class="fade-in-image">
       <img src="https://i.ibb.co/8X2SqH4/star-wars-jedi-knight-jedi-academy-the-new-jedi-order-logo-war-2ef100af941da4d519f9c8ca4c04a3eb.png">
      </div>
    
    
      <!-- <div class="card" ">
      <img src="https://i.ibb.co/mqSg9bR/20240110-140911-720.jpg" class="card-img-top" alt="image1">
    </div> -->
        <h1> Hi, i am Veronique</h1>
        <div>
          <p class="typingEffect">
            Aspiring Full Stack Developer
          </p>
        </div>
      <!-- <div class="star-container"></div> -->
      <!-- <div class="twinkle"></div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
  
}


</script>

<style scoped >

@import url('https://fonts.cdnfonts.com/css/star-jedi');
@import url('https://fonts.cdnfonts.com/css/star-wars');

*, 
*::before, 
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home{
  width: 100%;
  height: 100vh;
}

#homeContent{
  font-family: 'Star Wars', sans-serif;
  display: flex;
 
  background-image: url(https://i.ibb.co/4MKwrmL/HD-wallpaper-black-stars-black-aesthetic.jpg);
  
}

.fade-in-image { animation: fadeIn 5s; 
justify-content: center;
align-items: center;}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
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

/* .star-container {
  background: black url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png') repeat;
} */

/* .twinkle, .star-container {
  height: 100%;
  position: absolute; 
  width: 100%;
} */

h1{
  font-size: 80px;
  color: rgba(18,220,246,255);
}

/* * { color:#fff; text-decoration: none;} */

/* .typingEffect{
  border-radius: 4px;
    padding: 20px;
    height: 70px;
    color: white;
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 350px;
} */

.typingEffect {
    width: 0;
    overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
    border-right: 2px solid white; /* The cursor*/
    color: rgba(18,220,246,255);
    font-size: 25px;
    white-space: nowrap; /* Keeps the text on a single line */
    animation: typing 2s forwards;
  }

/* The typing animation */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
.typingEffect {
  animation: typing 2s steps(30) forwards;
}
@keyframes blink {
  0%, 45% {
    border-color: transparent;
  }
  50%, 100% {
    border-color: white;
  }
}
</style>
