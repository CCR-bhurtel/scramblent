import React, { useState } from 'react';
import Search from '../Search';
import Filter from '../Search/Filter';

function HeroSection() {
    const [characters, setCharacters] = useState('');
    const [options, setOptions] = useState({
        startsWith: '',
        endsWith: '',
        length: '',
        contains: '',
    });
    function removeSpecialCharacter(s) {
        for (let i = 0; i < s.length; i++) {
            // Finding the character whose
            // ASCII value fall under this
            // range
            if (s[i] < 'A' || (s[i] > 'Z' && s[i] < 'a') || s[i] > 'z') {
                // erase function to erase
                // the character
                s = s.substring(0, i) + s.substring(i + 1);
                i--;
            }
        }
        return s;
    }
    const onOptionChangeHandler = (e) => {
        if (e.target.name == 'length') {
            setOptions({ ...options, [e.target.name]: e.target.value });
        } else setOptions({ ...options, [e.target.name]: removeSpecialCharacter(e.target.value) });
    };

    const onSearchClear = () => {
        setCharacters('');
    };

    const onChangeHandler = (e) => {
        setCharacters(removeSpecialCharacter(e.target.value.split(',').join('')));
    };
    const onOptionClear = (name) => {
        setOptions({ ...options, [name]: '' });
    };

    return (
        <section className="h-[90vh] flex items-center justify-center flex-col">
            <div className="textPart font-medium text-[2rem] md:text-[2.5rem] font-Poppins text-center leading-tight">
                <p className="text-Cerulean">Scramblen't</p>
                <p className="text-white leading-tight">Make words with scrambled letters</p>
            </div>
            <div className="searchPart flex flex-col">
                <Search onClear={onSearchClear} onChange={onChangeHandler} characters={characters} />
                <Filter options={options} onChange={onOptionChangeHandler} onOptionClear={onOptionClear} />
            </div>
        </section>
    );
}

export default HeroSection;
