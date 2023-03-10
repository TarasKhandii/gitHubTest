import {
  GET__INFO__USER,
  SET__LOADING__INFO__USER,
  SET__SEARCH__REPOS,
  SET__SORT__REPOS,
} from "./actionsType";
import { getInfoUser } from "../../api/user/infoUser";
import { getRepos } from "../../api/repos/repos";

export const loadingInfoUser = (payload) => ({
  type: SET__LOADING__INFO__USER,
  payload,
});
export const sortRepos = (payload) => ({
  type: SET__SORT__REPOS,
  payload,
});

export const searchRepos = (payload) => ({
  type: SET__SEARCH__REPOS,
  payload,
});

export const getInfoUserAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch(loadingInfoUser(true));
      let request = [];
      const infoUserData = await getInfoUser(user);
      const reposData = await getRepos(user);

      request.push(infoUserData);
      request.push(reposData);

      Promise.all(request).then((responses) => {
        dispatch({
          type: GET__INFO__USER,
          payload: { info: responses[0].data, repos: responses[1].data },
        });
      });

      dispatch(loadingInfoUser(false));
    } catch (error) {
      console.log("errorInfo====>", error);
    }
  };
};
