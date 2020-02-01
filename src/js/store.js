// Import Vuex persistedstate plugin
import createPersistedState from "vuex-persistedstate";

const store = {
  plugins: [
    createPersistedState({
      paths: "settings",
      reducer: state => ({
        settings: state.settings
      })
    })
  ],
  state: {
    images: [],
    settings: {
      darkMode: false
    }
  },
  getters: {
    IMAGES_LIST: state => {
      return state.images;
    },
    IMAGE: state => id => {
      return state.images[id];
    }
  },
  mutations: {
    SET_IMAGES_LIST: (state, payload) => {
      state.images = payload;
    },
    RESET_IMAGES_LIST: state => {
      state.images.splice(0, state.images.length);
    },
    ADD_IMAGE: (state, payload) => {
      state.images.push(payload);
    },
    SET_SETTINGS: (state, payload) => {
      state.settings[payload.prop] = payload.val;
    }
  },
  actions: {}
};

export default store;
