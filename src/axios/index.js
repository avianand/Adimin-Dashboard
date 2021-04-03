import axios from "axios";
import { baseURL } from "../utils/urls";

export default axios.create({
  baseURL: baseURL,
});
