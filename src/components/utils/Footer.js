import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='footer section'>
            <div className='footer__container bd-grid'>
                <div className='footer__box'>
                    <h3 className='footer__title'>Ixuh</h3>
                    <p className='footer__description'>New Collection of Gadgets 2021.</p>
                </div>

                <div className='footer__box'>
                    <h3 className='footer__title'>EXPLORE</h3>
                    <ul>
                        <li><Link  to='/' className='footer__link'>Home</Link ></li>
                        <li><Link  to='/gallery' className='footer__link'>Gallery</Link ></li>
                        <li><Link  to='/price' className='footer__link'>PriceAlert</Link ></li>
                        <li><Link  to='/shop' className='footer__link'>Shop</Link ></li>
                    </ul>
                </div>

                <div className='footer__box'>
                    <h3 className='footer__title'>SUPPORT</h3>
                    <ul>
                        <li><Link  to='/' className='footer__link'>Product Help</Link ></li>
                        <li><Link  to='/' className='footer__link'>Customer Care</Link ></li>
                        <li><Link  to='/' className='footer__link'>Authorized service</Link ></li>
                    </ul>
                </div>

                <div className='footer__box'>
                    <Link  to='/' className='footer__social'><i><TiSocialFacebook/></i></Link >
                    <Link  to='/' className='footer__social'><i><TiSocialTwitter/></i></Link >
                    <Link  to='/' className='footer__social'><i><TiSocialInstagram/></i></Link >
                    <Link  to='/' className='footer__social'><i><TiSocialYoutube/></i></Link >
                </div>

            </div>
            <p className='footer__copy'>&#169; 2020 Ixuh. All right reserved</p>

        </footer>
    )
}

export default Footer
