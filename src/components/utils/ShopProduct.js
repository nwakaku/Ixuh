import r1 from '../../images/r1.jpg';
import r2 from '../../images/r2.jpg';
import r3 from '../../images/r3.jpg';
import r4 from '../../images/r4.jpg';
import r5 from '../../images/r5.jpg';
import r6 from '../../images/r6.jpg';
import r7 from '../../images/r7.jpeg';
import r8 from '../../images/r8.jpeg';

const Featured = () => {
    return (
        <section className='featured section'>
            <h2 className='section-title'>All products</h2>

            <div className='featured__container bd-grid'>

                <article className='sneaker'>
                    <img src={r1} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={r2} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={r3} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={r4} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={r5} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={r6} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={r7} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>Wisdom_Chris</span>
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

            <div className='sneaker__pages bd-grid'>
                <div>
                    <span className='sneaker__pag'>1</span>
                    <span className='sneaker__pag'>2</span>
                    <span className='sneaker__pag'>3</span>
                    <span className='sneaker__pag'>4</span>
                    <span className='sneaker__pag'>&#8594;</span>
                </div>
            </div>
        </section>
    )
}

export default Featured
