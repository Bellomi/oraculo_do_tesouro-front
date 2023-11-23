"use client";

import { useState } from "react";
import SearchInstitution from "./SearchInstitution";

const Searchbar = () => {
  const [institution, setInstitution] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchInstitution
          institution={institution}
          setInstitution={setInstitution}
        />
      </div>
    </form>
  );
};

export default Searchbar;
