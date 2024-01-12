<template>
    <div class="reachMe">
    <div class="container">
        <div class="row">
            <h2 class="display-2">Reach Me</h2>
        </div>
        <div class="row d-block d-md-flex" id="contactContent">
              <div class="col">
                  <form @submit="submitForm" action="https://formspree.io/f/xleyvbpj" method="post" target="_blank">
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
              <div class="socials">
                  <img src="https://i.ibb.co/Kr92qfy/phone-3.png" alt="">
                    <label class="form-lable">Cellphone number: <span class="d-block">(+27) 65 944 7142</span></label>
                  <a href="" target="_blank">
                    <img src="https://i.ibb.co/gzPJsCP/linkedin-1.png" alt="linkedin" >
                  </a>
                  <a href="mailto: vdrossouw@gmail.com" target="_blank">
                    <img src="https://i.ibb.co/KFJCt9d/email-4.png" alt="">
                  </a>
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
  /* background-color: black; */
  width: 100%;
  height: 100vh;
  
}
/* 
#contactContent *{
  background-color: transparent;
} */

h2{
  font-family: 'Star Wars', sans-serif;
  text-align: center;
  color: rgba(18,219,254,255);
  text-decoration: underline;
}

input {
	width: 175px;
	padding: 3px 0px 4px 6px;
	border: 1px solid #d8d8d8;
	background: white;
  font-size: 14px;
	height:25px;
	color:#d8d8d8;
  
  -webkit-box-shadow:inset 0px 3px 4px rgba(220,220,220,0.4);
	-moz-box-shadow:inset 0px 3px 4px rgba(220,220,220,0.4);
	box-shadow:inset 0px 3px 4px rgba(220,220,220,0.4);
  
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	-o-border-radius: 3px;
	-ms-border-radius: 3px;
	-khtml-border-radius: 3px;
	border-radius: 3px;
}
input:hover {
	border: 1px solid rgba(18,220,246,255);
;
	-webkit-box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.04), inset 0 2px 8px 0 rgba(18,220,246,255);
	-moz-box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.04), inset 0 2px 8px 0 rgba(18,220,246,255);
	box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.04), inset 0 2px 8px 0 rgba(18,220,246,255);
}
input {
	-webkit-transition: all 0.25s ease-in-out;
	-moz-transition: all 0.25s ease-in-out;
	transition: all 0.25s ease-in-out;
}

.btn{
  background-color: rgba(18,220,246,255);
  border-radius: rgba(18,220,246,255) solid 1px;
}

.socials *{
  padding: 5px;
}
</style>