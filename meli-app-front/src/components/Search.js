import React from 'react'

import SearchButton from '../assets/ic_Search.png';
import SearchButton2x from '../assets/ic_Search@2x.png.png';

const Search = () => {

    const style = {
        inputGroup: {
            display: 'flex',
            width: '100%'
        },
        input: {
            marginLeft: '20px',
            width: '100%'
        }
    }

    return (
        <form style={ style.inputGroup }>
            <input type="text" placeholder="Nunca dejes de buscar" style={ style.input }></input>
            <button>
                <img src={ SearchButton } srcSet={`${ SearchButton2x } 2x`} alt="Buscar productos"></img>
            </button>
        </form>
    )
}

export default Search