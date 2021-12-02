import axios from "axios";
import {Car} from "../Models/models";
const apiUrl = 'http://localhost:3000';
export function ProxyApiService () {

}
export function getCars() {
    return axios.get<Car>(apiUrl + '/cars');
}
