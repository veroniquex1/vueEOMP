<template>
    <div class="container" id="resumePage">
        <div class="row">
            <div v-if="resume"></div>
            <!-- <h2 class="">Resume</h2> -->
        </div>
          <div class="work-row" id="work">
            <div class="left-work">
              <h1>Work</h1>
              <div class="work-card">
                <div class="card-head">
                  <img
                    src="https://i.ibb.co/NjJRtbD/star-wars-icon-png-3.png"
                    class="img-fluid "
                    id="icon"
                    alt="code-icon"
                  />
                </div>
                <div class="card-body">
                  <div>
                    <h6>Life Choices</h6>
                    <p>(Current)</p>
                  </div>
                  <p class="card-text">
                    I am currently enrolled at Life Choices Academy for a course
                    in Web Development.
                  </p>
                </div>
              </div>
              <div class="work-card">
                <div class="card-head">
                  <img
                    src="https://i.ibb.co/NmqTQ3N/star-wars-icon-png-2.png"
                    class="img-fluid "
                    id="icon"
                    alt="sac-icon"
                  />
                </div>
                <div class="card-body">
                  <div>
                    <h6>SA Commercial</h6>
                    <p>July '23 - Sept '23</p>
                  </div>
                  <p class="card-text">
                    Prior to Life Choices I was employed at SA Commercial. A BPO in Cape Town CBD, and was part of their Sage 50C Accounting campaign which focuses on providing technical support to the users of the software.
                  </p>
                </div>
              </div>
              <div class="work-card">
                <div class="card-head">
                  <img
                    src="https://i.ibb.co/fdQPXB4/star-wars-icon-png-10.png"
                    class="img-fluid "
                    id="icon"
                    alt="code-icon"
                  />
                </div>
                <div class="card-body">
                  <div>
                    <h6>Amazon</h6>
                    <p>Oct '18 - Feb '22</p>
                  </div>
                  <p class="card-text">
                    My longest employment period was at Amazon. I was initially hired to be part of their retail customer service department but later moved to their digital and device support department. As part of the D2 team, I provided technical support for the users of Amazon devices (ie Alexa and Kindle) and Amazon services (i.e Prime Video and Amazon Music)
                  </p>
                </div>
              </div>
            </div>
            <div class="right-edu">
              <h2>Education</h2>
              <div class="work-card">
                <div class="card-head">
                <img src="https://i.ibb.co/L1XnyzC/star-wars-icon-png-24.png" class="justify-content-center" id="icon"  alt="university">
              </div>
                <div class="card-body">
                <div class="col">
                <h6>UNiSA</h6>
                <p>(In progress)</p>
                  <p class="card-text">I registered for a BSc in Math and Physics at UNISA. Although I am not currently enrolled, I do plan on finishing my BSc. </p>
                </div>
              </div>
            </div>
              <div class="work-card">
                <div class="card-head">
                <img src="https://i.ibb.co/9gDS2QN/star-wars-icon-png-6.png" alt="star-wars-icon-png-6" class="justify-content-center">
              </div>
                <div class="card-body">
                <div class="col">
                  <h6>Sans Souci Girls' High School</h6>
                  <p>2011-2015</p>
                  <p class="card-text">While at Sans Souci, my primary subjects were Physics, Life Sciences and Music in addition to the other compulsory subjects. I matriculated in 2015 with a distinction in Afrikaans </p>
                </div>
              </div>
            </div>
          </div>
          </div>        

    </div>
</template>

<script>
    export default {
        computed: {
            resume(){
                return this.$store.state.resume;
            },
        },
        mounted(){
            this.$store.dispatch('fetchresume')
        }
        
    }
</script>

<style scoped>

@import url('https://fonts.cdnfonts.com/css/star-jedi');
@import url('https://fonts.cdnfonts.com/css/star-wars');

#resumePage{
    width: 100%;
    height: 100vh;
    font-family: 'Star Wars', sans-serif;
    color: rgba(18,220,246,255);;
    /* background-image: url(https://i.ibb.co/4MKwrmL/HD-wallpaper-black-stars-black-aesthetic.jpg); */

}

img{
    width: 50px;
    height: 50px;
}
</style>