import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_isStringify_ArrayRepeatedNullable = _test_isStringify(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) =>
        ((
            input: string | number | Array<ArrayRepeatedNullable> | null,
        ): string | null => {
            const is: any = (
                input: any,
            ): input is
                | string
                | number
                | Array<ArrayRepeatedNullable>
                | null => {
                const $ia0: any = (input: any): any =>
                    input.every(
                        (elem: any) =>
                            undefined !== elem &&
                            (null === elem ||
                                "string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                (Array.isArray(elem) && $ia0(elem))),
                    );
                return (
                    undefined !== input &&
                    (null === input ||
                        "string" === typeof input ||
                        ("number" === typeof input && Number.isFinite(input)) ||
                        (Array.isArray(input) && $ia0(input)))
                );
            };
            const stringify: any = (
                input: string | number | Array<ArrayRepeatedNullable> | null,
            ): string => {
                const $ia0: any = (input: any): any =>
                    input.every(
                        (elem: any) =>
                            undefined !== elem &&
                            (null === elem ||
                                "string" === typeof elem ||
                                "number" === typeof elem ||
                                (Array.isArray(elem) && $ia0(elem))),
                    );
                const $string: any = (typia.isStringify as any).string;
                const $number: any = (typia.isStringify as any).number;
                const $throws: any = (typia.isStringify as any).throws;
                const $sp0: any = (input: any) => $sa0(input);
                const $sa0: any = (input: any): any =>
                    `[${input
                        .map((elem: any) =>
                            null !== elem
                                ? (() => {
                                      if ("string" === typeof elem)
                                          return $string(elem);
                                      if ("number" === typeof elem)
                                          return $number(elem);
                                      if (Array.isArray(elem))
                                          return $sp0(elem);
                                      $throws({
                                          expected:
                                              "(Array<ArrayRepeatedNullable> | null | number | string)",
                                          value: elem,
                                      });
                                  })()
                                : "null",
                        )
                        .join(",")}]`;
                return null !== input
                    ? (() => {
                          if ("string" === typeof input) return $string(input);
                          if ("number" === typeof input)
                              return $number(input).toString();
                          if (Array.isArray(input)) return $sp0(input);
                          $throws({
                              expected:
                                  "(Array<ArrayRepeatedNullable> | null | number | string)",
                              value: input,
                          });
                      })()
                    : "null";
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ArrayRepeatedNullable.SPOILERS,
);
