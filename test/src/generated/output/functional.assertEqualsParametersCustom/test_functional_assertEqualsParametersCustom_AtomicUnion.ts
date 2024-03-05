import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../../internal/_test_functional_assertEqualsParameters";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_functional_assertEqualsParametersCustom_AtomicUnion =
  _test_functional_assertEqualsParameters(CustomGuardError)("AtomicUnion")(
    AtomicUnion,
  )(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      (input: AtomicUnion): AtomicUnion => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
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
              const $guard = (typia.functional.assertEqualsParameters as any)
                .guard;
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
        })(input);
        return p(input);
      },
  );
