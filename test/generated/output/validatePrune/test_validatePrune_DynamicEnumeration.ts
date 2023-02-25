import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validatePrune } from "../internal/_test_validatePrune";
export const test_validatePrune_DynamicEnumeration = _test_validatePrune("DynamicEnumeration", DynamicEnumeration.generate, (input) => ((input: any): typia.IValidation<DynamicEnumeration> => { const validate = (input: any): typia.IValidation<DynamicEnumeration> => {
    const errors = [] as any[];
    const $report = (typia.validatePrune as any).report(errors);
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
}; const output = validate(input); if (output.success)
    prune(input); return output; })(input), DynamicEnumeration.SPOILERS);
