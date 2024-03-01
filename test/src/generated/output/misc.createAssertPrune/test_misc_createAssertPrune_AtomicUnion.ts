import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_misc_createAssertPrune_AtomicUnion = _test_misc_assertPrune(
  TypeGuardError,
)("AtomicUnion")<AtomicUnion>(AtomicUnion)(
  (
    input: any,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): AtomicUnion => {
    const assert = (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): AtomicUnion => {
      const $guard = (typia.misc.createAssertPrune as any).guard(errorFactory);
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
    const prune = (input: AtomicUnion): void => {};
    assert(input, errorFactory);
    prune(input);
    return input;
  },
);
