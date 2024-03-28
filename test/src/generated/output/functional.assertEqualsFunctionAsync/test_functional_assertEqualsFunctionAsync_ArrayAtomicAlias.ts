import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_functional_assertEqualsFunctionAsync_ArrayAtomicAlias =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ArrayAtomicAlias",
  )(ArrayAtomicAlias)(
    (p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
      async (input: ArrayAtomicAlias): Promise<ArrayAtomicAlias> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsFunction as any)
          .errorFactory;
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
        ): ArrayAtomicAlias => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ArrayAtomicAlias => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              Array.isArray(input[0]) &&
              input[0].every(
                (elem: any, _index1: number) => "boolean" === typeof elem,
              ) &&
              Array.isArray(input[1]) &&
              input[1].every(
                (elem: any, _index2: number) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              Array.isArray(input[2]) &&
              input[2].every(
                (elem: any, _index3: number) => "string" === typeof elem,
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayAtomicAlias => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ArrayAtomicAlias",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  (input.length === 3 ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected:
                          "[ArrayAtomicAlias.Alias<boolean>, ArrayAtomicAlias.Alias<number>, ArrayAtomicAlias.Alias<string>]",
                        value: input,
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input[0]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "ArrayAtomicAlias.Alias<boolean>",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                    input[0].every(
                      (elem: any, _index1: number) =>
                        "boolean" === typeof elem ||
                        $guard(
                          true,
                          {
                            path: _path + "[0][" + _index1 + "]",
                            expected: "boolean",
                            value: elem,
                          },
                          errorFactory,
                        ),
                    )) ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "ArrayAtomicAlias.Alias<boolean>",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input[1]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "ArrayAtomicAlias.Alias<number>",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                    input[1].every(
                      (elem: any, _index2: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $guard(
                          true,
                          {
                            path: _path + "[1][" + _index2 + "]",
                            expected: "number",
                            value: elem,
                          },
                          errorFactory,
                        ),
                    )) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "ArrayAtomicAlias.Alias<number>",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input[2]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[2]",
                        expected: "ArrayAtomicAlias.Alias<string>",
                        value: input[2],
                      },
                      errorFactory,
                    )) &&
                    input[2].every(
                      (elem: any, _index3: number) =>
                        "string" === typeof elem ||
                        $guard(
                          true,
                          {
                            path: _path + "[2][" + _index3 + "]",
                            expected: "string",
                            value: elem,
                          },
                          errorFactory,
                        ),
                    )) ||
                    $guard(
                      true,
                      {
                        path: _path + "[2]",
                        expected: "ArrayAtomicAlias.Alias<string>",
                        value: input[2],
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayAtomicAlias",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
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
        ): ArrayAtomicAlias => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ArrayAtomicAlias => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              Array.isArray(input[0]) &&
              input[0].every(
                (elem: any, _index1: number) => "boolean" === typeof elem,
              ) &&
              Array.isArray(input[1]) &&
              input[1].every(
                (elem: any, _index2: number) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              Array.isArray(input[2]) &&
              input[2].every(
                (elem: any, _index3: number) => "string" === typeof elem,
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayAtomicAlias => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ArrayAtomicAlias",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  (input.length === 3 ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected:
                          "[ArrayAtomicAlias.Alias<boolean>, ArrayAtomicAlias.Alias<number>, ArrayAtomicAlias.Alias<string>]",
                        value: input,
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input[0]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "ArrayAtomicAlias.Alias<boolean>",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                    input[0].every(
                      (elem: any, _index1: number) =>
                        "boolean" === typeof elem ||
                        $guard(
                          true,
                          {
                            path: _path + "[0][" + _index1 + "]",
                            expected: "boolean",
                            value: elem,
                          },
                          errorFactory,
                        ),
                    )) ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "ArrayAtomicAlias.Alias<boolean>",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input[1]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "ArrayAtomicAlias.Alias<number>",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                    input[1].every(
                      (elem: any, _index2: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $guard(
                          true,
                          {
                            path: _path + "[1][" + _index2 + "]",
                            expected: "number",
                            value: elem,
                          },
                          errorFactory,
                        ),
                    )) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "ArrayAtomicAlias.Alias<number>",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input[2]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[2]",
                        expected: "ArrayAtomicAlias.Alias<string>",
                        value: input[2],
                      },
                      errorFactory,
                    )) &&
                    input[2].every(
                      (elem: any, _index3: number) =>
                        "string" === typeof elem ||
                        $guard(
                          true,
                          {
                            path: _path + "[2][" + _index3 + "]",
                            expected: "string",
                            value: elem,
                          },
                          errorFactory,
                        ),
                    )) ||
                    $guard(
                      true,
                      {
                        path: _path + "[2]",
                        expected: "ArrayAtomicAlias.Alias<string>",
                        value: input[2],
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayAtomicAlias",
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
