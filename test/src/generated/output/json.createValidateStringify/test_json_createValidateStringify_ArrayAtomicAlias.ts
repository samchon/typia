import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_json_createValidateStringify_ArrayAtomicAlias =
  _test_json_validateStringify("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )((input: ArrayAtomicAlias): typia.IValidation<string> => {
    const validate = (input: any): typia.IValidation<ArrayAtomicAlias> => {
      const errors = [] as any[];
      const __is = (input: any): input is ArrayAtomicAlias => {
        return (
          Array.isArray(input) &&
          input.length === 3 &&
          Array.isArray(input[0]) &&
          input[0].every((elem: any) => "boolean" === typeof elem) &&
          Array.isArray(input[1]) &&
          input[1].every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ) &&
          Array.isArray(input[2]) &&
          input[2].every((elem: any) => "string" === typeof elem)
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
        ): input is ArrayAtomicAlias => {
          return (
            ((Array.isArray(input) ||
              $report(true, {
                path: _path + "",
                expected: "ArrayAtomicAlias",
                value: input,
              })) &&
              (input.length === 3 ||
                $report(true, {
                  path: _path + "",
                  expected:
                    "[ArrayAtomicAlias.Alias<boolean>, ArrayAtomicAlias.Alias<number>, ArrayAtomicAlias.Alias<string>]",
                  value: input,
                })) &&
              [
                ((Array.isArray(input[0]) ||
                  $report(true, {
                    path: _path + "[0]",
                    expected: "ArrayAtomicAlias.Alias<boolean>",
                    value: input[0],
                  })) &&
                  input[0]
                    .map(
                      (elem: any, _index1: number) =>
                        "boolean" === typeof elem ||
                        $report(true, {
                          path: _path + "[0][" + _index1 + "]",
                          expected: "boolean",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "[0]",
                    expected: "ArrayAtomicAlias.Alias<boolean>",
                    value: input[0],
                  }),
                ((Array.isArray(input[1]) ||
                  $report(true, {
                    path: _path + "[1]",
                    expected: "ArrayAtomicAlias.Alias<number>",
                    value: input[1],
                  })) &&
                  input[1]
                    .map(
                      (elem: any, _index2: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $report(true, {
                          path: _path + "[1][" + _index2 + "]",
                          expected: "number",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "[1]",
                    expected: "ArrayAtomicAlias.Alias<number>",
                    value: input[1],
                  }),
                ((Array.isArray(input[2]) ||
                  $report(true, {
                    path: _path + "[2]",
                    expected: "ArrayAtomicAlias.Alias<string>",
                    value: input[2],
                  })) &&
                  input[2]
                    .map(
                      (elem: any, _index3: number) =>
                        "string" === typeof elem ||
                        $report(true, {
                          path: _path + "[2][" + _index3 + "]",
                          expected: "string",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "[2]",
                    expected: "ArrayAtomicAlias.Alias<string>",
                    value: input[2],
                  }),
              ].every((flag: boolean) => flag)) ||
            $report(true, {
              path: _path + "",
              expected: "ArrayAtomicAlias",
              value: input,
            })
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
    const stringify = (input: ArrayAtomicAlias): string => {
      const $number = (typia.json.createValidateStringify as any).number;
      const $string = (typia.json.createValidateStringify as any).string;
      return `[${`[${input[0].map((elem: any) => elem).join(",")}]`},${`[${input[1].map((elem: any) => $number(elem)).join(",")}]`},${`[${input[2].map((elem: any) => $string(elem)).join(",")}]`}]`;
    };
    const output = validate(input) as any;
    if (output.success) output.data = stringify(input);
    return output;
  });
