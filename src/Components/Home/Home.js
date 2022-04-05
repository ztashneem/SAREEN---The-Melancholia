import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReviewContext } from '../../App';
import CustomLink from '../CoustomLink/CustomLink';
import HomeReview from '../HomePageReview/HomeReview';


const Home = () => {
    const [review, setReview] = useContext(ReviewContext);
    const newReview = [...review];
    console.log(newReview.slice(0, 3));
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [setReview])
    return (
        <div className='container '>
            <div className="row  pt-lg-5 justify-content-center align-items-center">
                <div className="col-md-5   ">
                    <img src={`https://cdn.pixabay.com/photo/2019/02/26/02/13/ukulele-4021002_1280.jpg`} className='img-fluid ' alt="" />
                </div>
                <div className="col-md-7 py-3  ">
                    <h1>Let music flow in your heart and enrich your soul</h1>
                    <h1 className='text-muted'>“The only truth is music.”</h1>
                    <p>Let music flow in your heart and enrich your soul..
                        “Music gives a soul to the universe, wings to the mind, flight to the imagination
                        and life to everything.”
                        ― Plato

                        “Musical training is a more potent instrument than any other, because rhythm and harmony find their way into the inward places of the soul.”
                    </p>

                    <p>
                        <CustomLink className='btn btn-outline-dark px-lg-5 px-3' to='/contact'> Live Show</CustomLink>
                    </p>
                </div>
                <h1 className='text-center my-5 specing'>What SAKYB Says! </h1>
                <div className="review-container">

                    {
                        newReview.slice(0, 3).map(singleReview => <HomeReview key={singleReview.id} singleReview={singleReview}></HomeReview>)
                    }

                </div>

                <p className='my-5 text-center'><Link className='btn px-lg-5 px-3 btn-outline-dark' to='/reviews'>See All Reviews</Link></p>
            </div>

        </div>
    );
};

export default Home;