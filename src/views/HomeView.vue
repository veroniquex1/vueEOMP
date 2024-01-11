<template class="homePage">
  <div class="home">
  </div>

  <!-- Main Content -->
<div class="row" id="homeContent">
  
  <div class="star-container">
    <h1> Hi, i am Veronique</h1>
    <div class="twinkle">
    </div>
    <div>
      <p class="typingEffect">
        Aspiring Full Stack Developer
      </p>
    </div>
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

#homeContent{
  font-family: 'Star Wars', sans-serif;
  
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

h1{
  font-size: 80px;
  /* color: red; */
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
    color: red;
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
