import axios from "../axios";

export const getInfoUser = async (user) => {
  return axios({
    method: "get",
    url: `/users/${user}`,
  });
};
