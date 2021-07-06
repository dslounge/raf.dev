import React from "react";
import styled from "styled-components";
import { YouTube } from "../components/YouTube";
import processedLyrics from "../../japanese-lyrics/lyrics-processed.json";

const { words, lyrics } = processedLyrics;

const borderColor = "#EEF2F7";
const textColor = "#647385";
const lyricsColor = "#333333";
const jpColor = "#858687";
const enColor = "#A3A3A3";

const Page = styled.div`
  width: 1000px;
  margin: auto;
  color: ${textColor};
  font-family: sans-serif;
`;

const Title = styled.h1``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${borderColor};
  padding: 4px;
`;

const NewRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 4px 16px;
`;

const Lyrics = styled.div``;

const LYRIC_COLUMN_WIDTH = 350;

const VerseContainer = styled.div`
  margin: 10px;
`;

const Lyric = styled.div`
  display: flex;
  width: ${LYRIC_COLUMN_WIDTH}px;
  font-size: 25px;
  color: ${lyricsColor};
  font-weight: 500;
`;

const Explanation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Spacer = styled.div`
  height: 20px;
`;

const Link = styled.div``;

const WordContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const Japanese = styled.div`
  width: 150px;
  color: ${jpColor};
`;

const Kanji = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

const Kana = styled.span`
  width: 100px;
  font-size: 14px;
`;
const En = styled.div`
  color: ${enColor};
`;

const Word = ({ jp, kana, en }) => {
  return (
    <WordContainer>
      <Japanese>
        <Kanji>{jp}</Kanji>&nbsp;
        <Kana>{kana}</Kana>&nbsp;
      </Japanese>
      <En>{en}</En>
    </WordContainer>
  );
};

const particle_no = { jp: "の", kana: "の", en: "to" };
const particle_ni = { jp: "に", kana: "に", en: "to" };
const particle_wo = { jp: "を", kana: "を", en: "to" };

//TODO: it would be cool to have a setting to automaticall add space to the lyrics.
// Maybe what I can do now is put everything in a google spreadsheet. Now that I have some structured figured out, I don't
// have to type in Japanese in vim. Do it in google sheets, add links, timing, etc.
// Maybe I can build myself a tool to set up the timing of each word? Karaoke style?
// Clicking on a word should take you to 2s before the timing of that line.
// TODO: this should have a really cool background. It should be a work of love for this song.
// The timing tool should let me press space to time the lyric to the song. When I press space, the next word in the queue is timed to that point. I should also give myself tools to nudge.

const LyricComponent = ({ lyricLine }) => {
  const jpLyric = lyricLine.join("");

  return (
    <NewRow>
      <Lyric>{jpLyric}</Lyric>
      <Explanation>
        {lyricLine.map(w => {
          const word = words[w];
          return <Word jp={word.jp} kana={word.kana} en={word.en} />;
        })}
      </Explanation>
    </NewRow>
  );
};

const Verse = ({ verse }) => {
  console.log("--Verse--", verse);
  return (
    <VerseContainer>
      {verse.map(lyric => (
        <LyricComponent lyricLine={lyric} />
      ))}
    </VerseContainer>
  );
};

export default () => {
  console.log("----");
  console.log(lyrics);

  return (
    <Page>
      <Title>Shiina Ringo - 同じ夜</Title>
      <YouTube ytid="du2OuHaVHKE" />
      <Lyrics>
        {lyrics.map(verse => (
          <Verse verse={verse} />
        ))}
      </Lyrics>
    </Page>
  );
};
