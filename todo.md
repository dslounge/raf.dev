#TODO

Automating the lyrics

I think I need to have each line by line in a record. So the concept is

Song {
  verses: []
}


Verse {
  lyrics: Lyric[];
}

Song {
  verses: Verse[] {
    english: String
    lyrics: Lyric[] {
      fullLyric: String
      words: Word[] {
        jp,
        kana,
        en (could be automatically generated)
        dictionarySlug 
      },
      kanji: Kanji[] {
        jp,
        kana,
        en (could be automatically generated)
        dictionarySlug
      }
    }
  }
}


For each line, record a vim macro. I can break up the words using commas

Surround the line with commas
Replace each comma with ",
add jp: somehow
add kana: "", en: "" at the end
enclose line with bracket

