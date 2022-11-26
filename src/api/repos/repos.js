import axios from "../axios";

export const getRepos = async (user) => {
  return axios({
    method: "get",
    url: `/users/${user}/repos`,
  });
};
