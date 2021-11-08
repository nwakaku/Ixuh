import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css';
import a from '../../iPhone/iphoneX.jpg';
import b from '../../iPhone/iphone13.jpg';
import c from '../../iPhone/iphone11.jpg';
import d from '../../iPhone/iphone12.jpg';
import e from '../../iPhone/a.jpg';
import f from '../../iPhone/b.jpg';
import g from '../../iPhone/c.jpg';
import h from '../../iPhone/d.jpg';

const GalleryUtils = () => {
    return (
        <section className='section-three'>
            <div className='container'>
                <div className='menu_header'>
                    <h2 >OUR GALLERY</h2>
                    <span>@ixuh_online</span> 
                </div>
                
                <SRLWrapper>
                <div className='gallery'>
                    <a href = {a}>
                        <div className='single-img'>
                            <img src={a} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Armor_Lab Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {b}>
                        <div className='single-img'>
                            <img src={b} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {c}>
                        <div className='single-img'>
                            <img src={c} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Charge And Bell</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {d}>
                        <div className='single-img'>
                            <img src={d} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Perfect Understanding</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {e}>
                        <div className='single-img'>
                            <img src={e} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Creativity_Hub</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {f}>
                        <div className='single-img'>
                            <img src={f} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Abstract Design</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {g}>
                        <div className='single-img'>
                            <img src={g} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Armor || Shield</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {a}>
                        <div className='single-img'>
                            <img src={a} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Winner || Armor</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {b}>
                        <div className='single-img'>
                            <img src={b} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {c}>
                        <div className='single-img'>
                            <img src={c} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {d}>
                        <div className='single-img'>
                            <img src={d} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Cheap || Clerk</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {e}>
                        <div className='single-img'>
                            <img src={e} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Armor Brandee</h3>
                            </div>
                        </div>
                    </a>
                </div>
                </SRLWrapper>

                {/* pagination div */}
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
        </section>
    )
}

export default GalleryUtils
