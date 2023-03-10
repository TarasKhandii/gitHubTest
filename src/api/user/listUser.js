import axios from "../axios";

export const getListUser = async (page = 1, text = "a") => {
  return axios({
    method: "get",
    url: `/search/users?q=${text}&page=${page}&per_page=21`,
  });
};
