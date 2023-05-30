import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
export const test_createIsPrune_DynamicEnumeration = _test_isPrune("DynamicEnumeration", DynamicEnumeration.generate, (input: any): input is DynamicEnumeration => { const is = (input: any): input is DynamicEnumeration => {
    const $io0 = (input: any): boolean => (undefined === input.ar || "string" === typeof input.ar) && (undefined === input["zh-Hans"] || "string" === typeof input["zh-Hans"]) && (undefined === input["zh-Hant"] || "string" === typeof input["zh-Hant"]) && (undefined === input.en || "string" === typeof input.en) && (undefined === input.fr || "string" === typeof input.fr) && (undefined === input.de || "string" === typeof input.de) && (undefined === input.ja || "string" === typeof input.ja) && (undefined === input.ko || "string" === typeof input.ko) && (undefined === input.pt || "string" === typeof input.pt) && (undefined === input.ru || "string" === typeof input.ru);
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const prune = (input: DynamicEnumeration): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("ar" === key || "zh-Hans" === key || "zh-Hant" === key || "en" === key || "fr" === key || "de" === key || "ja" === key || "ko" === key || "pt" === key || "ru" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; }, DynamicEnumeration.SPOILERS);
