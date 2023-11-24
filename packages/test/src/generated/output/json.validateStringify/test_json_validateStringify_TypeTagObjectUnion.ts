import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_json_validateStringify_TypeTagObjectUnion =
  _test_json_validateStringify("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )((input) =>
    ((input: TypeTagObjectUnion): typia.IValidation<string> => {
      const validate = (input: any): typia.IValidation<TypeTagObjectUnion> => {
        const errors = [] as any[];
        const __is = (input: any): input is TypeTagObjectUnion => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            3 <= input.value;
          const $io1 = (input: any): boolean =>
            "string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7;
          const $iu0 = (input: any): any =>
            (() => {
              if (
                "string" === typeof input.value &&
                3 <= input.value.length &&
                input.value.length <= 7
              )
                return $io1(input);
              else if (
                "number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value
              )
                return $io0(input);
              else return false;
            })();
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $iu0(elem),
            )
          );
        };
        if (false === __is(input)) {
          const $report = (typia.json.validateStringify as any).report(errors);
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagObjectUnion => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.value &&
                  (Number.isFinite(input.value) ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "number",
                      value: input.value,
                    })) &&
                  (3 <= input.value ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "number & Minimum<3>",
                      value: input.value,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "(number & Minimum<3>)",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("string" === typeof input.value &&
                  (3 <= input.value.length ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "string & MinLength<3>",
                      value: input.value,
                    })) &&
                  (input.value.length <= 7 ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "string & MaxLength<7>",
                      value: input.value,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "(string & MinLength<3> & MaxLength<7>)",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vu0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): any =>
              (() => {
                if (
                  "string" === typeof input.value &&
                  (3 <= input.value.length ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "string & MinLength<3>",
                      value: input.value,
                    })) &&
                  (input.value.length <= 7 ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "string & MaxLength<7>",
                      value: input.value,
                    }))
                )
                  return $vo1(input, _path, true && _exceptionable);
                else if (
                  "number" === typeof input.value &&
                  (3 <= input.value ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "number & Minimum<3>",
                      value: input.value,
                    }))
                )
                  return $vo0(input, _path, true && _exceptionable);
                else
                  return $report(_exceptionable, {
                    path: _path,
                    expected:
                      "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                    value: input,
                  });
              })();
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagObjectUnion",
                  value: input,
                })) &&
                input
                  .map(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                          value: elem,
                        })) &&
                        $vu0(elem, _path + "[" + _index1 + "]", true)) ||
                      $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "TypeTagObjectUnion",
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
      const stringify = (input: TypeTagObjectUnion): string => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.value && 3 <= input.value;
        const $io1 = (input: any): boolean =>
          "string" === typeof input.value &&
          3 <= input.value.length &&
          input.value.length <= 7;
        const $number = (typia.json.validateStringify as any).number;
        const $string = (typia.json.validateStringify as any).string;
        const $throws = (typia.json.validateStringify as any).throws;
        const $so0 = (input: any): any => `{"value":${$number(input.value)}}`;
        const $so1 = (input: any): any => `{"value":${$string(input.value)}}`;
        const $su0 = (input: any): any =>
          (() => {
            if (
              "string" === typeof input.value &&
              3 <= input.value.length &&
              input.value.length <= 7
            )
              return $so1(input);
            else if ("number" === typeof input.value && 3 <= input.value)
              return $so0(input);
            else
              $throws({
                expected:
                  "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                value: input,
              });
          })();
        return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
      };
      const output = validate(input) as any;
      if (output.success) output.data = stringify(input);
      return output;
    })(input),
  );
