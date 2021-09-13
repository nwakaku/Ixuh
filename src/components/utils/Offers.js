import r4 from '../../images/r4.jpg'

const Offers = () => {
    return (
        <section className='offer section'>
            <div className='offer__container bd-grid'>
                <div className='offer__data'>
                    <h3 className='offer__title'>50% OFF</h3>
                    <p className='offer__discription'>In Adidas Superstart sneakers</p>
                    <a href='#' className='button'>Shop Now</a>
                </div>

                <img src={r4} alt='' className='offer__img'/>
            </div>
        </section>
    )
}

export default Offers
