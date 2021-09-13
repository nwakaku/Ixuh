import r1 from '../../images/r1.jpg'
import r2 from '../../images/r2.jpg'
import r3 from '../../images/r3.jpg'
import r4 from '../../images/r4.jpg'

const NewCollection = () => {
    return (
        <section className='new section'>
            <h2 className='section-title'>NEW COLLECTION</h2>

            <div className='new__container bd-grid'>
                <div className='new__mens'>
                    <img src={r1} alt='' className='new__mens-img'/>
                    <h3 className='new__title'>Mens Shoes</h3>
                    <span className='new__price'>From $79.99</span>
                    <a href='#' className='button-light'>View Collection</a>
                </div>

                    <div className='new__sneaker'>
                        <div className='new__sneaker-card'>
                            <img src={r2} alt='' className='new__sneaker-img' />
                            <div className='new__sneaker-overlay'>
                                <a href='#' className='button'>Add to Cart</a>
                            </div>
                        </div>

                        <div className='new__sneaker-card'>
                            <img src={r3} alt='' className='new__sneaker-img' />
                            <div className='new__sneaker-overlay'>
                                <a href='#' className='button'>Add to Cart</a>
                            </div>
                        </div>

                        <div className='new__sneaker-card'>
                            <img src={r4} alt='' className='new__sneaker-img' />
                            <div className='new__sneaker-overlay'>
                                <a href='#' className='button'>Add to Cart</a>
                            </div>
                        </div>

                        <div className='new__sneaker-card'>
                            <img src={r2} alt='' className='new__sneaker-img' />
                            <div className='new__sneaker-overlay'>
                                <a href='#' className='button'>Add to Cart</a>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default NewCollection
