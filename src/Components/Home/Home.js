import React from "react";


let Home = () => {
    return (
        <React.Fragment>
            <section className='home'>
                <div className="container">
                    <div className='row'>
                        <div className="col-text-center">
                            <p className='h3 text-center mt-4'><span className='update' >Welcome to</span> <span className='text-warning'>Sip</span></p>
                            <p className='h3 text-center'> A Happy Hour App</p>

                            <div className="container mt-4">
                                <div className="row">
                                    <img src='https://images.axios.com/LpGZh735aoKswz7DLf6LStjL8UU=/2022/05/03/1651617895918.png' className="happyhour"></img>
                                </div>
                            </div>

                            <p className='h4 text-center mt-4'>Do you wish you had a list of all the happy hours close to you?</p>
                            <p className=' h4 text-center mt-4'>Do you have a list but it doesn't have details...like the menu?</p>

                            <p className='text-center mt-4'>We've the app for you. Sip is an app where the public can look at available restaurants, bars, etc. for their happy hours, days, times, and menus. Click on the "Happy Hours" link to view available Happy Hours.</p>

                            <p className='text-center mt-4'>Want to contribute to our list? Click on the "New Happy Hour" link to submit your new favorite Happy Hour. OR click on the "Happy Hours" link and hit the Edit (pen button) on any restaurant to submit updated information. </p>

                            <p className='h4 text-center mt-4'>Cheers! </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </React.Fragment>


    );
}

export default Home;