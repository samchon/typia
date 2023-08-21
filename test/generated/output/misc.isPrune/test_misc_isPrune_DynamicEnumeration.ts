import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_misc_isPrune_DynamicEnumeration = _test_misc_isPrune(
    "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
    ((input: any): input is DynamicEnumeration => {
        const is = (input: any): input is DynamicEnumeration => {
            const $io0 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                false === Array.isArray(input.value) &&
                $io1(input.value);
            const $io1 = (input: any): boolean =>
                (undefined === input.ar || "string" === typeof input.ar) &&
                (undefined === input["zh-Hans"] ||
                    "string" === typeof input["zh-Hans"]) &&
                (undefined === input["zh-Hant"] ||
                    "string" === typeof input["zh-Hant"]) &&
                (undefined === input.en || "string" === typeof input.en) &&
                (undefined === input.fr || "string" === typeof input.fr) &&
                (undefined === input.de || "string" === typeof input.de) &&
                (undefined === input.ja || "string" === typeof input.ja) &&
                (undefined === input.ko || "string" === typeof input.ko) &&
                (undefined === input.pt || "string" === typeof input.pt) &&
                (undefined === input.ru || "string" === typeof input.ru);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune = (input: DynamicEnumeration): void => {
            const $io1 = (input: any): boolean =>
                (undefined === input.ar || "string" === typeof input.ar) &&
                (undefined === input["zh-Hans"] ||
                    "string" === typeof input["zh-Hans"]) &&
                (undefined === input["zh-Hant"] ||
                    "string" === typeof input["zh-Hant"]) &&
                (undefined === input.en || "string" === typeof input.en) &&
                (undefined === input.fr || "string" === typeof input.fr) &&
                (undefined === input.de || "string" === typeof input.de) &&
                (undefined === input.ja || "string" === typeof input.ja) &&
                (undefined === input.ko || "string" === typeof input.ko) &&
                (undefined === input.pt || "string" === typeof input.pt) &&
                (undefined === input.ru || "string" === typeof input.ru);
            const $po0 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po1(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "ar" === key ||
                        "zh-Hans" === key ||
                        "zh-Hant" === key ||
                        "en" === key ||
                        "fr" === key ||
                        "de" === key ||
                        "ja" === key ||
                        "ko" === key ||
                        "pt" === key ||
                        "ru" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    })(input),
);
