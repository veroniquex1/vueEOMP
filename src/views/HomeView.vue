<template class="homePage">
  <div class="home">
  </div>

  <!-- Main Content -->
<div class="row" id="homeContent">
  
  <div class="star-container">
    <h1>Hi</h1>
    <!-- <h1>
      <a href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im Veronique.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
        <span class="wrap"></span>
      </a>
    </h1> -->
  </div>
  <div class="twinkle">
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
  color: red;
}

</style>
