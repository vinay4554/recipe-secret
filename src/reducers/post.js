const postreducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      return state.filter((post) => post._id !== action.payload);
    case "LIKE_POST":
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return state;
  }
};

export default postreducer;
