import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_createAssertPrune_DynamicEnumeration = _test_assertPrune("DynamicEnumeration", DynamicEnumeration.generate, (input: any): DynamicEnumeration => { const assert = (input: any) => {
    const $guard = (typia.createAssertPrune as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicEnumeration => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.ar || $guard(_exceptionable, {
            path: _path + ".ar",
            expected: "string",
            value: input.ar
        })) && ("string" === typeof input["zh-Hans"] || $guard(_exceptionable, {
            path: _path + "[\"zh-Hans\"]",
            expected: "string",
            value: input["zh-Hans"]
        })) && ("string" === typeof input["zh-Hant"] || $guard(_exceptionable, {
            path: _path + "[\"zh-Hant\"]",
            expected: "string",
            value: input["zh-Hant"]
        })) && ("string" === typeof input.en || $guard(_exceptionable, {
            path: _path + ".en",
            expected: "string",
            value: input.en
        })) && ("string" === typeof input.fr || $guard(_exceptionable, {
            path: _path + ".fr",
            expected: "string",
            value: input.fr
        })) && ("string" === typeof input.de || $guard(_exceptionable, {
            path: _path + ".de",
            expected: "string",
            value: input.de
        })) && ("string" === typeof input.ja || $guard(_exceptionable, {
            path: _path + ".ja",
            expected: "string",
            value: input.ja
        })) && ("string" === typeof input.ko || $guard(_exceptionable, {
            path: _path + ".ko",
            expected: "string",
            value: input.ko
        })) && ("string" === typeof input.pt || $guard(_exceptionable, {
            path: _path + ".pt",
            expected: "string",
            value: input.pt
        })) && ("string" === typeof input.ru || $guard(_exceptionable, {
            path: _path + ".ru",
            expected: "string",
            value: input.ru
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicEnumeration>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicEnumeration;
}; const prune = (input: DynamicEnumeration): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("ar" === key || "zh-Hans" === key || "zh-Hant" === key || "en" === key || "fr" === key || "de" === key || "ja" === key || "ko" === key || "pt" === key || "ru" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; }, DynamicEnumeration.SPOILERS);
