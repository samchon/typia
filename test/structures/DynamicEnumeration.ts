import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";

export type DynamicEnumeration = IPointer<{
  [P in DynamicEnumeration.LanguageCode]?: string;
}>;
export namespace DynamicEnumeration {
  export enum LanguageCode {
    Arabic = "ar",
    ChineseSimp = "zh-Hans",
    ChineseTrad = "zh-Hant",
    English = "en",
    French = "fr",
    German = "de",
    Japanese = "ja",
    Korean = "ko", // <-- this line
    Portuguese = "pt",
    Russian = "ru",
  }

  export function generate(): DynamicEnumeration {
    return {
      value: {
        en: "Line 1",
        ko: "1호선 ",
        "zh-Hans": "1号线",
        "zh-Hant": "1號線",
      },
    };
  }

  export const SPOILERS: Spoiler<DynamicEnumeration>[] = [
    (input) => {
      input.value["fr"] = null!;
      return ["$input.value.fr"];
    },
    (input) => {
      input.value["ar"] = 0 as any;
      return ["$input.value.ar"];
    },
  ];

  export const BINARABLE = false;
}
