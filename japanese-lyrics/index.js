import lyrics from "./lyrics.json";
import JishoApi from "unofficial-jisho-api";

const jisho = new JishoApi();
const words = {};
let processedWords = 0;

const stringify = obj => JSON.stringify(obj, null, 2);

const processSearchResults = result => {
  // console.log("processSearchResults");
  // console.log(result);
  if (result.data && result.data.length !== 0) {
    const firstResult = result.data[0];
    // console.log("firstResult", firstResult);
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

const processWord = word => {
  processedWords++;
  if (!words[word]) {
    words[word] = {
      jp: word,
      en: "",
      kana: "",
    };
  }
  return word;
};

const processLyric = lyric => {
  // console.log("--processLyric--");
  // console.log(lyric);
  const words = lyric.map(processWord);
};

const processVerse = verse => {
  // console.log("---processVerse--");
  // console.log(verse);
  const lyrics = verse.map(processLyric);
};

const verses = lyrics.map(processVerse);
const uniqueWords = Object.keys(words).length;
console.log("processed: ", processedWords, " unique: ", uniqueWords);

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const dictionarySearch = async jp => {
  console.log("--dictionarySearch--", jp);
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

const testWords = Object.values(words).slice(0, 3);

const processWords = async (wordList) => {
  for (var i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    console.log(word);
    await sleep(1000);
    await fillDefinition(word);
    console.log(word);
  }
};

// processWords(testWords);
processWords(Object.values(words));
