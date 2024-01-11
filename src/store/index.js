import { createStore } from 'vuex';
import axios from 'axios';

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
    },
  },
  actions: {
    fetchData({ commit }) {
      axios.get('https://veroniquex1.github.io/vueJSONData/data/')
        .then(res => {
          const data = res.data;
          commit('setEducation', data.education);
          commit('setTestimonials', data.testimonials);
          commit('setProjects', data.projects);
          commit('setSkills', data.skills);
        })
        .catch(error => {
          console.error('There was an error fetching data', error);
        });
    },
  },
  modules: {
  }
});
