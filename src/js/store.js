const store = {
  state: {
    images: []
  },
  getters: {
    IMAGES_LIST: state => {
      return state.images;
    }
  },
  mutations: {
    SET_IMAGES_LIST: (state, payload) => {
      state.images = payload;
    },
    ADD_IMAGE: (state, payload) => {
        state.images.push(payload);
      } 
  },
  actions: {}
};

export default store;
