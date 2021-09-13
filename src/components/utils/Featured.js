import r2 from '../../images/r2.jpg';
import r3 from '../../images/r3.jpg';
import r4 from '../../images/r4.jpg';

const Featured = () => {
    return (
        <section className='featured section'>
            <h2 className='section-title'>FEATURED</h2>

            <div className='featured__container bd-grid'>
                <article className='sneaker'>
                    <div className='sneaker__sale'>Sale</div>
                    <img src={r2} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>
                <article className='sneaker'>
                    <div className='sneaker__sale'>Sale</div>
                    <img src={r3} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>
                <article className='sneaker'>
                    <div className='sneaker__sale'>Sale</div>
                    <img src={r4} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>
                
            </div>
        </section>
    )
}

export default Featured
