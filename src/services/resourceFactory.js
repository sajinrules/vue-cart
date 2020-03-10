import ProductResource from "./productResource";
import UserResource from "./productResource";

const resources = {
  products: ProductResource,
  users: UserResource
  // other resources ...
};

export const ResourceFactory = {
  get: name => resources[name]
};
