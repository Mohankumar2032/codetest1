let localMovies = [];

export let initialState = {
  list: [],
  text: ""
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "MoviesList": {
      console.log("action.payload", action.payload);
      return {
        ...state,
        list: action.payload
      };
    }
    case "OnChangeTxt": {
      console.log("action.payload", action.payload);
      return {
        ...state,
        text: action.payload
      };
    }

    default:
      return state;
  }
};
