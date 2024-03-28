import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../../internal/_test_functional_assertReturnAsync";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_functional_assertReturnAsync_ArrayUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      async (input: ArrayUnion): Promise<ArrayUnion> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertReturn as any).errorFactory;
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
        ): ArrayUnion => {
          const __is = (input: any): input is ArrayUnion => {
            const $ip0 = (input: any) => {
              const array = input;
              const top = input[0];
              if (0 === input.length) return true;
              const arrayPredicators = [
                [
                  (top: any[]): any => "boolean" === typeof top,
                  (entire: any[]): any =>
                    entire.every((elem: any) => "boolean" === typeof elem),
                ] as const,
                [
                  (top: any[]): any =>
                    "number" === typeof top && Number.isFinite(top),
                  (entire: any[]): any =>
                    entire.every(
                      (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                    ),
                ] as const,
                [
                  (top: any[]): any => "string" === typeof top,
                  (entire: any[]): any =>
                    entire.every((elem: any) => "string" === typeof elem),
                ] as const,
              ];
              const passed = arrayPredicators.filter((pred: any) =>
                pred[0](top),
              );
              if (1 === passed.length) return passed[0]![1](array);
              else if (1 < passed.length)
                for (const pred of passed)
                  if (array.every((value: any) => true === pred[0](value)))
                    return pred[1](array);
              return false;
            };
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) => Array.isArray(elem) && ($ip0(elem) || false),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayUnion => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $ap0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return true;
                const arrayPredicators = [
                  [
                    (top: any[]): any => "boolean" === typeof top,
                    (entire: any[]): any =>
                      entire.every(
                        (elem: any, _index5: number) =>
                          "boolean" === typeof elem ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + "[" + _index5 + "]",
                              expected: "boolean",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      ),
                  ] as const,
                  [
                    (top: any[]): any =>
                      "number" === typeof top && Number.isFinite(top),
                    (entire: any[]): any =>
                      entire.every(
                        (elem: any, _index6: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + "[" + _index6 + "]",
                              expected: "number",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      ),
                  ] as const,
                  [
                    (top: any[]): any => "string" === typeof top,
                    (entire: any[]): any =>
                      entire.every(
                        (elem: any, _index7: number) =>
                          "string" === typeof elem ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + "[" + _index7 + "]",
                              expected: "string",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      ),
                  ] as const,
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                  pred[0](top),
                );
                if (1 === passed.length) return passed[0]![1](array);
                else if (1 < passed.length)
                  for (const pred of passed)
                    if (array.every((value: any) => true === pred[0](value)))
                      return pred[1](array);
                return $guard(
                  _exceptionable,
                  {
                    path: _path,
                    expected:
                      "(Array<boolean> | Array<number> | Array<string>)",
                    value: input,
                  },
                  errorFactory,
                );
              };
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ArrayUnion",
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
                              "(Array<boolean> | Array<number> | Array<string>)",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        ($ap0(
                          elem,
                          _path + "[" + _index1 + "]",
                          true && _exceptionable,
                        ) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "Array<boolean> | Array<number> | Array<string>",
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<boolean> | Array<number> | Array<string>)",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayUnion",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(await p(input));
      },
  );
