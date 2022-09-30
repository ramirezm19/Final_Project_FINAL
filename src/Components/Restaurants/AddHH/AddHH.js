import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

let AddHH = () => {

    let navigate = useNavigate();

    let [state , setState] = useState({
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

    let updateInput = (event) => {
        console.log('tahdah')
        console.log(state);
        setState({
            ...state,
            restaurant: {
                ...state.restaurant,
                [event.target.name] : event.target.value
            }
        });
    };

    let submitForm = (event) => {
        console.log('hey')
        event.preventDefault();
                let dataURL = `${serverURL}/restaurants`;
            axios.post(dataURL, restaurant).then(response => {
                if (response) {
                    navigate('/Restaurants/HHList', { replace: true });
                }
            }).catch(error => {
                setState({ ...state, errorMessage: error.message });
            navigate(`/Restaurants/add`, { replace: false });
            console.log(error)
        });
    };

    let {loading, restaurant, errorMessage} = state;

    return (
        <React.Fragment>
            <section className='add-hh p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                        <p className='h3 text-center mt-4'><span className='update'>Add</span> Happy Hour</p>
                            <p className='fst-italic text-center mt-4'>Please provide the following information to submit a new Happy Hour.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Form onSubmit={submitForm}>
                                <Form.Group className="mb-3" controlId="restaurantName">
                                    <Form.Control type="text" placeholder="Enter Restaurant Name"   
                                    required={true} 
                                    name="name" 
                                    value={restaurant.name} 
                                    onChange={updateInput}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="restaurantAddress">
                                     <Form.Control type="text" placeholder="Enter Address" 
                                    required={true} 
                                    name="address" 
                                    value={restaurant.address} 
                                    onChange={updateInput}/>
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
                                </Form.Group> */}

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
                                    onChange={updateInput}/>
                                </InputGroup>

                                <Button className='submitHH mt-3' variant="warning" type="submit" onClick={submitForm}>Submit</Button>

                                <Link to={'/Restaurants/HHList'} className="btn btn-dark ms-2 mt-3">Cancel</Link>

                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default AddHH;