import i1 from '../../iPhone/iphone11.jpg';
import i2 from '../../iPhone/iphone12.jpg';
import i3 from '../../iPhone/iphone13.jpg';

const Featured = () => {
    return (
        <section className='featured section'>
            <h2 className='section-title'>FEATURED</h2>

            <div className='featured__container bd-grid'>
                <article className='sneaker'>
                    <div className='sneaker__sale'>Sale</div>
                    <img src={i1} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>iPhone 12</span>
                    <span className='sneaker__price'>$149.99</span>
                    <small>50% OFF</small>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>
                <article className='sneaker'>
                    <div className='sneaker__sale'>Sale</div>
                    <img src={i2} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>iPhone 11</span>
                    <span className='sneaker__price'>$149.99</span>
                    <small>50% OFF</small>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>
                <article className='sneaker'>
                    <div className='sneaker__sale'>Sale</div>
                    <img src={i3} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>iPhone 13</span>
                    <span className='sneaker__price'>$149.99</span>
                    <small>70% OFF</small>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>
                
            </div>
        </section>
    )
}

export default Featured
