import typia from "typia";
import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
export const test_functional_equalsReturn_DynamicEnumeration =
  _test_functional_equalsReturn("DynamicEnumeration")(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => DynamicEnumeration) =>
      (input: DynamicEnumeration): DynamicEnumeration | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is DynamicEnumeration => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            false === Array.isArray(input.value) &&
            $io1(input.value, true && _exceptionable) &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
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
              Object.keys(input).every((key: any) => {
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
                  ].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
