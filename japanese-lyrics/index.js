import lyrics from "./lyrics.json";
import JishoApi from "unofficial-jisho-api";

const jisho = new JishoApi();
const words = {};
let processedWords = 0;

const stringify = obj => JSON.stringify(obj, null, 2);

const processSearchResults = result => {
  if (result.data) {
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
  const result = await jisho.searchForPhrase(jp);
  return processSearchResults(result);
};

const fillDefinition = async word => {
  console.log("fillDefinition: ", word);
  await sleep(2000);
  console.log("should have waited");
  const { reading, english, jishoUrl, error } = await dictionarySearch(word.jp);
  // mutate hahaha
  word.kana = reading;
  word.en = english;
  word.jishoUrl = jishoUrl;
  word.error = error;
  return null;
};

const testWords = Object.values(words).slice(0, 3);

const processWords = () => {
  Object.values(testWords)
    .reduce((chain, nextWord) => {
      chain.then(fillDefinition(nextWord));
    }, Promise.resolve());
};

processWords();
