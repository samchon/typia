import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";

export const test_createAssertGuardCustom_FunctionalPropertyUnion =
  _test_assertGuard(CustomGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
    (
      input: any,
      errorFactory: import("typia").TypeGuardError.IProps = (p) =>
        new CustomGuardError(p),
    ): asserts input is FunctionalPropertyUnion => {
      const $guard = (typia.createAssertGuard as any).guard(errorFactory);
      const __is = (input: any): input is FunctionalPropertyUnion => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.name &&
          (null === input.closure ||
            undefined === input.closure ||
            "function" === typeof input.closure ||
            "string" === typeof input.closure ||
            ("number" === typeof input.closure &&
              Number.isFinite(input.closure)));
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is FunctionalPropertyUnion => {
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            (null === input.closure ||
              undefined === input.closure ||
              "function" === typeof input.closure ||
              "string" === typeof input.closure ||
              ("number" === typeof input.closure &&
                Number.isFinite(input.closure)) ||
              $guard(_exceptionable, {
                path: _path + ".closure",
                expected: "(null | number | string | undefined)",
                value: input.closure,
              }));
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "FunctionalPropertyUnion",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: "FunctionalPropertyUnion.IUnion",
                      value: elem,
                    })) &&
                    $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "FunctionalPropertyUnion.IUnion",
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "FunctionalPropertyUnion",
              value: input,
            })
          );
        })(input, "$input", true);
    },
  );
