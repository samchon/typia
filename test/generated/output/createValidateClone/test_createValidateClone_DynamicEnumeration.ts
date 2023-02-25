import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_DynamicEnumeration = _test_validateClone("DynamicEnumeration", DynamicEnumeration.generate, (input: any): typia.IValidation<typia.Primitive<DynamicEnumeration>> => { const validate = (input: any): typia.IValidation<DynamicEnumeration> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicEnumeration => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.ar || $report(_exceptionable, {
                path: _path + ".ar",
                expected: "string",
                value: input.ar
            }), "string" === typeof input["zh-Hans"] || $report(_exceptionable, {
                path: _path + "[\"zh-Hans\"]",
                expected: "string",
                value: input["zh-Hans"]
            }), "string" === typeof input["zh-Hant"] || $report(_exceptionable, {
                path: _path + "[\"zh-Hant\"]",
                expected: "string",
                value: input["zh-Hant"]
            }), "string" === typeof input.en || $report(_exceptionable, {
                path: _path + ".en",
                expected: "string",
                value: input.en
            }), "string" === typeof input.fr || $report(_exceptionable, {
                path: _path + ".fr",
                expected: "string",
                value: input.fr
            }), "string" === typeof input.de || $report(_exceptionable, {
                path: _path + ".de",
                expected: "string",
                value: input.de
            }), "string" === typeof input.ja || $report(_exceptionable, {
                path: _path + ".ja",
                expected: "string",
                value: input.ja
            }), "string" === typeof input.ko || $report(_exceptionable, {
                path: _path + ".ko",
                expected: "string",
                value: input.ko
            }), "string" === typeof input.pt || $report(_exceptionable, {
                path: _path + ".pt",
                expected: "string",
                value: input.pt
            }), "string" === typeof input.ru || $report(_exceptionable, {
                path: _path + ".ru",
                expected: "string",
                value: input.ru
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicEnumeration>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicEnumeration>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<DynamicEnumeration>;
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
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, DynamicEnumeration.SPOILERS);
