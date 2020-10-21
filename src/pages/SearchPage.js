import React from "react";
import { Link } from "react-router-dom";
import "../css/SearchPage.css";
import useGoogleSearch from "../hook/useGoogleSearch";
import Response from "../response";
import { useStateValue } from "../state/StateProvider";
import Search from "./Search";

// https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key

// https://cse.google.com/cse/create/new

// 70f57dab46b6acb89

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //LIVE API CALL
  // const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
