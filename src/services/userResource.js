import httpClient from "./resource";

const entity = "/users";
const auth = '/auth/login'
export default {
  getAlls() {
    return httpClient.get(`${entity}`);
  },

  get(id) {
    return httpClient.get(`${entity}/${id}`);
  },

  create(payload) {
    return httpClient.post(`${entity}`, payload);
  },

  signIn({email, password}) {
    return httpClient.post(`${auth}`, {email, password});
  }
};
