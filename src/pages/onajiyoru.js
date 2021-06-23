import React from "react";
import styled from "styled-components";
import { YouTube } from "../components/YouTube";

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


const lyrics = [
  [
    // 飛交う人の批評に
    { jp: "飛交う", kana: "とびかう", en: "fly" },
    { jp: "人", kana: "ひと", en: "people" },
    particle_no,
    { jp: "批評", kana: "ひひょう", en: "criticism" },
    particle_ni,
  ],

  [
    //自己実現を図り
    { jp: "自己", kana: "じこ", en: "self; oneself" },
    { jp: "実現", kana: "じつげん", en: "implementation" },
    particle_wo,
    { jp: "図り", kana: "はかり", en: "plan" },
  ],
  [
    //戸惑うこれの根源に
    { jp: "戸惑う", kana: "とまどう", en: "to be bewildered" },
    { jp: "これ", kana: "これ", en: "this" },
    particle_no,
    { jp: "根源", kana: "こんげん", en: "root, source, origin" },
    particle_ni,
  ],
  [
    // 尋ねる行為を忘れ
    { jp: "尋ねる", kana: "たすねる", en: "to inquire, search for" },
    { jp: "行為", kana: "こうい", en: "act, deed" },
    particle_wo,
    { jp: "忘れ", kana: "わすれ", en: "forget" },
  ],
];

const LyricComponent = ({ lyricLine }) => {
  const jpLyric = lyricLine.map(l => l.jp).join("");

  return (
    <NewRow>
      <Lyric>{jpLyric}</Lyric>
      <Explanation>
        {lyricLine.map(l => (
          <Word jp={l.jp} kana={l.kana} en={l.en} />
        ))}
      </Explanation>
    </NewRow>
  );
};

export default () => {
  return (
    <Page>
      <Title>Shiina Ringo - 同じ夜</Title>
      <YouTube ytid="du2OuHaVHKE" />
      <Lyrics>
        {lyrics.map(lyric => (
          <LyricComponent lyricLine={lyric} />
        ))}
        <Spacer />
        <Row>
          <Lyric>此の日々が訪れた</Lyric>
        </Row>
        <Row>
          <Lyric>窓の外には</Lyric>
        </Row>
        <Row>
          <Lyric>誤魔化しの無い夏</Lyric>
        </Row>
        <Row>
          <Lyric>描かれている</Lyric>
        </Row>

        <Spacer />
        <Row>
          <Lyric>吹き荒れる風に</Lyric>
        </Row>
        <Row>
          <Lyric>涙することも</Lyric>
        </Row>
        <Row>
          <Lyric>幸せな君を</Lyric>
        </Row>
        <Row>
          <Lyric>只願うことも</Lyric>
        </Row>

        <Spacer />
        <Row>
          <Lyric>同じ 空は明日を</Lyric>
        </Row>
        <Row>
          <Lyric>始めてしまう</Lyric>
        </Row>
        <Row>
          <Lyric>例え君が</Lyric>
        </Row>
        <Row>
          <Lyric>此処に居なくても</Lyric>
        </Row>

        <Spacer />
        <Row>
          <Lyric>彷徨う夢の天神に</Lyric>
        </Row>
        <Row>
          <Lyric>生温さを望み</Lyric>
        </Row>
        <Row>
          <Lyric>行交う人の大半に</Lyric>
        </Row>
        <Row>
          <Lyric>素早く注目をさせ</Lyric>
        </Row>

        <Spacer />
        <Row>
          <Lyric>其の欲が満たされた</Lyric>
        </Row>
        <Row>
          <Lyric>あたしの眼にも</Lyric>
        </Row>
        <Row>
          <Lyric>果てることない夢</Lyric>
        </Row>
        <Row>
          <Lyric>映されるのか</Lyric>
        </Row>

        <Spacer />
        <Row>
          <Lyric>泣き喚く海に</Lyric>
        </Row>
        <Row>
          <Lyric>立ち止まることも</Lyric>
        </Row>
        <Row>
          <Lyric>触れられない君を</Lyric>
        </Row>
        <Row>
          <Lyric>只想うことも</Lyric>
        </Row>
        <Spacer />
        <Row>
          <Lyric>※同じ 空は明日を</Lyric>
        </Row>
        <Row>
          <Lyric>始めてしまう</Lyric>
        </Row>
        <Row>
          <Lyric>例えあたしが</Lyric>
        </Row>
        <Row>
          <Lyric>息を止めても※</Lyric>
        </Row>
        <Spacer />
        <Row>
          <Lyric>吹き荒れる風に</Lyric>
        </Row>
        <Row>
          <Lyric>涙することも</Lyric>
        </Row>
        <Row>
          <Lyric>幸せな君を</Lyric>
        </Row>
        <Row>
          <Lyric>只願うことも</Lyric>
        </Row>
        <Spacer />
        <Row>
          <Lyric>泣き喚く海に</Lyric>
        </Row>
        <Row>
          <Lyric>立ち止まることも</Lyric>
        </Row>
        <Row>
          <Lyric>触れられない君を</Lyric>
        </Row>
        <Row>
          <Lyric>只想うことも</Lyric>
        </Row>
      </Lyrics>
    </Page>
  );
};
