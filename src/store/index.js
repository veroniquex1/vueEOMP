import { createStore } from 'vuex'
const dataURL= 'https://veroniquex1.github.io/vueJSONData/data/'


export default createStore({
  state: {
    // define variables in state
    // this is taken from the json data
    jobTitle: null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value;
  },
    setAbout(state, value) {
      state.about = value;
  },
    setEducation(state, value) {
      state.education = value;
  },
    setSkills(state, value) {
      state.skills = value;
  },
    setTestimonials(state, value) {
      state.testimonials = value;
  },
    setProjects(state, value) {
      state.projects = value;
  },
},
  actions: {
    async fetchJobTitle(context){
      let res = await fetch(dataURL) 
// function has async which is why you use async

      let{jobTitle} = await res.json()
      context.commit('setJobTitle', jobTitle)
    }
  },
  modules: {
  }
})
