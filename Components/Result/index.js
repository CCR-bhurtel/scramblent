import React, { useEffect } from 'react';
import Unscrambler from '../../Utils/unscrambler';
import { useRouter } from 'next/router';
import HeroSection from '../Hero';

function ResultContainer() {
    const router = useRouter();

    const { characters, length, contains, endsWith, startsWith } = router.query;

    if (characters && characters.length) {
        const unscrambler = new Unscrambler(characters, length, contains, endsWith, startsWith);
        (async () => {
            await unscrambler.filterWords();

            const filteredWords = unscrambler.words;
            console.log(filteredWords);
        })();
    } else {
        router.push('/');
    }
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
        </div>
    );
}

export default ResultContainer;
