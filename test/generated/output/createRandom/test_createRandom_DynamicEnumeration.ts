import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_DynamicEnumeration = _test_random("DynamicEnumeration", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        ar: (generator.string ?? $generator.string)(),
        "zh-Hans": (generator.string ?? $generator.string)(),
        "zh-Hant": (generator.string ?? $generator.string)(),
        en: (generator.string ?? $generator.string)(),
        fr: (generator.string ?? $generator.string)(),
        de: (generator.string ?? $generator.string)(),
        ja: (generator.string ?? $generator.string)(),
        ko: (generator.string ?? $generator.string)(),
        pt: (generator.string ?? $generator.string)(),
        ru: (generator.string ?? $generator.string)()
    });
    return $ro0();
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
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
    return input as typia.Primitive<DynamicEnumeration>;
});
