export const splitStringByMatch = (text, match) => {
  const matchIndex = text.toLowerCase().indexOf(match.toLowerCase());
  const matchEndIndex = matchIndex + match.length;
  if (matchIndex === -1) return { prefix: text };
  return {
    prefix: text.substring(0, matchIndex),
    match: text.substring(matchIndex, matchEndIndex),
    suffix: text.substring(matchEndIndex),
  };
};
