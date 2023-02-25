import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_createValidateEquals_DynamicEnumeration = _test_validateEquals("DynamicEnumeration", DynamicEnumeration.generate, (input: any): typia.IValidation<DynamicEnumeration> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const $join = (typia.createValidateEquals as any).join;
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
            }), 10 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                if (["ar", "zh-Hans", "zh-Hant", "en", "fr", "de", "ja", "ko", "pt", "ru"].some(prop => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
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
});
