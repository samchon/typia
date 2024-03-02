import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_misc_assertCloneCustom_AtomicUnion = _test_misc_assertClone(
  CustomGuardError,
)("AtomicUnion")<AtomicUnion>(AtomicUnion)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): typia.Resolved<AtomicUnion> => {
    const assert = (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): AtomicUnion => {
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
          const $guard = (typia.misc.assertClone as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "AtomicUnion",
                  value: input,
                },
                errorFactory,
              )) &&
              input.every(
                (elem: any, _index1: number) =>
                  null === elem ||
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  "boolean" === typeof elem ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: "(boolean | null | number | string)",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "AtomicUnion",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    };
    const clone = (input: AtomicUnion): typia.Resolved<AtomicUnion> => {
      const $cp0 = (input: any) => input.map((elem: any) => elem as any);
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    assert(input, errorFactory);
    const output = clone(input);
    return output;
  })(input, (p) => new CustomGuardError(p)),
);
