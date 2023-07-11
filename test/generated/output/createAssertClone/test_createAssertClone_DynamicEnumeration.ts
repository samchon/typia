import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_createAssertClone_DynamicEnumeration = _test_assertClone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input: any): typia.Primitive<DynamicEnumeration> => {
        const assert = (input: any): DynamicEnumeration => {
            const __is = (input: any): input is DynamicEnumeration => {
                const $io0 = (input: any): boolean =>
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
                return (
                    "object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is DynamicEnumeration => {
                    const $guard = (typia.createAssertClone as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.ar ||
                            "string" === typeof input.ar ||
                            $guard(_exceptionable, {
                                path: _path + ".ar",
                                expected: "(string | undefined)",
                                value: input.ar,
                            })) &&
                        (undefined === input["zh-Hans"] ||
                            "string" === typeof input["zh-Hans"] ||
                            $guard(_exceptionable, {
                                path: _path + '["zh-Hans"]',
                                expected: "(string | undefined)",
                                value: input["zh-Hans"],
                            })) &&
                        (undefined === input["zh-Hant"] ||
                            "string" === typeof input["zh-Hant"] ||
                            $guard(_exceptionable, {
                                path: _path + '["zh-Hant"]',
                                expected: "(string | undefined)",
                                value: input["zh-Hant"],
                            })) &&
                        (undefined === input.en ||
                            "string" === typeof input.en ||
                            $guard(_exceptionable, {
                                path: _path + ".en",
                                expected: "(string | undefined)",
                                value: input.en,
                            })) &&
                        (undefined === input.fr ||
                            "string" === typeof input.fr ||
                            $guard(_exceptionable, {
                                path: _path + ".fr",
                                expected: "(string | undefined)",
                                value: input.fr,
                            })) &&
                        (undefined === input.de ||
                            "string" === typeof input.de ||
                            $guard(_exceptionable, {
                                path: _path + ".de",
                                expected: "(string | undefined)",
                                value: input.de,
                            })) &&
                        (undefined === input.ja ||
                            "string" === typeof input.ja ||
                            $guard(_exceptionable, {
                                path: _path + ".ja",
                                expected: "(string | undefined)",
                                value: input.ja,
                            })) &&
                        (undefined === input.ko ||
                            "string" === typeof input.ko ||
                            $guard(_exceptionable, {
                                path: _path + ".ko",
                                expected: "(string | undefined)",
                                value: input.ko,
                            })) &&
                        (undefined === input.pt ||
                            "string" === typeof input.pt ||
                            $guard(_exceptionable, {
                                path: _path + ".pt",
                                expected: "(string | undefined)",
                                value: input.pt,
                            })) &&
                        (undefined === input.ru ||
                            "string" === typeof input.ru ||
                            $guard(_exceptionable, {
                                path: _path + ".ru",
                                expected: "(string | undefined)",
                                value: input.ru,
                            }));
                    return (
                        ((("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicEnumeration",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "DynamicEnumeration",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const clone = (
            input: DynamicEnumeration,
        ): typia.Primitive<DynamicEnumeration> => {
            const $co0 = (input: any): any => ({
                ar: input.ar as any,
                "zh-Hans": input["zh-Hans"] as any,
                "zh-Hant": input["zh-Hant"] as any,
                en: input.en as any,
                fr: input.fr as any,
                de: input.de as any,
                ja: input.ja as any,
                ko: input.ko as any,
                pt: input.pt as any,
                ru: input.ru as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    DynamicEnumeration.SPOILERS,
);
