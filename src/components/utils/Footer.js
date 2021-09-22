import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';


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
                        <li><a href='#home' className='footer__link'>Home</a></li>
                        <li><a href='#featured' className='footer__link'>Featured</a></li>
                        <li><a href='#women' className='footer__link'>GiveAways</a></li>
                        <li><a href='#new' className='footer__link'>News</a></li>
                    </ul>
                </div>

                <div className='footer__box'>
                    <h3 className='footer__title'>SUPPORT</h3>
                    <ul>
                        <li><a href='#' className='footer__link'>Product Help</a></li>
                        <li><a href='#' className='footer__link'>Customer Care</a></li>
                        <li><a href='#' className='footer__link'>Authorized service</a></li>
                    </ul>
                </div>

                <div className='footer__box'>
                    <a href='#' className='footer__social'><i><TiSocialFacebook/></i></a>
                    <a href='#' className='footer__social'><i><TiSocialTwitter/></i></a>
                    <a href='#' className='footer__social'><i><TiSocialInstagram/></i></a>
                    <a href='#' className='footer__social'><i><TiSocialYoutube/></i></a>
                </div>

            </div>
            <p className='footer__copy'>&#169; 2020 Ixuh. All right reserved</p>

        </footer>
    )
}

export default Footer
