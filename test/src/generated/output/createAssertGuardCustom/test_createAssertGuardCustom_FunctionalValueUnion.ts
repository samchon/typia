import typia from "typia";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { FunctionalValueUnion } from "../../../structures/FunctionalValueUnion";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertGuardCustom_FunctionalValueUnion =
  _test_assertGuard(CustomGuardError)(
    "FunctionalValueUnion",
  )<FunctionalValueUnion>(FunctionalValueUnion)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): asserts input is FunctionalValueUnion => {
      const __is = (input: any): input is FunctionalValueUnion => {
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              undefined !== elem &&
              (null === elem ||
                "function" === typeof elem ||
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem))),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is FunctionalValueUnion => {
          const $guard = (typia.createAssertGuard as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "FunctionalValueUnion",
                  value: input,
                },
                errorFactory,
              )) &&
              input.every(
                (elem: any, _index1: number) =>
                  (undefined !== elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "(null | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                  (null === elem ||
                    "function" === typeof elem ||
                    "string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "(null | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "FunctionalValueUnion",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    },
  );
