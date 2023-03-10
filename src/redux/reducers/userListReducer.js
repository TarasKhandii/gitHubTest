import {
  GET__LIST__USERS,
  SET__LOADING__MORE,
  SET__LOADING__USERS__DATA,
} from "../actions/actionsType";

const initialState = {
  loading: false,
  arrUsers: [],
  page: 1,
  loadingMore: false,
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__LIST__USERS:
      return {
        ...state,
        arrUsers:
          state.page === 1
            ? action.payload
            : [...state.arrUsers, ...action.payload],
        page: state.page + 1,
      };
    case SET__LOADING__USERS__DATA:
      return { ...state, loading: action.payload };
    case SET__LOADING__MORE:
      return { ...state, loadingMore: action.payload };
    default:
      return state;
  }
};

export default userListReducer;
