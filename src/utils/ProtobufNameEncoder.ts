export namespace ProtobufNameEncoder {
  export const encode = (str: string): string => {
    for (const [before, after] of REPLACERS)
      str = str.split(before).join(after);
    return str;
  };

  export const decode = (str: string): string => {
    for (const [before, after] of REPLACERS)
      if (after !== "") str = str.split(after).join(before);
    return str;
  };
}

const REPLACERS: [string, string][] = [
  ["$", "_dollar_"],
  ["&", "_and_"],
  ["|", "_or_"],
  ["{", "_blt_"],
  ["}", "_bgt_"],
  ["<", "_lt_"],
  [">", "_gt_"],
  ["(", "_lp_"],
  [")", "_rp_"],
  ["[", "_alt_"],
  ["]", "_agt_"],
  [",", "_comma_"],
  ["`", "_backquote_"],
  ["'", "_singlequote_"],
  ['"', "_doublequote_"],
  [" ", "_space_"],
];
