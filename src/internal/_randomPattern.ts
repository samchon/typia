import RandExp from "randexp";

export const _randomPattern = (regex: RegExp): string => {
  const r: RandExp = new RandExp(regex);
  for (let i: number = 0; i < 10; ++i) {
    const str: string = r.gen();
    if (regex.test(str)) return str;
  }
  return r.gen();
};
