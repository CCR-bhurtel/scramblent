import React from 'react';
import WordsSection from './WordsSection';
import { useRouter } from 'next/router';

const WordsSectionContainer = React.forwardRef((props, ref) => {
    const { wordSections } = props;
    const router = useRouter();
    const { characters } = router.query;

    return (
        <div className='mt-[3rem] md:mt-[1rem] pb-[2rem]'>
            <div className="text-[1.3rem]">
                <span className="text-white">Result for: &nbsp;</span>
                <span className='text-Cerulean'>{characters}</span>
            </div>
            <div ref={ref} className="grid md:grid-cols-2 grid-cols-1 items-start justify-center">
                {Object.keys(wordSections).map((index) =>
                    wordSections[index].length ? (
                        <WordsSection key={index} words={wordSections[index]} i={index} />
                    ) : (
                        <></>
                    )
                )}
            </div>
        </div>
    );
});

export default WordsSectionContainer;
