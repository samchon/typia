import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";

export const test_createAssertEquals_FunctionalPropertyUnion =
  _test_assertEquals(TypeGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): FunctionalPropertyUnion => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is FunctionalPropertyUnion => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.name &&
          (null === input.closure ||
            undefined === input.closure ||
            "function" === typeof input.closure ||
            "string" === typeof input.closure ||
            ("number" === typeof input.closure &&
              Number.isFinite(input.closure))) &&
          (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["name", "closure"].some((prop: any) => key === prop))
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any, _index1: number) =>
              "object" === typeof elem && null !== elem && $io0(elem, true),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is FunctionalPropertyUnion => {
          const $guard = (typia.createAssertEquals as any).guard;
          const $join = (typia.createAssertEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.name ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".name",
                  expected: "string",
                  value: input.name,
                },
                errorFactory,
              )) &&
            (null === input.closure ||
              undefined === input.closure ||
              "function" === typeof input.closure ||
              "string" === typeof input.closure ||
              ("number" === typeof input.closure &&
                Number.isFinite(input.closure)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".closure",
                  expected: "(null | number | string | undefined)",
                  value: input.closure,
                },
                errorFactory,
              )) &&
            (1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["name", "closure"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "FunctionalPropertyUnion",
                  value: input,
                },
                errorFactory,
              )) &&
              input.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "FunctionalPropertyUnion.IUnion",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: "FunctionalPropertyUnion.IUnion",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "FunctionalPropertyUnion",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  );
