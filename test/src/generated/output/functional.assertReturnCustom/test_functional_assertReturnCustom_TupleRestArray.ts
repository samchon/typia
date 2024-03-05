import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_functional_assertReturnCustom_TupleRestArray =
  _test_functional_assertReturn(CustomGuardError)("TupleRestArray")(
    TupleRestArray,
  )(
    (p: (input: TupleRestArray) => TupleRestArray) =>
      (input: TupleRestArray): TupleRestArray => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
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
        ): TupleRestArray => {
          const __is = (input: any): input is TupleRestArray => {
            return (
              Array.isArray(input) &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              Array.isArray(input.slice(2)) &&
              input
                .slice(2)
                .every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.every((elem: any) => "string" === typeof elem),
                )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TupleRestArray => {
              const $guard = (typia.functional.assertReturn as any).guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TupleRestArray",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  ("boolean" === typeof input[0] ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                  (("number" === typeof input[1] &&
                    Number.isFinite(input[1])) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "number",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input.slice(2)) ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: "...Array<string>",
                        value: input.slice(2),
                      },
                      errorFactory,
                    )) &&
                    input.slice(2).every(
                      (elem: any, _index1: number) =>
                        ((Array.isArray(elem) ||
                          $guard(
                            true,
                            {
                              path: _path + "[" + (2 + _index1) + "]",
                              expected: "Array<string>",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                          elem.every(
                            (elem: any, _index2: number) =>
                              "string" === typeof elem ||
                              $guard(
                                true,
                                {
                                  path:
                                    _path +
                                    "[" +
                                    (2 + _index1) +
                                    "][" +
                                    _index2 +
                                    "]",
                                  expected: "string",
                                  value: elem,
                                },
                                errorFactory,
                              ),
                          )) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + (2 + _index1) + "]",
                            expected: "Array<string>",
                            value: elem,
                          },
                          errorFactory,
                        ),
                    )) ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: "...Array<string>",
                        value: input.slice(2),
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TupleRestArray",
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
