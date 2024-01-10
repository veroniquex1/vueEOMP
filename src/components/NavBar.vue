<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
     <!-- <a class="navbar-brand" href="#">Navbar</a> -->
     <router-link to="/">
         <img class="img-fluid" src="https://drive.google.com/uc?id=1783jHj9J4C9RwccJVdQbVaVAa4uYgl06" alt="logo" id="logo">
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
 
 </style>