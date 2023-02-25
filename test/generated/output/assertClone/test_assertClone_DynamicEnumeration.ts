import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_DynamicEnumeration = _test_assertClone("DynamicEnumeration", DynamicEnumeration.generate, (input) => ((input: any): typia.Primitive<DynamicEnumeration> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
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
}; const clone = (input: DynamicEnumeration): typia.Primitive<DynamicEnumeration> => {
    const $co0 = (input: any) => ({
        ar: input.ar,
        "zh-Hans": input["zh-Hans"],
        "zh-Hant": input["zh-Hant"],
        en: input.en,
        fr: input.fr,
        de: input.de,
        ja: input.ja,
        ko: input.ko,
        pt: input.pt,
        ru: input.ru
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* __type */; return output as DynamicEnumeration; })(input), DynamicEnumeration.SPOILERS);
