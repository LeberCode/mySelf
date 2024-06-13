export const shortenLink = (link: string) => {
  let toCut = link.lastIndexOf(".");
  let shorterLink = link.slice(0, toCut + 4);
  return shorterLink;
};
