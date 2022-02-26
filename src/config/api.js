import axios from "axios"

/**
 * Setting up axios
 */
export const API = axios.create({
  baseURL: process.env.REACT_APP_BASEURL || "https://fakestoreapi.com/",
})

// Set Authorization Token Header
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete API.defaults.headers.common["Authorization"]
  }
}
