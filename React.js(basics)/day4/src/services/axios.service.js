import axios from "axios"
const BackendUrl='https://dummyjson.com/'
 
export const getData=async(url)=>{
const response= await axios.get(BackendUrl+url);
return response
}