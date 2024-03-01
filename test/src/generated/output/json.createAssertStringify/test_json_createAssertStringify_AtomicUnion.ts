import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_createAssertStringify_AtomicUnion =
  _test_json_assertStringify(TypeGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )(
    (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): AtomicUnion => {
        const $guard = (typia.json.createAssertStringify as any).guard(
          errorFactory,
        );
        const __is = (input: any): input is AtomicUnion => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                null === elem ||
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                "boolean" === typeof elem,
            )
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is AtomicUnion => {
            return (
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "AtomicUnion",
                  value: input,
                })) &&
                input.every(
                  (elem: any, _index1: number) =>
                    null === elem ||
                    "string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    "boolean" === typeof elem ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: "(boolean | null | number | string)",
                      value: elem,
                    }),
                )) ||
              $guard(true, {
                path: _path + "",
                expected: "AtomicUnion",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: AtomicUnion): string => {
        const $string = (typia.json.createAssertStringify as any).string;
        const $number = (typia.json.createAssertStringify as any).number;
        const $throws = (typia.json.createAssertStringify as any).throws;
        return `[${input
          .map((elem: any) =>
            null !== elem
              ? (() => {
                  if ("string" === typeof elem) return $string(elem);
                  if ("number" === typeof elem) return $number(elem);
                  if ("boolean" === typeof elem) return elem;
                  $throws({
                    expected: "(boolean | null | number | string)",
                    value: elem,
                  });
                })()
              : "null",
          )
          .join(",")}]`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
