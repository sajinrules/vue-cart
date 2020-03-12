import ProductResource from "./productResource";
import UserResource from "./userResource";

const resources = {
  products: ProductResource,
  users: UserResource
  // other resources ...
};

export const ResourceFactory = {
  get: name => resources[name]
};
