import React from 'react'
import PropTypes from 'prop-types';

import InputGroup from './shared/InputGroup';

const Header = ({ setSearch }) => {

    const images = {
        logo: '/images/Logo_ML.png',
        logo2x: '/images/Logo_ML@2x.png.png 2x',
        iconSearch: '/images/ic_Search.png',
        iconSearch2x: '/images/ic_Search@2x.png.png 2x'
    }

    return (
        <div className="finder__header">
            <div className="base__container">
                <div className="finder__search-box">
                    <img srcSet={ images.logo2x } src={ images.logo } alt="Mercado Libre"></img>
                    <InputGroup setValue={ setSearch } icon={ images.iconSearch } icon2x={ images.iconSearch2x } />
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    setSearch: PropTypes.func.isRequired
}

export default Header
