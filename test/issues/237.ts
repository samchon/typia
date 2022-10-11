import { equals, is } from "../../src";

const enum LanguageCode {
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

type DynamicEnumeration = {
    [P in LanguageCode]?: string;
};

const data: DynamicEnumeration = {
    en: "Line 1",
    ko: "1호선", // <-- this line
    "zh-Hans": "1号线",
    "zh-Hant": "1號線",
};
(data as any).kr = "2호선";
console.log("is", is(data));
console.log("equals", equals(data));
