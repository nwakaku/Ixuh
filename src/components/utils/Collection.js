import iphone from '../../image/iphone11.jpg'
import laptop from '../../image/laptop1.jpg'

const Collection = () => {
    return (
        <section className='collection section'>
            <div className='collection__container bd-grid'>
                <div className='collection__card'>
                    <div className='collection__data'>
                        <h3 className='collection__name'>Iphones</h3>
                        <p className='collection__description'>New collection 2021</p>
                        <a href='#' className='button-light'>Buy now</a>
                    </div>

                    <img src={iphone} alt='' className='collection__img'/>
                </div>
                <div className='collection__card'>
                    <div className='collection__data'>
                        <h3 className='collection__name'>Laptops</h3>
                        <p className='collection__description'>New collection 2021</p>
                        <a href='#' className='button-light'>Buy now</a>
                    </div>

                    <img src={laptop} alt='' className='collection__img'/>
                </div>
            </div>
        </section>
    )
}

export default Collection
