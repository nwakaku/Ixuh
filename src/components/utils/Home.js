import r1 from '../../images/r2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Home = () => {
    return (
         <Carousel 
            animationHandler='fade' 
            showThumbs={false}
            swipeable={false}
            infiniteLoop={true}
            interval={3000}
            autoPlay={true}
            transitionTime={2000} >
                {/* FIRST */}
                <section className='home'>
            <div className='home__container bg-grid'>
                <div className='home__sneaker'>
                    <div className='home__shape'></div>
                    {/* <img src={r1} alt='' className='home__img' /> */}
                </div>

                <div className='home__data'>
                    <span className='home__new'>Latest Gossip</span>
                    <h1 className='home__title'>YEEZY BOOST <br/> SPLY -350 </h1>
                    <p className='home__description'>Exchange your X's to Gold</p>
                    <a href='#' className='button'>Contact Us</a>
                </div>
            </div>
        </section>

        {/* SECOND */}
        <section className='home'>
            <div className='home__container bg-grid'>
                <div className='home__sneaker'>
                    <div className='home__shape'></div>
                    {/* <img src={r1} alt='' className='home__img' /> */}
                </div>

                <div className='home__data'>
                    <span className='home__new'>Latest Gossip</span>
                    <h1 className='home__title'>YEEZY BOOST <br/> SPLY -350 </h1>
                    <p className='home__description'>Exchange your X's to Gold</p>
                    <a href='#' className='button'>Contact Us</a>
                </div>
            </div>
        </section>

        {/* THIRD */}
        <section className='home'>
            <div className='home__container bg-grid'>
                <div className='home__sneaker'>
                    <div className='home__shape'></div>
                    {/* <img src={r1} alt='' className='home__img' /> */}
                </div>

                <div className='home__data'>
                    <span className='home__new'>Latest Gossip</span>
                    <h1 className='home__title'>YEEZY BOOST <br/> SPLY -350 </h1>
                    <p className='home__description'>Exchange your X's to Gold</p>
                    <a href='#' className='button'>Contact Us</a>
                </div>
            </div>
        </section>

            </Carousel>

       
    )
}

export default Home
