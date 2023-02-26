import typia from "../../../../src";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_DynamicEnumeration = _test_equals(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is DynamicEnumeration => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
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
                (undefined === input.ru || "string" === typeof input.ru) &&
                (0 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (
                            [
                                "ar",
                                "zh-Hans",
                                "zh-Hant",
                                "en",
                                "fr",
                                "de",
                                "ja",
                                "ko",
                                "pt",
                                "ru",
                            ].some((prop) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input, true)
            );
        })(input),
);
