import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_createStringify_ArrayRepeatedNullable = _test_stringify(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input: ArrayRepeatedNullable): string => {
        const $ia0: any = (input: any): any =>
            input.every(
                (elem: any) =>
                    undefined !== elem &&
                    (null === elem ||
                        "string" === typeof elem ||
                        "number" === typeof elem ||
                        (Array.isArray(elem) && $ia0(elem))),
            );
        const $string: any = (typia.createStringify as any).string;
        const $number: any = (typia.createStringify as any).number;
        const $throws: any = (typia.createStringify as any).throws;
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
                              if (Array.isArray(elem)) return $sp0(elem);
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
    },
);
