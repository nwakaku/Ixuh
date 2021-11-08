import React from 'react';
import './price.css'

const PriceUtils = () => {
    return (
        <div className='table-container'>
            <h1 className='heading'>PriceAlert Table</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Last Update</th>
                        <th>State</th>
                        <th>Iphone Name</th>
                        <th>RAM</th>
                        <th>Market Status</th>
                        <th>Price</th>
                        <th>Order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-aria-label='Last Update'>1 jan 2021</td>
                        <td data-aria-label='State'>London Used</td>
                        <td data-aria-label='Iphone Name'>Iphone 13pro max</td>
                        <td data-aria-label='RAM'>256gb</td>
                        <td data-aria-label='Market Status'>
                            <span className='text_open'>[ Open ]</span>
                        </td>
                        <td data-aria-label='Price'>#880k</td>
                        <td data-aria-label='Order'>
                            <a href='#' className='btn'>Place Order</a>
                        </td>
                    </tr>

                    <tr>
                        <td data-aria-label='Last Update'>1 jun 2021</td>
                        <td data-aria-label='State'>London Used</td>
                        <td data-aria-label='Iphone Name'>Iphone 11pro max</td>
                        <td data-aria-label='RAM'>64gb</td>
                        <td data-aria-label='Market Status'>
                            <span className='text_open'>[ Open ]</span>
                        </td>
                        <td data-aria-label='Price'>#320k</td>
                        <td data-aria-label='Order'>
                            <a href='#' className='btn'>Place Order</a>
                        </td>
                    </tr>

                    <tr>
                        <td data-aria-label='Last Update'>1 dec 2021</td>
                        <td data-aria-label='State'>Brand New</td>
                        <td data-aria-label='Iphone Name'>Iphone 8s + </td>
                        <td data-aria-label='RAM'>246gb</td>
                        <td data-aria-label='Market Status'>
                            <span className='text_open'>[ Open ]</span>
                        </td>
                        <td data-aria-label='Price'>#175k</td>
                        <td data-aria-label='Order'>
                            <a href='#' className='btn'>Place Order</a>
                        </td>
                    </tr>

                    <tr>
                        <td data-aria-label='Last Update'>1 may 2021</td>
                        <td data-aria-label='State'>2nd hand</td>
                        <td data-aria-label='Iphone Name'>Iphone 13 mini </td>
                        <td data-aria-label='RAM'>128gb</td>
                        <td data-aria-label='Market Status'>
                            <span className='text_open'>[ Open ]</span>
                        </td>
                        <td data-aria-label='Price'>#500k</td>
                        <td data-aria-label='Order'>
                            <a href='#' className='btn'>Place Order</a>
                        </td>
                    </tr>

                    <tr>
                        <td data-aria-label='Last Update'>21 nov 2021</td>
                        <td data-aria-label='State'>London Used</td>
                        <td data-aria-label='Iphone Name'>Iphone 12 pro</td>
                        <td data-aria-label='RAM'>256gb</td>
                        <td data-aria-label='Market Status'>
                            <span className='text_open'>[ Open ]</span>
                        </td>
                        <td data-aria-label='Price'>#450k</td>
                        <td data-aria-label='Order'>
                            <a href='#' className='btn'>Place Order</a>
                        </td>
                    </tr>

                    <tr>
                        <td data-aria-label='Last Update'>1 sept 2021</td>
                        <td data-aria-label='State'>Brand New</td>
                        <td data-aria-label='Iphone Name'>Iphone 12 mini </td>
                        <td data-aria-label='RAM'>246gb</td>
                        <td data-aria-label='Market Status'>
                            <span className='text_open'>[ Open ]</span>
                        </td>
                        <td data-aria-label='Price'>#320k</td>
                        <td data-aria-label='Order'>
                            <a href='#' className='btn'>Place Order</a>
                        </td>
                    </tr>

                    <tr>
                        <td data-aria-label='Last Update'>1 dec 2021</td>
                        <td data-aria-label='State'>London Used</td>
                        <td data-aria-label='Iphone Name'>Iphone 11 pro</td>
                        <td data-aria-label='RAM'>256gb</td>
                        <td data-aria-label='Market Status'>
                            <span className='text_open'>[ Open ]</span>
                        </td>
                        <td data-aria-label='Price'>#270k</td>
                        <td data-aria-label='Order'>
                            <a href='#' className='btn'>Place Order</a>
                        </td>
                    </tr>

                    
                   
                </tbody>
            </table>
            <div className='sneaker__pages bd-grid'>
                <div>
                    <span className='sneaker__pag'>1</span>
                    <span className='sneaker__pag'>2</span>
                    <span className='sneaker__pag'>3</span>
                    <span className='sneaker__pag'>4</span>
                    <span className='sneaker__pag'>&#8594;</span>
                </div>
            </div>
        </div>
    )
}

export default PriceUtils
