import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_misc_isClone_DynamicEnumeration = _test_misc_isClone(
    "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
    ((input: any): typia.Primitive<DynamicEnumeration> | null => {
        const is = (input: any): input is DynamicEnumeration => {
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
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone = (
            input: DynamicEnumeration,
        ): typia.Primitive<DynamicEnumeration> => {
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
            const $co0 = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co1(input.value)
                        : (input.value as any),
            });
            const $co1 = (input: any): any => ({
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
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    })(input),
);
