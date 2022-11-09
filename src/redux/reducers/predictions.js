import {
  GET_PREDICTION,
  PREDICTION_LOADING,
  GET_OPTIONS,
  OPTIONS_LOADING,
} from "../actions/types";

const initialState = {
  loading: false,
  initialLoading: true,
  options: {
    actors: [],
    directors: [],
    genres: [],
  },
  prediction: {},
};

export default function predictionReducer(state = initialState, action) {
  switch (action.type) {
    case OPTIONS_LOADING:
      return {
        ...state,
        initialLoading: true,
      };
    case GET_OPTIONS:
      return {
        ...state,
        options: action.payload,
        initialLoading: false,
      };
    case PREDICTION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PREDICTION:
      return {
        ...state,
        prediction: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
