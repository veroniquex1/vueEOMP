<template>
    <nav class="navbar navbar-expand-lg" id="navbar">
   <div class="container-fluid">
     <!-- <a class="navbar-brand" href="#">Navbar</a> -->
     <router-link to="/">
         <img class="img-fluid" src="https://i.ibb.co/8X2SqH4/star-wars-jedi-knight-jedi-academy-the-new-jedi-order-logo-war-2ef100af941da4d519f9c8ca4c04a3eb.png" alt="logo" id="logo" loading="lazy">
     </router-link>
     <!-- replace the a tag with the router link for the home page -->
 
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
             <router-link to="/" class="nav-link active">
                 Home
             </router-link>
           <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
         </li>
         <li class="nav-item">
             <router-link to="/about" class="nav-link active">
                     About
             </router-link>
         </li>
         <li class="nav-item">
             <router-link to="/resume" class="nav-link active">
                     Resume
             </router-link>
         </li>
         <li class="nav-item">
             <router-link to="/project" class="nav-link active">
                     Projects
             </router-link>
         </li>
         <li class="nav-item">
             <router-link to="/testimonial" class="nav-link active">
                     Testimonial
             </router-link>
         </li>
         <li class="nav-item">
             <router-link to="/reachme" class="nav-link active">
                     Reach Me
             </router-link>
         </li>
       </ul>
     </div>
   </div>
 </nav>
 </template>
 
 <script>
     export default {
         // data(){
         //     return{
 
         //     }
         // }
     }
 </script>
 
 <style scoped>
#logo{
  width: 2rem;
  aspect-ratio: 1/1;
}

@import url('https://fonts.cdnfonts.com/css/star-jedi');
@import url('https://fonts.cdnfonts.com/css/star-wars');

*, 
*::before, 
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#navbar {
  font-family: 'Star Wars', sans-serif;
  background-color: black !important;
  /* width: 100% !important; */
  /* color: rgba(12,223,248,255) !important; */
  
}

ul *{
  color: rgba(23,222,251,255) !important;
}

 
 </style>