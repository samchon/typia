import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_createValidateStringify_ArrayRepeatedRequired =
  _test_json_validateStringify("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
    ArrayRepeatedRequired,
  )((input: ArrayRepeatedRequired): typia.IValidation<string> => {
    const validate = (input: any): typia.IValidation<ArrayRepeatedRequired> => {
      const errors = [] as any[];
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
      if (false === __is(input)) {
        const $report = (typia.json.createValidateStringify as any).report(
          errors,
        );
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ArrayRepeatedRequired => {
          const $va0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): any =>
            input
              .map(
                (elem: any, _index1: number) =>
                  (null !== elem ||
                    $report(_exceptionable, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: elem,
                    })) &&
                  (undefined !== elem ||
                    $report(_exceptionable, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: elem,
                    })) &&
                  ("string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    ((Array.isArray(elem) ||
                      $report(_exceptionable, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<ArrayRepeatedRequired> | number | string)",
                        value: elem,
                      })) &&
                      ($va0(
                        elem,
                        _path + "[" + _index1 + "]",
                        true && _exceptionable,
                      ) ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected: "Array<ArrayRepeatedRequired>",
                          value: elem,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: elem,
                    })),
              )
              .every((flag: boolean) => flag);
          return (
            (null !== input ||
              $report(true, {
                path: _path + "",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input,
              })) &&
            (undefined !== input ||
              $report(true, {
                path: _path + "",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input,
              })) &&
            ("string" === typeof input ||
              ("number" === typeof input && Number.isFinite(input)) ||
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "(Array<ArrayRepeatedRequired> | number | string)",
                  value: input,
                })) &&
                ($va0(input, _path + "", true && _exceptionable) ||
                  $report(_exceptionable, {
                    path: _path + "",
                    expected: "Array<ArrayRepeatedRequired>",
                    value: input,
                  }))) ||
              $report(true, {
                path: _path + "",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input,
              }))
          );
        })(input, "$input", true);
      }
      const success = 0 === errors.length;
      return {
        success,
        errors,
        data: success ? input : undefined,
      } as any;
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
      const $string = (typia.json.createValidateStringify as any).string;
      const $number = (typia.json.createValidateStringify as any).number;
      const $throws = (typia.json.createValidateStringify as any).throws;
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
    const output = validate(input) as any;
    if (output.success) output.data = stringify(input);
    return output;
  });
