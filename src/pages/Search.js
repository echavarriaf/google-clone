import React from "react";
import "../css/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

function Search() {
  return (
    <div className="search">
      <div className="search_input">
        <SearchIcon className="search__inputIcon" />
        <input />
        <MicIcon />
      </div>

      <div className="search__buttons">
        <Button>Google Search</Button>
        <Button>I'm Feeling Lucky</Button>
      </div>
    </div>
  );
}

export default Search;
