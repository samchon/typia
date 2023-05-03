import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_createAssertStringify_DynamicEnumeration =
    _test_assertStringify(
        "DynamicEnumeration",
        DynamicEnumeration.generate,
        (input: any): string => {
            const assert = (input: any): DynamicEnumeration => {
                const $guard = (typia.createAssertStringify as any).guard;
                const __is = (input: any): input is DynamicEnumeration => {
                    const $io0 = (input: any): boolean =>
                        (undefined === input.ar ||
                            "string" === typeof input.ar) &&
                        (undefined === input["zh-Hans"] ||
                            "string" === typeof input["zh-Hans"]) &&
                        (undefined === input["zh-Hant"] ||
                            "string" === typeof input["zh-Hant"]) &&
                        (undefined === input.en ||
                            "string" === typeof input.en) &&
                        (undefined === input.fr ||
                            "string" === typeof input.fr) &&
                        (undefined === input.de ||
                            "string" === typeof input.de) &&
                        (undefined === input.ja ||
                            "string" === typeof input.ja) &&
                        (undefined === input.ko ||
                            "string" === typeof input.ko) &&
                        (undefined === input.pt ||
                            "string" === typeof input.pt) &&
                        (undefined === input.ru ||
                            "string" === typeof input.ru);
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
                            (("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "DynamicEnumeration",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: DynamicEnumeration): string => {
                const $string = (typia.createAssertStringify as any).string;
                const $tail = (typia.createAssertStringify as any).tail;
                const $so0 = (input: any): any =>
                    `{${$tail(
                        `${
                            undefined === input.ar
                                ? ""
                                : `"ar":${
                                      undefined !== input.ar
                                          ? $string(input.ar)
                                          : undefined
                                  },`
                        }${
                            undefined === input["zh-Hans"]
                                ? ""
                                : `"zh-Hans":${
                                      undefined !== input["zh-Hans"]
                                          ? $string(input["zh-Hans"])
                                          : undefined
                                  },`
                        }${
                            undefined === input["zh-Hant"]
                                ? ""
                                : `"zh-Hant":${
                                      undefined !== input["zh-Hant"]
                                          ? $string(input["zh-Hant"])
                                          : undefined
                                  },`
                        }${
                            undefined === input.en
                                ? ""
                                : `"en":${
                                      undefined !== input.en
                                          ? $string(input.en)
                                          : undefined
                                  },`
                        }${
                            undefined === input.fr
                                ? ""
                                : `"fr":${
                                      undefined !== input.fr
                                          ? $string(input.fr)
                                          : undefined
                                  },`
                        }${
                            undefined === input.de
                                ? ""
                                : `"de":${
                                      undefined !== input.de
                                          ? $string(input.de)
                                          : undefined
                                  },`
                        }${
                            undefined === input.ja
                                ? ""
                                : `"ja":${
                                      undefined !== input.ja
                                          ? $string(input.ja)
                                          : undefined
                                  },`
                        }${
                            undefined === input.ko
                                ? ""
                                : `"ko":${
                                      undefined !== input.ko
                                          ? $string(input.ko)
                                          : undefined
                                  },`
                        }${
                            undefined === input.pt
                                ? ""
                                : `"pt":${
                                      undefined !== input.pt
                                          ? $string(input.pt)
                                          : undefined
                                  },`
                        }${
                            undefined === input.ru
                                ? ""
                                : `"ru":${
                                      undefined !== input.ru
                                          ? $string(input.ru)
                                          : undefined
                                  }`
                        }`,
                    )}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        },
        DynamicEnumeration.SPOILERS,
    );
