import Sentiment from "sentiment";

function processText(text) {
  const words = text.split(/\s+/);

  const wordFreq = {};
  const mostCommon = {};
  let sent = "neutral";

  words.forEach((word) => {
    word = word.toLowerCase();
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  });

  const sortedWords = Object.entries(wordFreq).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < 10 && i < sortedWords.length; i++) {
    const [word, count] = sortedWords[i];
    mostCommon[word] = count;
  }

  const sentiment = new Sentiment();
  const result = sentiment.analyze(text);
  if (result.score > 0) sent = "positive";
  else if (result.score < 0) sent = "negative";

  return { wordFreq, mostCommon, sent };
}

export default processText;
