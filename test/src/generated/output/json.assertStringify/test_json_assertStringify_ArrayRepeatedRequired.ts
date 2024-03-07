import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { TypeGuardError } from "typia";
export const test_json_assertStringify_ArrayRepeatedRequired =
  _test_json_assertStringify(TypeGuardError)(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ArrayRepeatedRequired => {
        const __is = (input: any): input is ArrayRepeatedRequired => {
          const $ia0 = (input: any): any =>
            input.every(
              (elem: any) =>
                null !== elem &&
                undefined !== elem &&
                ("string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  (Array.isArray(elem) && ($ia0(elem) || false))),
            );
          return (
            null !== input &&
            undefined !== input &&
            ("string" === typeof input ||
              ("number" === typeof input && Number.isFinite(input)) ||
              (Array.isArray(input) && ($ia0(input) || false)))
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayRepeatedRequired => {
            const $guard = (typia.json.assertStringify as any).guard;
            const $aa0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): any =>
              input.every(
                (elem: any, _index1: number) =>
                  (null !== elem ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<ArrayRepeatedRequired> | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                  (undefined !== elem ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<ArrayRepeatedRequired> | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                  ("string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    ((Array.isArray(elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedRequired> | number | string)",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      ($aa0(
                        elem,
                        _path + "[" + _index1 + "]",
                        true && _exceptionable,
                      ) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected: "Array<ArrayRepeatedRequired>",
                            value: elem,
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<ArrayRepeatedRequired> | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )),
              );
            return (
              (null !== input ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedRequired> | number | string)",
                    value: input,
                  },
                  errorFactory,
                )) &&
              (undefined !== input ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedRequired> | number | string)",
                    value: input,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  ($aa0(input, _path + "", true && _exceptionable) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "",
                        expected: "Array<ArrayRepeatedRequired>",
                        value: input,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedRequired> | number | string)",
                    value: input,
                  },
                  errorFactory,
                ))
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ArrayRepeatedRequired): string => {
        const $ia0 = (input: any): any =>
          input.every(
            (elem: any) =>
              null !== elem &&
              undefined !== elem &&
              ("string" === typeof elem ||
                "number" === typeof elem ||
                (Array.isArray(elem) && ($ia0(elem) || false))),
          );
        const $string = (typia.json.assertStringify as any).string;
        const $number = (typia.json.assertStringify as any).number;
        const $throws = (typia.json.assertStringify as any).throws;
        const $sa0 = (input: any): any =>
          `[${input
            .map((elem: any) =>
              (() => {
                if ("string" === typeof elem) return $string(elem);
                if ("number" === typeof elem) return $number(elem);
                if (Array.isArray(elem)) return $sa0(elem);
                $throws({
                  expected: "(Array<ArrayRepeatedRequired> | number | string)",
                  value: elem,
                });
              })(),
            )
            .join(",")}]`;
        return (() => {
          if ("string" === typeof input) return $string(input);
          if ("number" === typeof input) return $number(input).toString();
          if (Array.isArray(input)) return $sa0(input);
          $throws({
            expected: "(Array<ArrayRepeatedRequired> | number | string)",
            value: input,
          });
        })();
      };
      return stringify(assert(input, errorFactory));
    })(input),
  );
