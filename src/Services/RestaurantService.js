import axios from 'axios';

export class RestaurantService {
    static serverURL = `http://localhost:9000`;

    static getAllRestaurants() {
        let dataURL = `${this.serverURL}/restaurants`;
        return axios.get(dataURL);
    }

    static getRestaurant(restaurantId) {
        let dataURL = `${this.serverURL}/restaurants/${restaurantId}`;
        return axios.get(dataURL);
    }

    static createRestaurant(restaurant) {
        let dataURL = `${this.serverURL}/restaurants`;
        return axios.post(dataURL, restaurant);
    }

    static updateRestaurant(restaurant, restaurantId) {
        let dataURL = `${this.serverURL}/restaurants/${restaurantId}`;
        return axios.put(dataURL, restaurant);
    }

    static deleteRestaurant(restaurantId){
        let dataURL = `${this.serverURL}/restaurants/${restaurantId}`;
        return axios.delete(dataURL);
    }
}

export default new RestaurantService();