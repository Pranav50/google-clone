import React, { useState } from 'react';
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import ClearIcon from "@material-ui/icons/Clear";

const Search = ({hideButtons, term = ""}) => {
    const [{}, dispatch] = useStateValue()
    const [input, setInput] = useState(term)

    const history = useHistory();

    const search = (e) => {
        e.preventDefault()
        if(input !== "") {
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: input
            })
            history.push('/search')
        } else 
            return
    } 

    const handleKeyPress = (target) => {
        if(target.charCode==13){
            if(input !== "") {
                setInput(input) 
                history.push('/search')

                dispatch({
                    type: actionTypes.SET_SEARCH_TERM,
                    term: input
                })
            } else 
                return
        } 
      }

    return (
            <form className="search">
                    <div className="search_input">
                        {!hideButtons && (
                            <SearchIcon className="search_inputIcon"/>
                        )}
                            <input value={input} onChange={e => setInput(e.target.value)} onKeyPress={handleKeyPress} />
                            {input === "" ? (
                                !hideButtons ? (
                                <MicIcon color='primary' />
                                ) : (
                                <SearchIcon className='search_inputIcon' />
                                )
                                ) : (
                                <ClearIcon className='search_clearSearch' onClick={() => setInput("")} />
                        )}
                    </div>
                    {!hideButtons ? (
                    <div className="search_buttons">
                        <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                ) : (
                    <div className="search_buttons">
                        <Button className="search_buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                )}
            </form>
    );
};

export default Search;