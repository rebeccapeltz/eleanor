// https://weam.ai/blog/imageprompt/list-of-banned-words-in-midjourney/
export const BannedWords = {
  blood: true,
  bloodbath: true,
  bloody: true,
  flesh: true,
  corpse: true,
  crucified: true,
  cutting: true,
  decapitate: true,
  infested: true,
  gruesome: true,
  kill: true,
  sadist: true,
  slaughter: true,
  cannibal: true,
  cannibalism: true,
  killing: true,
  massacre: true,
  suicide: true,
  bimbo: true,
  dominatrix: true,
  fuck: true,
  shag: true,
  horny: true,
  incest: true,
  "jerk off": true,
  bondage: true,
};

export function filterBannedWords(prompt) {
  const notAllowedWords = [];
  let promptWords = prompt.split(/[\s,.!?\n]+/);
  for (const word of promptWords) {
    if (BannedWords[word]) {
      notAllowedWords.push(word);
    }
  }
  return notAllowedWords;
};


//test
// let test = filterbannedWords("suicide incest");
// if (test.length > 0) console.log("banned: ",test.join(', '))