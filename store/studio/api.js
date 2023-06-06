import axios from "axios"
import { STUDIO_USERNAME, STUDIO_PASSWORD } from "react-native-dotenv"
const studio = axios.create({
  baseURL: "https://www.google.com/",
  auth: { username: STUDIO_USERNAME, password: STUDIO_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
