import a from '../../iPhone/iphoneX.jpg';
import b from '../../iPhone/iphone13.jpg';
import c from '../../iPhone/iphone11.jpg';
import d from '../../iPhone/iphone12.jpg';
import e from '../../iPhone/a.jpg';
import f from '../../iPhone/b.jpg';
import g from '../../iPhone/c.jpg';
import h from '../../iPhone/d.jpg';



const Featured = () => {
    return (
        <section className='featured section'>
            <h2 className='section-title'>All products</h2>

            <div className='featured__container bd-grid'>

                <article className='sneaker'>
                    <img src={a} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>iPhone X</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={b} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>iPhone 11</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={d} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>iPhone 12</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={c} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>iPhone 8s +</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={e} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>iPhone 7</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={f} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>iPhone 6</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={g} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>iPhone 4</span>
                    <span className='sneaker__price'>$149.99</span>
                    <a href='' className='button-light'>Add to Cart</a>
                </article>

                <article className='sneaker'>
                    <img src={a} alt='' className='sneaker__img' />
                    <span className='sneaker__name'>iPhone 5</span>
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
