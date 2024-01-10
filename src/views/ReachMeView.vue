<template>
    <div class="reachMe">
    <div class="container">
        <div class="row">
            <h2 class="display-2">Reach Me</h2>
        </div>
        <div class="row d-block d-md-flex" id="contactContent">
              <div class="col">
                  <form action="https://formspree.io/f/xleyvbpj" method="post" target="_blank">
                      <div class="input-group my-3">
                          <input type="text" class="form-control" placeholder="Enter your first name" name="firstName" required>
                      </div>
                      <div class="input-group">
                          <input type="text" class="form-control" placeholder="Enter your last name" name="surname" required>
                      </div>
                      <div class="input-group my-3">
                          <textarea name="message" class="w-100 form-control"  placeholder="Please enter your message" cols="30" rows="10"></textarea>
                      </div>
                      <div class="input-group">
                          <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                  </form>
              </div>
              <div class="col">
                  <div>
                      <label class="form-lable">Cellphone number: <span class="d-block">(+27) 65 944 7142</span></label>
                  </div>
                  <div>
                      <label class="form-lable">Email: <span class="d-block">vdrossouw@gmail.com</span></label>
                  </div>
                  <div class="socials">
                      <a href="https://www.linkedin.com/in/veronique-nappie-56462422b/" target="_blank">
                        <img src="#" alt="linkedin" >
                      </a>
                      <a href="mailto: vdrossouw@gmail.com" target="_blank">
                        <img src="#" alt="">
                      </a>
                  </div>
              </div>

          </div>

    </div>
    <div class="star-container"></div>
  <div class="twinkle"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

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

.reachMe{
  font-family: 'Star Wars', sans-serif;
  background-color: black;
  width: 100%;
  height: 100vh;
  
}

#contactContent *{
    background-color: transparent;
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

</style>