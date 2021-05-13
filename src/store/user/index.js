const state = {
  user: {
    email: "jane@gustuni.com",
    uname: "jane_",
    imgUrl: "guiter.jpg",
  },
  data: {
    posts_liked: [],
    notifications: [
      {
        id: "199",
        from: "John Doe",
        message: "Hey Jane welcome to Gustuni platform",
        recvd: "2019-11-01",
        status: "unread",
      },
    ],
  },
};

const mutations = {
  READ_STATUS: (state, id) => {
    let found = state.data.notifications.findIndex((i) => {
      return i.id == id;
    });
    if (found == -1) {
      throw Error("Index not found!");
    } else {
      state.data.notifications[found].status = "read";
    }
  },
};
const actions = {};

module.exports = {
  state,
  mutations,
  actions,
  namespaced: true,
};
