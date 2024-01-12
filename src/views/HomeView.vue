<template class="homePage">
  <div class="home">
    <div class="row" id="homeContent">
      <div class="container-fluid fade-in-image">
       <img src="https://i.ibb.co/8X2SqH4/star-wars-jedi-knight-jedi-academy-the-new-jedi-order-logo-war-2ef100af941da4d519f9c8ca4c04a3eb.png">
      
    </div>
      <h1> Hi, i am Veronique</h1>
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

.homePage{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#homeContent{
  font-family: 'Star Wars', sans-serif;
  display: flex;
   
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

h1{
  font-size: 80px;
  color: rgba(18,220,246,255);
}

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
