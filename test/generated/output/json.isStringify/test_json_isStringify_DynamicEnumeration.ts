import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_json_isStringify_DynamicEnumeration =
    _test_json_isStringify<DynamicEnumeration>(DynamicEnumeration)((input) =>
        ((
            input: IPointer<{
                ar?: string | undefined;
                "zh-Hans"?: string | undefined;
                "zh-Hant"?: string | undefined;
                en?: string | undefined;
                fr?: string | undefined;
                de?: string | undefined;
                ja?: string | undefined;
                ko?: string | undefined;
                pt?: string | undefined;
                ru?: string | undefined;
            }>,
        ): string | null => {
            const is = (
                input: any,
            ): input is IPointer<{
                ar?: string | undefined;
                "zh-Hans"?: string | undefined;
                "zh-Hant"?: string | undefined;
                en?: string | undefined;
                fr?: string | undefined;
                de?: string | undefined;
                ja?: string | undefined;
                ko?: string | undefined;
                pt?: string | undefined;
                ru?: string | undefined;
            }> => {
                const $io0 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    false === Array.isArray(input.value) &&
                    $io1(input.value);
                const $io1 = (input: any): boolean =>
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
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const stringify = (
                input: IPointer<{
                    ar?: string | undefined;
                    "zh-Hans"?: string | undefined;
                    "zh-Hant"?: string | undefined;
                    en?: string | undefined;
                    fr?: string | undefined;
                    de?: string | undefined;
                    ja?: string | undefined;
                    ko?: string | undefined;
                    pt?: string | undefined;
                    ru?: string | undefined;
                }>,
            ): string => {
                const $io1 = (input: any): boolean =>
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
                const $string = (typia.json.isStringify as any).string;
                const $tail = (typia.json.isStringify as any).tail;
                const $so0 = (input: any): any =>
                    `{"value":${$so1(input.value)}}`;
                const $so1 = (input: any): any =>
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
            return is(input) ? stringify(input) : null;
        })(input),
    );
