export const _isIBAN = (str: string) => {
  str = str.replace(/\s+/g, "").toUpperCase();

  const cc = str.slice(0, 2); // CountryCode
  const kk = str.slice(2, 4); // MOD-97 Checksum
  const bban = str.slice(4); // BBAN, length and structure varies by country

  if (!/^[A-Z0-9]+$/.test(str)) return false;
  if (!countryCodesOfCountriesWhichUseTheIBAN.includes(cc.toLowerCase())) return false; 
  if (str.length !== ibanLengths[cc.toLowerCase()]) return false;
  if (!(/^\d+$/.test(kk))) return false;
  if (computeMOD97Checksum(cc, bban) !== 1) return false;
  

  return true;
}

const countryCodesOfCountriesWhichUseTheIBAN = [
  "al",
  "ad",
  "at",
  "be",
  "ba",
  "bg",
  "hr",
  "cy",
  "cz",
  "dk",
  "ee",
  "fo",
  "fi",
  "fr",
  "ge",
  "de",
  "gi",
  "gr",
  "gl",
  "hu",
  "is",
  "ie",
  "it",
  "jo",
  "lv",
  "lb",
  "li",
  "lt",
  "lu",
  "mt",
  "mr",
  "mc",
  "me",
  "nl",
  "pl",
  "no",
  "pt",
  "ro",
  "sm",
  "sa",
  "rs",
  "sk",
  "si",
  "es",
  "se",
  "ch",
  "tn",
  "tr",
  "gb",
  "ae"
];

const ibanLengths: Record<string, number> = {
  al: 28,
  ad: 24,
  at: 20,
  be: 16,
  ba: 20,
  bg: 22,
  hr: 21,
  cy: 28,
  cz: 24,
  dk: 18,
  ee: 20,
  fo: 18,
  fi: 18,
  fr: 27,
  ge: 22,
  de: 22,
  gi: 23,
  gr: 27,
  gl: 18,
  hu: 28,
  is: 26,
  ie: 22,
  it: 27,
  jo: 30,
  lv: 21,
  lb: 28,
  li: 21,
  lt: 20,
  lu: 20,
  mt: 31,
  mr: 27,
  mc: 27,
  me: 22,
  nl: 18,
  no: 15,
  pl: 28,
  pt: 25,
  ro: 24,
  sm: 27,
  sa: 24,
  rs: 22,
  sk: 24,
  si: 19,
  es: 24,
  se: 24,
  ch: 21,
  tn: 24,
  tr: 26,
  gb: 22,
  ae: 23,
};

function computeMOD97Checksum(cc: string, bban: string) {
  const str = `${bban}${cc}00`.toLowerCase().replace(/[a-z]/g, ch => (ch.charCodeAt(0) - 87).toString());


  let remainder = 0;
  for (const digit of str) {
    remainder = (remainder * 10 + Number(digit)) % 97;
  }
  return remainder;
}  