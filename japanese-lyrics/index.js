import lyrics from "./lyrics.json";
import JishoApi from "unofficial-jisho-api";
import fs from 'fs';

const jisho = new JishoApi();

const stringify = obj => JSON.stringify(obj, null, 2);

const processSearchResults = result => {
  if (result.data && result.data.length !== 0) {
    const firstResult = result.data[0];
    const slug = firstResult.slug;

    const firstJapanese = firstResult.japanese[0];
    const reading = firstJapanese.reading;

    const firstSense = firstResult.senses[0];
    const english = firstSense.english_definitions.join(", ");
    return {
      reading,
      english,
      jishoUrl: `http://jisho.org/word/${slug}`,
    };
  }

  return {
    error: "Not found",
  };
};

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const fillDefinition = async word => {
  const dictionaryResult = await jisho.searchForPhrase(word.jp);
  const { reading, english, jishoUrl, error } = processSearchResults(
    dictionaryResult
  );

  // mutate hahaha
  word.kana = reading;
  word.en = english;
  word.jishoUrl = jishoUrl;
  word.error = error;
  return null;
};

const getDefinitions = async wordList => {
  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    console.log(word);
    await sleep(1000);
    await fillDefinition(word);
    console.log(word);
  }
};

const getWords = lyrics => {
  const words = {};
  let processedWords = 0;

  lyrics.forEach(verse => {
    verse.forEach(line => {
      line.forEach(word => {
        processedWords++;
        if (!words[word]) {
          words[word] = {
            jp: word,
            en: "",
            kana: "",
          };
        }
      });
    });
  });

  const uniqueWords = Object.keys(words).length;
  console.log("processed: ", processedWords, " unique: ", uniqueWords);
  return words;
};

const processLyrics = async () => {
  const words = getWords(lyrics);
  const wordList = Object.values(words);
  await getDefinitions(wordList);
  const processedLyrics = {
    words,
    lyrics,
  };

  fs.writeFileSync("./lyrics-processed.json", stringify(processedLyrics), "utf-8");
};

processLyrics();
