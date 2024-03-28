import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../../internal/_test_functional_assertEqualsReturn";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_functional_assertEqualsReturn_AtomicUnion =
  _test_functional_assertEqualsReturn(TypeGuardError)("AtomicUnion")(
    AtomicUnion,
  )(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      (input: AtomicUnion): AtomicUnion => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsReturn as any).errorFactory;
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): AtomicUnion => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is AtomicUnion => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
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
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
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
        })(p(input));
      },
  );
