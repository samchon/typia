import typia from "typia";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayAny } from "../../../structures/ArrayAny";
export const test_json_stringify_ArrayAny = _test_json_stringify(
  "ArrayAny",
)<ArrayAny>(ArrayAny)((input) =>
  ((input: ArrayAny): string => {
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
  })(input),
);
