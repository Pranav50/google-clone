import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import google from '../img/google.png'
import Search from './Search';
import './SearchPage.css' 

const SearchPage = () => {
    const [{term}] = useStateValue();
    
    const {data} = useGoogleSearch(term)

    return (
        <div className="searchPage">
                <div className="searchPage_header">
                    <Link to="/">
                        <img className="searchPage_logo"
                            src={google}
                        />
                    </Link>
            

                    <div className="searchPage_headerBody">
                        <Search hideButtons term={term} />
                    </div> 
                </div>
                {term && (
                    <div>
                        <div className="searchPage_results">
                            <p className="searchPage_resultCount">
                                About {data?.searchInformation.formattedTotalResults} results 
                                ({data?.searchInformation.formattedSearchTime} seconds) 
                                for {term}
                            </p>
                            {data?.items.map(item => (
                                    <div className="searchPage_result" key={item.cacheId}>
                                            <a className="searchPage_displayLink" href={item.link}>
                                                {/* {item.pagemap?.cse_image?.length > 0 
                                                && item.pagemap?.cse_image[0]?.src && (
                                                   <img 
                                                   className="searchPage_resultImage"
                                                   src={
                                                       item.pagemap?.cse_image?.length > 0
                                                       && item.pagemap?.cse_image[0]?.src
                                                   } alt=""
                                                   />
                                                )} */}
                                                
                                                {item.displayLink}
                                            </a>
                                            <a 
                                            className="searchPage_resultTitle"
                                            href={item.link}>
                                                <h2>{item.title}</h2>
                                            </a>
                                            <p 
                                            className="searchPage_resultSnippet">
                                                {item.snippet}
                                            </p>
                                    </div>
                            ))}
                        </div>
                    </div> 
                )}
        </div>
    );
};

export default SearchPage;