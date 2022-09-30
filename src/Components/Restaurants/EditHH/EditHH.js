import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/esm/Spinner';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Marg from '../HHList/Marg.JPG';
import axios from 'axios';

let EditHH = () => {

    let navigate = useNavigate();

    let { restaurantId } = useParams();

    let [state, setState] = useState({
        loading: false,
        restaurant: {
            name: '',
            address: '',
            hhtimes: '',
            menu: ''
        },
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

    let updateInput = (event) => {
        setState({
            ...state,
            restaurant: {
                ...state.restaurant,
                [event.target.name]: event.target.value
            }
        })
    };

    let submitForm = (event) => {
        console.log('hey')
        event.preventDefault();
                let dataURL = `${serverURL}/restaurants/${restaurantId}`;
            axios.put(dataURL, restaurant).then(response => {
                if (response) {
                    navigate('/Restaurants/HHList', { replace: true });
                }
            }).catch(error => {
                setState({ ...state, errorMessage: error.message });
            navigate(`/Restaurants/edit/${restaurantId}`, { replace: false });
            console.log(error)
        });
    };

    let { loading, restaurant, errorMessage } = state;

    return (
        <React.Fragment>
            {
                loading ? <Spinner /> : <React.Fragment>
                    <section className='add-hh p-3'>
                        <div className='container align-items-center'>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <p className='h3 text-center mt-4'><span className='update'>Update</span> Happy Hour</p>
                                    <p className='fst-italic text-center mt-4'>Provide the following details to update the Happy Hour at this restaurant.</p>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-md-6'>
                                    <Form onSubmit={submitForm}>
                                        <Form.Group className="mb-3" controlId="restaurantName">
                                            <Form.Control type="text" placeholder="Enter Restaurant Name"
                                                required={true}
                                                name="name"
                                                value={restaurant.name}
                                                onChange={updateInput} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="restaurantAddress">
                                            <Form.Control type="text" placeholder="Enter Address"
                                                required={true}
                                                name="address"
                                                value={restaurant.address}
                                                onChange={updateInput} />
                                            <Form.Text className="text-muted">
                                                Example: 123 E. Some Way, Little Town, XX 12345
                                            </Form.Text>
                                        </Form.Group>

{/* added the photo url section so that each individual restaurant has a different image. Now need to change the db.json and hook it up to display */}
                                    {/* <Form.Group className="mb-3" controlId="photourl">
                                        <Form.Control type='text' placeholder='Photo URL'
                                            required={true}
                                            name='days'
                                            value={restaurant.photourl}></Form.Control>
                                        <Form.Text className='text-muted'>Google cocktail illustration image pgn, select your favorite photo, right click on it, and copy image address and paste here.
                                         </Form.Text>
                                     </Form.Group> */}

{/* changed how to enter it from checkbox list to text input. Now need to change the db.json and hook it up to display */}
                                    {/* <Form.Group className="mb-3" controlId="hhDays">
                                        <Form.Control type='text' placeholder='Enter Happy Hour Days'
                                            required={true}
                                            name='days'
                                            value={restaurant.hhDays}></Form.Control>
                                        <Form.Text className='text-muted'>Example: M-F, no Sat. or Sun.
                                        </Form.Text>
                                    </Form.Group>                                 */}

                                        <Form.Group className="mb-3" controlId="restaurantTimes">
                                            <Form.Control type="text" placeholder="Enter Happy Hour Times"
                                                required={true}
                                                name="hhtimes"
                                                value={restaurant.hhtimes}
                                                onChange={updateInput} />
                                            <Form.Text className="text-muted">
                                                Example: 2pm-6pm
                                            </Form.Text>
                                        </Form.Group>

                                        <InputGroup controlId="restaurantMenu">
                                            <Form.Control as="textarea" placeholder="Enter Happy Hour Menu" aria-label="With textarea"
                                                required={true}
                                                name="menu"
                                                value={restaurant.menu}
                                                onChange={updateInput} />
                                        </InputGroup>

                                        <Button className='submitHH mt-3' variant="warning" type="submit" onClick={submitForm}>Update</Button>

                                        <Link to={'/Restaurants/HHList'} className="btn btn-dark ms-2 mt-3">Cancel</Link>

                                    </Form>
                                </div>
                                <div className='col-md-6'>
                                    <img src="https://i.pinimg.com/originals/29/26/86/2926865d55c73ca714ee75a98cf59918.png" className='restaurant-img'></img>
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            }
        </React.Fragment>
    )
};

export default EditHH;