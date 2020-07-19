import React from 'react'

import Search from './Search';

import Logo from '../assets/Logo_ML.png';
import Logo2x from '../assets/Logo_ML@2x.png.png';

const FinderHeader = () => {
    return (
        <div className="finder__header">
            <div className="base__container">
                <div className="finder__search-box">
                    <img srcSet={`${Logo2x} 2x`} src={Logo} alt="Mercado Libre"></img>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default FinderHeader
