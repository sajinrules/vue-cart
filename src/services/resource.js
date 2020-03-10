import axios from "axios";
// https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322
// You can use your own logic to set your local or production domain
const baseDomain = "localhost:3000";
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL
});
