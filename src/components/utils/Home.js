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
                    <img src='https://www.freeiconspng.com/thumbs/macbook/black-and-elegant-macbook-transparent-background-4.png' alt='' className='home__img' />
                </div>

                <div className='home__data'>
                    <span className='home__new'>Latest Gossip</span>
                    <h1 className='home__title'>IXUH BOOST <br/> Mac_Wares </h1>
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
                    <img src='https://www.freepnglogos.com/uploads/airpods-png/apple-airpods-headset-mmef-zubeh-34.png' alt='' className='home__img' />
                </div>

                <div className='home__data'>
                    <span className='home__new'>Latest Gossip</span>
                    <h1 className='home__title'>I_ACCESSORIES <br/> SPLY -350 </h1>
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
                    <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1630706116000' alt='' className='home__img' />
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
