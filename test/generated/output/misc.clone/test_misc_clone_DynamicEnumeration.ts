import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_misc_clone_DynamicEnumeration = _test_misc_clone(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
  ((input: DynamicEnumeration): typia.Resolved<DynamicEnumeration> => {
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
  })(input),
);
