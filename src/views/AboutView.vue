<template>
  <div class="row">
            <h2 class="display-2">ABoUT</h2>
        </div>
  <div class="aboutPage">
  <div class="row justify-content-start align-content-center pb-5">
            <div class="row vh-100 my-3 d-block d-sm-flex g-2 ms-2">
              <div class="col w-25">
                <img
                  src="https://i.ibb.co/mqSg9bR/20240110-140911-720.jpg"
                  loading="lazy"
                  class="img-fluid"
                  id="about-image"
                  alt="about-image"
                  style="width: 40rem;"
                />
              </div>
              <div class="col p-5" id="about-text">
                <p>
                  I’m <span class="">Veronique Nappie</span>, an aspiring full stack web developer. i
                  would consider myself introverted but highly ambitious. I am
                  not likely to wait for an opportunity to come to me but rather
                  create one and not give up until I achieve what I set out to.
                </p>
                <h5>Post High School</h5>
                <p>I matriculated in 2015 from Sans Souci Girls’ High School.
                    Directly after high school I spent a year tutoring high
                    school students. After tutoring, I started my first job in
                    sales, selling insurance for Vodacom.</p>
                <h2 class="p-3">Hobbies</h2>
                <p>
                  Some of my hobbies include:
                  <ul>
                    <li>Reading (Fiction and Non-fiction)</li>
                    <li>Watching Sci-Fi Films</li>
                    <li>Listening to Music</li>
                    <li>Gardening</li>
                    <li>Exercise</li>
                    <li>Cosplay</li>
                  </ul>
                </p>
              </div>
              </div>
            </div>
          </div>
<!-- </div> -->
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

.aboutPage{
  /* background-color: black; */
  width: 100%;
  height: 100vh;
  /* background-image: url(https://i.ibb.co/4MKwrmL/HD-wallpaper-black-stars-black-aesthetic.jpg); */
  
}
#aboutCard *{
  height: 80%;
  width: 100% !important; 
  background: transparent !important;
}
h1, h2{
  font-family: 'Star Wars', sans-serif;
  padding: 30px;
  font-size: 50PX;
  text-align: center;
  color: rgba(18,219,254,255);
  text-decoration: underline solid  5px;

  
}

h5{
  font-family: 'Star Wars', sans-serif;
  padding: 30px;
  text-align: center;
  color: rgba(18,219,254,255);
  text-decoration: underline solid  5px;
}

#about-image{
  border-radius: 5px;
  padding: 10px;
}

img:hover { 
  color: #111;  
  background:rgba(18,219,254,255);
  box-shadow: 0 0 100px rgba(18,219,254,255);  
}

</style>