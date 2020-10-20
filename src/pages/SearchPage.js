import React from 'react'
import "../css/SearchPage.css"
import useGoogleSearch from '../hook/useGoogleSearch';
import { useStateValue } from '../state/StateProvider';


// https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key

// https://cse.google.com/cse/create/new

// 70f57dab46b6acb89

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <h1>{term}</h1>
            </div>
            <div className="searchPage__result">

            </div>
        </div>
    )
}

export default SearchPage