import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_DynamicEnumeration = _test_assertEquals("DynamicEnumeration", DynamicEnumeration.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
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
        })) && (10 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["ar", "zh-Hans", "zh-Hant", "en", "fr", "de", "ja", "ko", "pt", "ru"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicEnumeration>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicEnumeration;
})(input));
