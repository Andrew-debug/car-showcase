"use client";
import Image from "next/image";
import React, { useState } from "react";

import { SearchManufacturer } from "@/components";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};
const SearchBar = ({
  //@ts-ignore
  setManufacturer,
  //@ts-ignore
  setModel,
}) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill the search bar");
    }

    setManufacturer(searchManufacturer);
    setModel(searchModel);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          //@ts-ignore
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
      </div>

      <SearchButton otherClasses="sm: hidden" />
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={24}
          height={24}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};
export default SearchBar;
