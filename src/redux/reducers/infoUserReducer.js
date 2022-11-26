import {
  GET__INFO__USER,
  SET__LOADING__INFO__USER,
  SET__SEARCH__REPOS,
  SET__SORT__REPOS,
} from "../actions/actionsType";

const initialState = {
  loading: false,
  info: {},
  repos: [],
  filterRepos: null,
};

function sortReposRating(a, b) {
  if (a.stargazers_count > b.stargazers_count) {
    return 1;
  }
  if (a.stargazers_count < b.stargazers_count) {
    return -1;
  }
  if (a.stargazers_count == b.stargazers_count) {
    return 0;
  }
}

function sortReposName(a, b) {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}

const infoUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__INFO__USER:
      return {
        ...state,
        ...action.payload,
        repos: [...action.payload.repos].sort(sortReposRating),
        filterRepos: null,
      };
    case SET__LOADING__INFO__USER:
      return { ...state, loading: action.payload };
    case SET__SORT__REPOS:
      return action.payload === "Rating"
        ? { ...state, repos: [...state.repos].sort(sortReposRating) }
        : { ...state, repos: [...state.repos].sort(sortReposName) };
      {
        // ...state,
        // repos:
        //   action.payload === "Rating"
        //     ? [...state.repos].sort(sortReposRating)
        //     : [...state.repos].sort(sortReposName),
      }
    case SET__SEARCH__REPOS:
      return {
        ...state,
        filterRepos:
          action.payload === ""
            ? null
            : state.repos.filter((el) =>
                el.name.toLowerCase().includes(action.payload.toLowerCase())
              ),
      };
    default:
      return state;
  }
};
export default infoUserReducer;
