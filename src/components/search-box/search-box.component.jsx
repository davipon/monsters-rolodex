 import React from 'react';
 import './search-box.style.css'
 
 export const Searchbox = props => (
    <input
        className='search'
        type='search' 
        placeholder={props.placeholder} 
        onChange={props.handleChange}
    />
 )