import React, { createRef, useEffect, useState } from 'react';
import Unscrambler from '../../Utils/unscrambler';
import { useRouter } from 'next/router';
import HeroSection from '../Hero';
import WordsContainer from './WordsSectionContainer';

function ResultContainer() {
    const router = useRouter();
    const wordsContainerRef = createRef(null);

    const { characters, length, contains, endsWith, startsWith } = router.query;
    const [finalResult, setFinalResult] = useState({});

    useEffect(() => {
        if (characters && characters.length) {
            const unscrambler = new Unscrambler(characters, length, contains, endsWith, startsWith);
            (async () => {
                await unscrambler.filterWords();
                setFinalResult(unscrambler.finalResult);
                wordsContainerRef?.current?.scrollIntoView();
            })();
        } else {
            router.push('/');
        }
    }, [characters, length, contains, endsWith, startsWith]);
    // useEffect(() => {
    //     console.log(characters);
    //     if (!characters) {
    //         router.push('/');
    //     }
    // }, [characters]);
    return (
        <div>
            <HeroSection
                charactersFromRouter={characters}
                length={length}
                contains={contains}
                endsWith={endsWith}
                startsWith={startsWith}
            />
            <WordsContainer ref={wordsContainerRef} wordSections={finalResult} />
        </div>
    );
}

export default ResultContainer;
