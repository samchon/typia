import { Spoiler } from "../internal/Spoiler";

export type DynamicEnumeration = {
    [P in DynamicEnumeration.LanguageCode]?: string;
};
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
            en: "Line 1",
            ko: "1호선 ",
            "zh-Hans": "1号线",
            "zh-Hant": "1號線",
        };
    }

    export const SPOILERS: Spoiler<DynamicEnumeration>[] = [
        (input) => {
            input["fr"] = null!;
            return ["$input.fr"];
        },
        (input) => {
            input["ar"] = 0 as any;
            return ["$input.ar"];
        },
    ];
}
