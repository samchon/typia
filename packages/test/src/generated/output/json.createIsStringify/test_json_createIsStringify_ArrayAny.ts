import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_json_createIsStringify_ArrayAny = _test_json_isStringify(
  "ArrayAny",
)<ArrayAny>(ArrayAny)((input: ArrayAny): string | null => {
  const is = (input: any): input is ArrayAny => {
    const $io0 = (input: any): boolean =>
      Array.isArray(input.anys) &&
      (undefined === input.undefindable1 ||
        Array.isArray(input.undefindable1)) &&
      (undefined === input.undefindable2 ||
        Array.isArray(input.undefindable2)) &&
      (null === input.nullables1 || Array.isArray(input.nullables1)) &&
      (null === input.nullables2 || Array.isArray(input.nullables2)) &&
      (null === input.both1 ||
        undefined === input.both1 ||
        Array.isArray(input.both1)) &&
      (null === input.both2 ||
        undefined === input.both2 ||
        Array.isArray(input.both2)) &&
      (null === input.both3 ||
        undefined === input.both3 ||
        Array.isArray(input.both3)) &&
      Array.isArray(input.union);
    return "object" === typeof input && null !== input && $io0(input);
  };
  const stringify = (input: ArrayAny): string => {
    const $so0 = (input: any): any =>
      `{${
        undefined === input.undefindable1
          ? ""
          : `"undefindable1":${
              undefined !== input.undefindable1
                ? `[${input.undefindable1
                    .map((elem: any) =>
                      undefined !== elem ? JSON.stringify(elem) : "null",
                    )
                    .join(",")}]`
                : undefined
            },`
      }${
        undefined === input.undefindable2
          ? ""
          : `"undefindable2":${
              undefined !== input.undefindable2
                ? `[${input.undefindable2
                    .map((elem: any) =>
                      undefined !== elem ? JSON.stringify(elem) : "null",
                    )
                    .join(",")}]`
                : undefined
            },`
      }${
        undefined === input.both1
          ? ""
          : `"both1":${
              undefined !== input.both1
                ? null !== input.both1
                  ? `[${input.both1
                      .map((elem: any) =>
                        undefined !== elem ? JSON.stringify(elem) : "null",
                      )
                      .join(",")}]`
                  : "null"
                : undefined
            },`
      }${
        undefined === input.both2
          ? ""
          : `"both2":${
              undefined !== input.both2
                ? null !== input.both2
                  ? `[${input.both2
                      .map((elem: any) =>
                        undefined !== elem ? JSON.stringify(elem) : "null",
                      )
                      .join(",")}]`
                  : "null"
                : undefined
            },`
      }${
        undefined === input.both3
          ? ""
          : `"both3":${
              undefined !== input.both3
                ? null !== input.both3
                  ? `[${input.both3
                      .map((elem: any) =>
                        undefined !== elem ? JSON.stringify(elem) : "null",
                      )
                      .join(",")}]`
                  : "null"
                : undefined
            },`
      }"anys":${`[${input.anys
        .map((elem: any) =>
          undefined !== elem ? JSON.stringify(elem) : "null",
        )
        .join(",")}]`},"nullables1":${
        null !== input.nullables1
          ? `[${input.nullables1
              .map((elem: any) =>
                undefined !== elem ? JSON.stringify(elem) : "null",
              )
              .join(",")}]`
          : "null"
      },"nullables2":${
        null !== input.nullables2
          ? `[${input.nullables2
              .map((elem: any) =>
                undefined !== elem ? JSON.stringify(elem) : "null",
              )
              .join(",")}]`
          : "null"
      },"union":${`[${input.union
        .map((elem: any) =>
          undefined !== elem ? JSON.stringify(elem) : "null",
        )
        .join(",")}]`}}`;
    return $so0(input);
  };
  return is(input) ? stringify(input) : null;
});
