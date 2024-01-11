import { createStore } from 'vuex';
const dataURL = 'https://veroniquex1.github.io/vueJSONData/data/'

export default createStore({
  state: {
    resume: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setResume(state, value) {
      state.resume = value;
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
    }
  },
  actions: {
    async fetchresume(context){
      try {
        let res = await fetch(dataURL)
        let {resume} = await res.json()
        // once the value is updated, it saves the value using commit
        context.commit('setresume', resume)
        console.log(resume);
      } catch (error) {
        console.log(error);
      }
    },
    async fetcheducation(context){
      try {
        let res = await fetch(dataURL)
        let {education} = await res.json()
        // once the value is updated, it saves the value using commit
        context.commit('seteducation', education)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchtestimonials(context){
      try {
        let res = await fetch(dataURL)
        let {testimonials} = await res.json()
        // once the value is updated, it saves the value using commit
        context.commit('settestimonials', testimonials)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchskills(context){
      try {
        let res = await fetch(dataURL)
        let {skills} = await res.json()
        // once the value is updated, it saves the value using commit
        context.commit('setskills', skills)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchprojects(context){
      try {
        let res = await fetch(dataURL)
        let {projects} = await res.json()
        // once the value is updated, it saves the value using commit
        context.commit('setprojects', projects)
      } catch (error) {
        console.log(error);
      }
    },
    // fetchData({ commit }) {
    //   axios.get('https://veroniquex1.github.io/vueJSONData/data/')
    //     .then(res => {
    //       const data = res.data;
    //       commit('setEducation', data.education);
    //       commit('setTestimonials', data.testimonials);
    //       commit('setProjects', data.projects);
    //       commit('setSkills', data.skills);
    //     })
    //     .catch(error => {
    //       console.error('There was an error fetching data', error);
    //     });
    // },
    
  },
  modules: {
  }
});
