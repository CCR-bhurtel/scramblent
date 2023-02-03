import * as dict from 'an-array-of-english-words';

class Unscrambler {
    words = [];

    characters = '';
    length = null;
    contains = null;
    endsWith = null;
    startsWith = null;
    constructor(characters, length, contains, endsWith, startsWith) {
        this.characters = characters;
        this.length = parseInt(length);
        this.contains = contains.toLowerCase();
        this.endsWith = endsWith.toLowerCase();
        this.startsWith = startsWith.toLowerCase();
    }

    filterLength() {
        return new Promise((resolve, reject) => {
            if (!this.length) resolve(this.words);

            const filteredWords = this.words.filter((word) => word.length == this.length);

            resolve(filteredWords);
        });
    }
    filterContains() {
        return new Promise((resolve, reject) => {
            if (!this.contains) resolve(this.words);
            const filteredWords = this.words.filter((word) => word.includes(this.contains));
            resolve(filteredWords);
        });
    }
    filterEndsWith() {
        return new Promise((resolve, reject) => {
            if (!this.endsWith) resolve(this.words);
            const filteredWords = this.words.filter((word) => word.endsWith(this.endsWith));
            resolve(filteredWords);
        });
    }
    filterStartsWith() {
        return new Promise((resolve, reject) => {
            if (!this.startsWith) resolve(this.words);
            const filteredWords = this.words.filter((word) => word.startsWith(this.startsWith));
            resolve(filteredWords);
        });
    }

    getInitialWords() {
        return new Promise((resolve, reject) => {
            let words = [];

            dict.filter((word) => {
                const reoccurence1 = {};

                this.characters.split('').forEach((letter) => {
                    letter = letter.toLowerCase();

                    reoccurence1[letter] = reoccurence1[letter] + 1 || 1;
                });
                const reoccurence2 = {};

                word.split('').forEach((letter) => {
                    letter = letter.toLowerCase();
                    reoccurence2[letter] = reoccurence2[letter] + 1 || 1;
                });

                let match = 0;
                for (let key in reoccurence2) {
                    if (reoccurence2[key] <= reoccurence1[key]) match++;
                }
                if (word == 'hello') {
                    console.log('reoccurence of given word', reoccurence1);
                    console.log('reoccurence of generated word', reoccurence2);
                }

                if (Object.keys(reoccurence2).length == match) {
                    words.push(word);
                }
            });

            this.words = words;
            resolve('done');
        });
    }

    async filterWords() {
        await this.getInitialWords();

        const lengthFilteredWords = await this.filterLength();

        this.words = lengthFilteredWords;

        const includedWords = await this.filterContains();
        this.words = includedWords;

        const wordsWithEnding = await this.filterEndsWith();
        this.words = wordsWithEnding;

        const wordsWithStarting = await this.filterStartsWith();
        this.words = wordsWithStarting;
        console.log(this.words);
    }
}

export default Unscrambler;