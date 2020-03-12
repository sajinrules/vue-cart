import resource from "./resource";

const entity = "/users";
const auth = '/auth/login'
export default {
  getAlls() {
    return resource.get(`${entity}`);
  },

  get(id) {
    return resource.get(`${entity}/${id}`);
  },

  create(payload) {
    return resource.post(`${entity}`, payload);
  },

  signIn({email, password}) {
    return resource.post(`${auth}`, {email, password});
  }
};
