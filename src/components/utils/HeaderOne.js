import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';

const HeaderOne = () => {
    const [open, setOpen] = useState(true)
    return (
        <header className='l-header'>
            <nav className='nav bd-grid'>
                <div className='nav__toggle' onClick={() => setOpen(!open)}>
                    <i><AiOutlineBars/></i>
                </div>

                <a href='#' className='nav__logo'>Ixuh_online</a>

                <div className={`${open ? 'nav__menu' : 'nav__menu show'}`}>
                    <ul className='nav__list' onClick={() => setOpen(!open)}>
                        <li className='nav__item'><NavLink exact to='/' activeClassName='nav__link active'>Home</NavLink></li>
                        <li className='nav__item'><NavLink to='/#' activeClassName='nav__link'>Featured</NavLink></li>
                        <li className='nav__item'><NavLink to='/gallery' activeClassName='nav__link active'>Gallery</NavLink></li>
                        <li className='nav__item'><NavLink to='/#' activeClassName='nav__link'>New</NavLink></li>
                        <li className='nav__item'><NavLink to='/shop' activeClassName='nav__link active'>Shop</NavLink></li>
                    </ul>
                </div>

                <div className='nav__shop'>
                    <i><FiShoppingBag/></i>
                </div>
            </nav>
        </header>
    )
}

export default HeaderOne
