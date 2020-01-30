const store = {
  state: {
    images: []
  },
  getters: {
    IMAGES_LIST: state => {
      return state.images;
    },
    IMAGE: (state) => (id) => {
        return state.images[id]
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
      } 
  },
  actions: {}
};

export default store;
