import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Spinner from '../../Spinner/spinner';
import axios from 'axios';


let HHList = () => {

    let [state, setState] = useState({
        loading: false,
        restaurants: [],
        errorMessage: ''
    });
    const testurl = 'http://localhost:9000/restaurants';
    const fetchRestaurants = async () => {
        const response = await fetch(testurl)
        const data = await response.json()
        setState({ ...state, restaurants: data })
        console.log(data)
    }

    useEffect(() => {
        fetchRestaurants()
    }, []);

    let clickDelete = async (restaurantId) => {
        let dataURL = `${testurl}/${restaurantId}`;
        axios.delete(dataURL).then(async (response) => {
            if (response) {
                setState ({...state, loading: true});
                const response = await fetch(testurl)
                const data = await response.json()
                setState({
                    ...state,
                    loading: false,
                    restaurants: data,
                    filteredRestaurants: data
                });
            }
        });

    }

    let { loading, restaurants, errorMessage } = state;
    console.log(loading);
    console.log(restaurants);
    console.log(errorMessage);


    return (
        <React.Fragment>
            <section className='restaurant-search'>
                <div className='container'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col text-center'>
                                <p className='h3 text-center mt-4'>Happy Hour List </p>
                                
                                <p className="fst-italic text-center mt-4">This is the list of Happy Hours available in your area.</p>
                                
                                <Link to={'/Restaurants/add'}>
                                        <Button variant='warning m-3'> <i className='fa fa-plus-circle'></i> New Happy Hour</Button>
                                    </Link>

                                <p className="fst-italic text-center mt-4">Use this button to add a new Happy Hour to the list.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                loading ? <Spinner /> : <React.Fragment>
                    <section className='restaurant-list'>
                        <div className='container'>
                            {
                                restaurants.length > 0 &&
                                restaurants.map(restaurant => {
                                    return (
                                        <div className='cold-md-6' key={restaurant.id}>
                                            <div className='card my-4'>
                                                <div className='card-body'>
                                                    <div className='row align-items-center d-flex justify-content-around'>
                                                        <div className='col-md-4'>
                                                            <img src="https://i.pinimg.com/originals/29/26/86/2926865d55c73ca714ee75a98cf59918.png" className='restaurant-img'></img>
                                                        </div>
                                                        <div className='col-md-7'>
                                                            <ul className='list-group'>
                                                                <li className='list-group-item list-group-item-action'>
                                                                    Name: <span className='fw-bold'>{restaurant.name}</span>
                                                                </li>
                                                                <li className='list-group-item list-group-item-action'>
                                                                    Address: <span className='fw-bold'>{restaurant.address}</span>
                                                                </li>
                                                                {/* want to be able to learn how to change it on the db.json and hook it up so it will display
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
                                                        <div className='col-md-1 d-flex flex-column align-items-center'>
                                                            <Link to={`/Restaurants/view/${restaurant.id}`} className="btn btn-warning my-1"><i class='fa-solid fa-eye' />
                                                            </Link>
                                                            <Link to={`/Restaurants/edit/${restaurant.id}`} className="btn btn-info my-1"><i class='fa-solid fa-pen-clip' />
                                                            </Link>
                                                            <Button className="btn btn-danger my-1" onClick={() => clickDelete(restaurant.id)}><i class='fa-solid fa-trash-can' />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className='container mt-4'>
                        </div>
                    </section>
                </React.Fragment>
            }
        </React.Fragment>
    )
};

export default HHList;