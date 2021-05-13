const state = {
  posts: [
    {
      id: "56e25e7c95984eea7bd9",
      post:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta excepturi dolore, assumenda incidunt magni debitis tempora officiis nobis ipsum facere doloribus enim doloremque commodi dolores neque iure sunt esse ex ullam quaerat nulla mollitia sequi. Similique magnam molestias vero distinctio! Temporibus doloremque quidem atque, quia fugit placeat unde rerum?",
      creator: "Jane Doe",
      createdAt: "2015-05-11",
      likes: 400,
      comments_count: 56,
      reads: 50,
      comments: [
        {
          creator: "Jane Doe",
          content: "Hey amazing irrelevant message",
        },
      ],
    },
    {
      id: "7b4a16cb2a0dd960a57c",
      post:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta excepturi dolore, assumenda incidunt magni debitis tempora officiis nobis ipsum facere doloribus enim doloremque commodi dolores neque iure sunt esse ex ullam quaerat nulla mollitia sequi. Similique magnam molestias vero distinctio! Temporibus doloremque quidem atque, quia fugit placeat unde rerum?",
      creator: "John Doe",
      createdAt: "2015-05-11",
      likes: 120,
      comments_count: 226,
      reads: 10,
      comments: [
        {
          creator: "Jane Doe",
          content: "Hey amazing irrelevant message",
        },
      ],
    },
    {
      id: "5192f49a129d892f6fe7",
      post:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta excepturi dolore, assumenda incidunt magni debitis tempora officiis nobis ipsum facere doloribus enim doloremque commodi dolores neque iure sunt esse ex ullam quaerat nulla mollitia sequi. Similique magnam molestias vero distinctio! Temporibus doloremque quidem atque, quia fugit placeat unde rerum?",
      creator: "Mourine Cheps",
      createdAt: "2015-05-11",
      likes: 161,
      comments_count: 46,
      comments: [
        {
          creator: "Jane Doe",
          content: "Hey amazing irrelevant message",
        },
      ],
      reads: 116,
    },
    {
      id: "fda8e23aaa8367a50546",
      post:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta excepturi dolore, assumenda incidunt magni debitis tempora officiis nobis ipsum facere doloribus enim doloremque commodi dolores neque iure sunt esse ex ullam quaerat nulla mollitia sequi. Similique magnam molestias vero distinctio! Temporibus doloremque quidem atque, quia fugit placeat unde rerum?",
      creator: "Clarion Lukes",
      createdAt: "2015-05-11",
      likes: 159,
      comments_count: 58,
      comments: [
        {
          creator: "Jane Doe",
          content: "Hey amazing irrelevant message",
        },
      ],
      reads: 220,
    },
    {
      id: "46effacad85f416e3c5b",
      post:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta excepturi dolore, assumenda incidunt magni debitis tempora officiis nobis ipsum facere doloribus enim doloremque commodi dolores neque iure sunt esse ex ullam quaerat nulla mollitia sequi. Similique magnam molestias vero distinctio! Temporibus doloremque quidem atque, quia fugit placeat unde rerum?",
      creator: "Mshe Linet",
      createdAt: "2015-05-11",
      likes: 301,
      reads: 168,
      comments_count: 112,
      comments: [
        {
          creator: "Jane Doe",
          content: "Hey amazing irrelevant message",
        },
      ],
    },
    {
      id: "675aa3cffbc3f01be432",
      post:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta excepturi dolore, assumenda incidunt magni debitis tempora officiis nobis ipsum facere doloribus enim doloremque commodi dolores neque iure sunt esse ex ullam quaerat nulla mollitia sequi. Similique magnam molestias vero distinctio! Temporibus doloremque quidem atque, quia fugit placeat unde rerum?",
      creator: "Chris Collo",
      createdAt: "2015-05-11",
      likes: 87,
      comments_count: 112,
      comments: [
        {
          creator: "Jane Doe",
          content: "Hey amazing irrelevant message",
        },
      ],
      reads: 163,
    },
    {
      id: "9ebc0b366a28fc6f0f71",
      post:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta excepturi dolore, assumenda incidunt magni debitis tempora officiis nobis ipsum facere doloribus enim doloremque commodi dolores neque iure sunt esse ex ullam quaerat nulla mollitia sequi. Similique magnam molestias vero distinctio! Temporibus doloremque quidem atque, quia fugit placeat unde rerum?",
      creator: "Mama  Flo",
      createdAt: "2015-05-11",
      likes: 700,
      comments_count: 1256,
      reads: 800,
      comments: [
        {
          creator: "Jane Doe",
          content: "Hey amazing irrelevant message",
        },
      ],
    },
  ],
};
const actions = {};
const mutations = {
  ADD_LIKES: (state, id) => {
    let status = state.posts.findIndex((i) => {
      return i.id == id;
    });
    if (status == -1) {
      throw Error("System Error");
    }
    let Original = state.posts[status].likes;
    state.posts[status].likes = Original + 1;
  },
};

module.exports = {
  state,
  actions,
  mutations,
  namespaced: true,
};
