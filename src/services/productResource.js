import resource from "./resource";

const entity = "/products";
export default {
  getAll() {
    return resource.get(`${entity}`);
  },

  get(id) {
    return resource.get(`${entity}/${id}`);
  },

  create(payload) {
    return resource.post(`${entity}`, payload);
  }
};
