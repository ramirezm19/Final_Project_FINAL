import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RestaurantService from '../../../Services/RestaurantService';
import Marg from '../HHList/Marg.JPG';
import Spinner from '../../Spinner/spinner';
import axios from 'axios';

let ViewHH = () => {

    let { restaurantId } = useParams();

    let [state, setState] = useState({
        loading: false,
        restaurant: {},
        errorMessage: ''
    });

    const serverURL = `http://localhost:9000`;
    const fetchRestaurant = async () => {
        let dataURL = `${serverURL}/restaurants/${restaurantId}`;
        return axios.get(dataURL);
    }
    

    useEffect(() => {
        console.log('hey')
        setState({ ...state, loading: true });
        let response = fetchRestaurant().then(response => {
            console.log(response.data)
            setState({
                ...state,
                loading: false,
                restaurant: response.data
            })
        }).catch(response => {
            
        });
        console.log(response);
        
    }, []);

    //let {loading, restaurant, errorMessage } = state;

    //suggestion from Ben

    // const testurl = 'http://localhost:9000/restaurants';
    // const fetchRestaurant = async () => {
    //     const response = await fetch(testurl)
    //     const data = await response.json()
    //     setState({ ...state, restaurants: data })
    //     console.log(data);
    // }

    // useEffect((restaurantId) => {
    //     fetchRestaurant();
    // }, [restaurantId])

    let { loading, restaurant, errorMessage } = state;

    return (
        <React.Fragment>
            <section className='view-hh-intro p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p className='h3 text-center mt-4'><span className='update'>View</span> Happy Hour</p>
                            <p className='fst-italic text-center mt-4'>Restaurant Happy Hour details.</p>
                        </div>
                    </div>
                </div>
            </section>

            {
                loading ? <Spinner /> : <React.Fragment>
                    {
                        (restaurant) &&
                        <section className='view-hh mt-3'>
                            <div className='container'>
                                <div className='row align-items-center'>
                                    <div className='col-md-4'>
                                        <img src="https://i.pinimg.com/originals/29/26/86/2926865d55c73ca714ee75a98cf59918.png" className='restaurant-img'></img>
                                    </div>
                                    <div className='col-md-8'>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                Name: <span className='fw-bold'>{restaurant.name}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Address: <span className='fw-bold'>{restaurant.address}</span>
                                            </li>
                                            {/*want to figure out how to change it onto the db.json and hook it up so it will display
                                            <li className='list-group-item list-group-item-action'>
                                                Happy Hour Days: <span className='fw-bold'>XXXXX</span>
                                            </li> */}
                                            <li className='list-group-item list-group-item-action'>
                                                Happy Hour Times: <span className='fw-bold'>{restaurant.hhtimes}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Menu: <span className='fw-bold'>{restaurant.menu}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <Link to={'/Restaurants/HHList'} className='btn btn-warning mt-5'>Back</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }

                </React.Fragment>
            }
        </React.Fragment>
    )
};

export default ViewHH;