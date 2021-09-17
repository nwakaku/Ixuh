import r6 from '../../image/laptop1.jpg'
import r7 from '../../image/laptop3.jpg'
import r8 from '../../image/pad1.jpg'

const Category1 = () => {
    return (
        <section className='women section'>
            <h2 className='section-title'>LAPTOP COLLECTION</h2>

            <div className='women__container bd-grid'>

                <article className='sneaker'>
                    <div className='sneaker__sale'>Sale</div>
                    <img src={r6} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Dell Laptops</span>
                    <span className='sneaker__price'>$109.99</span>
                    <small>50% OFF</small>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <div className='sneaker__sale'>Sale</div>
                    <img src={r7} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Toshiba Laptops</span>
                    <span className='sneaker__price'>$189.99</span>
                    <small>50% OFF</small>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <div className='sneaker__sale'>Sale</div>
                    <img src={r8} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Hp Laptops</span>
                    <span className='sneaker__price'>$89.99</span>
                    <small>70% OFF</small>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>
            </div>
        </section>
    )
}

export default Category1
