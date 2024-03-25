function users() {
  get = function () {
    return axios.get("http://localhost:3000/users"); // cu libraria axios facem request uri
  };
  post = function (user) {
    return axios.post("http://localhost:3000/users", {
      data: user
    })
  };

  return {
    get: get,
    post:post,
  };
}
