import r5 from '../../images/r5.jpg'
import r6 from '../../images/r6.jpg'

const Collection = () => {
    return (
        <section className='collection section'>
            <div className='collection__container bd-grid'>
                <div className='collection__card'>
                    <div className='collection__data'>
                        <h3 className='collection__name'>Nike</h3>
                        <p className='collection__description'>New collection 2020</p>
                        <a href='#' className='button-light'>Buy now</a>
                    </div>

                    <img src={r5} alt='' className='collection__img'/>
                </div>
                <div className='collection__card'>
                    <div className='collection__data'>
                        <h3 className='collection__name'>Nike</h3>
                        <p className='collection__description'>New collection 2020</p>
                        <a href='#' className='button-light'>Buy now</a>
                    </div>

                    <img src={r6} alt='' className='collection__img'/>
                </div>
            </div>
        </section>
    )
}

export default Collection
