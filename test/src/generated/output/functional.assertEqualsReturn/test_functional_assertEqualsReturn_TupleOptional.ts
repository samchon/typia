import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../../internal/_test_functional_assertEqualsReturn";
import { TupleOptional } from "../../../structures/TupleOptional";

export const test_functional_assertEqualsReturn_TupleOptional =
  _test_functional_assertEqualsReturn(TypeGuardError)("TupleOptional")(
    TupleOptional,
  )(
    (p: (input: TupleOptional) => TupleOptional) =>
      (input: TupleOptional): TupleOptional => {
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
        ): TupleOptional => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TupleOptional => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  Array.isArray(elem) &&
                  3 <= elem.length &&
                  5 >= elem.length &&
                  "number" === typeof elem[0] &&
                  Number.isFinite(elem[0]) &&
                  "boolean" === typeof elem[1] &&
                  "string" === typeof elem[2] &&
                  (null === elem[3] ||
                    undefined === elem[3] ||
                    ("number" === typeof elem[3] &&
                      Number.isFinite(elem[3]))) &&
                  (null === elem[4] ||
                    undefined === elem[4] ||
                    "string" === typeof elem[4]),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TupleOptional => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TupleOptional",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      ((Array.isArray(elem) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        ((3 <= elem.length && 5 >= elem.length) ||
                          $guard(
                            true,
                            {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "[number, boolean, string, (null | number | undefined), (null | string | undefined)]",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                        (("number" === typeof elem[0] &&
                          Number.isFinite(elem[0])) ||
                          $guard(
                            true,
                            {
                              path: _path + "[" + _index1 + "][0]",
                              expected: "number",
                              value: elem[0],
                            },
                            errorFactory,
                          )) &&
                        ("boolean" === typeof elem[1] ||
                          $guard(
                            true,
                            {
                              path: _path + "[" + _index1 + "][1]",
                              expected: "boolean",
                              value: elem[1],
                            },
                            errorFactory,
                          )) &&
                        ("string" === typeof elem[2] ||
                          $guard(
                            true,
                            {
                              path: _path + "[" + _index1 + "][2]",
                              expected: "string",
                              value: elem[2],
                            },
                            errorFactory,
                          )) &&
                        (null === elem[3] ||
                          undefined === elem[3] ||
                          ("number" === typeof elem[3] &&
                            Number.isFinite(elem[3])) ||
                          $guard(
                            true,
                            {
                              path: _path + "[" + _index1 + "][3]",
                              expected: "(null | number | undefined)",
                              value: elem[3],
                            },
                            errorFactory,
                          )) &&
                        (null === elem[4] ||
                          undefined === elem[4] ||
                          "string" === typeof elem[4] ||
                          $guard(
                            true,
                            {
                              path: _path + "[" + _index1 + "][4]",
                              expected: "(null | string | undefined)",
                              value: elem[4],
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TupleOptional",
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
