import React, { useState } from 'react';

function WordsSection({ i, words }) {
    const [showAll, setShowAll] = useState(false);
    const handleShowAllChange = () => {
        setShowAll(!showAll);
    };
    return (
        <div className="bg-white rounded-md p-4 flex flex-col items-center  justify-center w-[20rem]  mt-4">
            <p className="text-Cerulean text-[1.3rem]">Word length: {i}</p>
            <div className="flex mt-2 flex-wrap">
                {words.slice(0, !showAll ? 5 : words.length).map((word) => (
                    <span key={i} className="text-[1rem] text-white ml-2 mt-2 bg-Cerulean p-2 rounded-md">
                        {word}
                    </span>
                ))}
            </div>
            {words.length > 5 ? (
                <p className="underline text-Cerulean mt-2 cursor-pointer" onClick={handleShowAllChange}>{showAll ? 'Show less' : 'Show more'}</p>
            ) : (
                <></>
            )}
        </div>
    );
}

export default WordsSection;
