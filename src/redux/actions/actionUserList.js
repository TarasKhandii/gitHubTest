import { getListUser } from "../../api/user/listUser";
import {
  GET__LIST__USERS,
  SET__LOADING__MORE,
  SET__LOADING__USERS__DATA,
} from "./actionsType";

export const loadingUsers = (payload) => ({
  type: SET__LOADING__USERS__DATA,
  payload,
});
export const loadingMore = (payload) => ({
  type: SET__LOADING__MORE,
  payload,
});

export const getUserListAction = (page, text) => {
  return async (dispatch) => {
    try {
      page > 1 ? dispatch(loadingMore(true)) : dispatch(loadingUsers(true));
      const userListData = await getListUser(page, text);
      dispatch({ type: GET__LIST__USERS, payload: userListData.data.items });
      page > 1 ? dispatch(loadingMore(false)) : dispatch(loadingUsers(false));
    } catch (error) {
      console.log("error======>", error);
    }
  };
};
