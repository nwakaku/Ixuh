import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'
import logo from '../../ixuhs/hd.png';

const HeaderOne = () => {
    const [open, setOpen] = useState(true)
    return (
        <header className='l-header'>
            <nav className='nav bd-grid'>
                <div className='nav__toggle' onClick={() => setOpen(!open)}>
                    <i><AiOutlineBars/></i>
                </div>

                <a href='#' className='nav__logo'>
                    <img src={logo} />
                </a>

                <div className={`${open ? 'nav__menu' : 'nav__menu show'}`}>
                    <ul className='nav__list' onClick={() => setOpen(!open)}>
                        <li className='nav__item'><NavLink exact to='/' activeClassName='nav__link active'>Home</NavLink></li>
                        <li className='nav__item'><NavLink to='/gallery' activeClassName='nav__link active'>Gallery</NavLink></li>
                        <li className='nav__item'><NavLink to='/prices' activeClassName='nav__link active'>PriceAlert</NavLink></li>
                        <li className='nav__item'><NavLink to='/shop' activeClassName='nav__link active'>Shop</NavLink></li>
                        <li className='nav__item'><NavLink to='/login' activeClassName='nav__link active'><i className='signup'><CgProfile/></i></NavLink></li>
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
