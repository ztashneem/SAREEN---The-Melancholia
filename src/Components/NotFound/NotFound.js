import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <section className=' container-fluid p-lg-5 notfound'>
                <div className='row mx-auto justify-content-center align-items-center'>
                    <div className='col-md-5 text-light '>
                        <p className='mb-2 '>
                            Error 404
                        </p>
                        <h1 className='mb-4 '>
                            Oops! The page you're looking for isn't here.
                        </h1>
                        <p className='mb-5 '>
                            You might have the wrong address, or the page may have moved.
                        </p>
                        <div className='d-flex gap-4'>
                            <p>
                                <Link
                                    to='/'
                                    className='btn - btn-outline-light'
                                >
                                    Back to homepage
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to='/contact'
                                    className='btn - btn-outline-light'
                                >
                                    Contact us
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className='col-md-7'>
                        <Link to='/'>
                            <img className='img-fluid object-cover'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08gBHsaCNZZUIimIw7Qj-v6v_OG-I3iEN5qa5UBusCA4DsULlVjw4yrrqqz53O3wUfkw&usqp=CAU'
                                alt=''
                            />
                        </Link>

                    </div>
                </div>
                <div className='notfounds'>

                </div>
            </section>
        </div>
    );
};

export default Notfound;