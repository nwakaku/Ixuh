import React,{useState} from 'react'

const HeaderOne = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className='l-header'>
            <nav className='nav bd-grid'>
                <div className='nav__toggle' onClick={() => setOpen(!open)}>
                    <i>ul</i>
                </div>

                <a href='#' className='nav__logo'>Ixuh</a>

                <div className={`${open ? 'nav__menu' : 'nav__menu show'}`}>
                    <ul className='nav__list' onClick={() => setOpen(!open)}>
                        <li className='nav__item'><a href='#home' className='nav__link active'>Home</a></li>
                        <li className='nav__item'><a href='#featured' className='nav__link'>Featured</a></li>
                        <li className='nav__item'><a href='#women' className='nav__link'>Women</a></li>
                        <li className='nav__item'><a href='#new' className='nav__link'>New</a></li>
                        <li className='nav__item'><a href='#' className='nav__link'>Shop</a></li>
                    </ul>
                </div>

                <div className='nav__shop'>
                    <i>ul</i>
                </div>
            </nav>
        </header>
    )
}

export default HeaderOne
