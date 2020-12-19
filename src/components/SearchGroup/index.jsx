import React from 'react';

import { SearchContainer } from './styles';

function SearchGroup(props) {
  return (
    <SearchContainer >
             <div>
             <input className="search-input" value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text"/>
                <input className="checkbox" type="checkbox" id='checkbox' name='checkbox' checked={props.checkboxValue} onChange={props.onchangeBox} />
                <label htmlFor="checkbox">{props.label}</label>
             </div>

             <button type='button' onClick={props.onclick} >+ Add</button>
    </SearchContainer>
  );
}

export default SearchGroup;