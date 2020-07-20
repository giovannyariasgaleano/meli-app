import React from 'react'
import PropTypes from 'prop-types';

import InputGroup from './shared/InputGroup';

import Logo from '../assets/Logo_ML.png';
import Logo2x from '../assets/Logo_ML@2x.png.png';
import SearchIcon from '../assets/ic_Search.png';
import SearchIcon2x from '../assets/ic_Search@2x.png.png';

const FinderHeader = ({ setSearch }) => {
    return (
        <div className="finder__header">
            <div className="base__container">
                <div className="finder__search-box">
                    <img srcSet={`${Logo2x} 2x`} src={Logo} alt="Mercado Libre"></img>
                    <InputGroup setValue={ setSearch } icon={ SearchIcon } icon2x={ SearchIcon2x } />
                </div>
            </div>
        </div>
    )
}

FinderHeader.propTypes = {
    setSearch: PropTypes.func.isRequired
}

export default FinderHeader
