import React from "react";
import styled from "styled-components";
import { YouTube } from "../components/YouTube";

const borderColor = "#EEF2F7";
const textColor = "#647385";
const jpColor = "#4926BD";

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
  border-bottom: 1px solid ${borderColor};
  padding: 4px;
  background-color: #EEDDEE;
`;

const Lyrics = styled.div`
  background-color: white;
`;

const Lyric = styled.div`
  display: flex;
  flex: 1;
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
  margin-bottom: 5px;
`;

const Jp = styled.div`
  font-weight: bold;
  color: ${jpColor};
  width: 100px;
`;

const Kana = styled.div`
  width: 100px;
`;
const En = styled.div``;

const Word = ({ jp, kana, en }) => {
  return (
    <WordContainer>
      <Jp>{jp}</Jp>&nbsp;
      <Kana>{kana}</Kana>&nbsp;
      <En>{en}</En>
    </WordContainer>
  );
};

const particle_no = { jp: "の", kana: "の", en: "to" };
const particle_ni = { jp: "に", kana: "に", en: "to" };
const particle_wo = { jp: "を", kana: "を", en: "to" };

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
    // { jp: "自己実現", kana: "じこじつげん", en: "self actualization" },
    { jp: "自己", kana: "じこ", en: "self; oneself" },
    { jp: "実現", kana: "じつげん", en: "implementation" },
    particle_wo,
    { jp: "図り", kana: "はかり", en: "plan" },
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
        <Row>
          <Lyric>戸惑うこれの根源に</Lyric>
          <Explanation>
            <Word jp="戸惑うこ" kana="とまどう" en="to be bewildered" />
            <Word jp="根源" kana="こんげん" en="root, source, origin" />
          </Explanation>
        </Row>
        <Row>
          <Lyric>尋ねる行為を忘れ</Lyric>
        </Row>
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
