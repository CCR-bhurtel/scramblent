import React, { useState } from 'react';
import search from '../../assets/Icons/search.png';
import Clear from '../IconComponents/Clear';

function Search({ onChange, characters, onClear, onSubmit }) {
    const display = characters.length;
    return (
        <form
            onSubmit={onSubmit}
            className="searchBar flex  justify-center h-[4rem] mt-[2rem] relative w-100 usm:min-w-[370px] md:min-w-[550px]"
        >
            <button
                type="submit"
                className="button  rounded-tl-md rounded-bl-md bg-Cerulean h-100 flex items-center justify-center px-4 md:px-[1.5rem]"
            >
                <img className="w-[20px] h-[18px] md:h-[25px] md:w-[25px]" src={search.src} alt="Search Icon" />
            </button>
            <input
                value={characters.split('').join(',').toUpperCase()}
                onChange={onChange}
                className="h-100 w-[95%] text-2xl px-4 md:px-[1rem] outline-0 rounded-tr-md rounded-br-md placeholder:text-Cinereous text-Sapphire md:placeholder:text-2xl"
                type="text"
                placeholder="Enter letters"
            />
            <span
                onClick={onClear}
                className={`absolute right-[10px]  top-[26px] md:top-[1.5rem] md:right-[20px] ${
                    display ? 'block' : 'hidden'
                }`}
            >
                <Clear />
            </span>
        </form>
    );
}

export default Search;
