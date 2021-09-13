import r6 from '../../images/r6.jpg'
import r7 from '../../images/r7.jpeg'
import r8 from '../../images/r8.jpeg'

const Category1 = () => {
    return (
        <section className='women section'>
            <h2 className='section-title'>WOMEN SNEAKERS</h2>

            <div className='women__container bd-grid'>

                <article className='sneaker'>
                    <img src={r6} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={r7} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={r8} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>
            </div>
        </section>
    )
}

export default Category1
