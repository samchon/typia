import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";
export const test_notation_validateCamel_ObjectHttpArray =
  _test_notation_validateGeneral("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )<typia.CamelCase<ObjectHttpArray>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.CamelCase<ObjectHttpArray>> => {
        const validate = (input: any): typia.IValidation<ObjectHttpArray> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectHttpArray => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.booleans) &&
              input.booleans.every((elem: any) => "boolean" === typeof elem) &&
              Array.isArray(input.bigints) &&
              input.bigints.every((elem: any) => "bigint" === typeof elem) &&
              Array.isArray(input.numbers) &&
              input.numbers.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              Array.isArray(input.strings) &&
              input.strings.every((elem: any) => "string" === typeof elem) &&
              Array.isArray(input.templates) &&
              input.templates.every(
                (elem: any) =>
                  "string" === typeof elem &&
                  RegExp(/^something_(.*)/).test(elem),
              );
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateCamel as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectHttpArray => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((Array.isArray(input.booleans) ||
                    $report(_exceptionable, {
                      path: _path + ".booleans",
                      expected: "Array<boolean>",
                      value: input.booleans,
                    })) &&
                    input.booleans
                      .map(
                        (elem: any, _index1: number) =>
                          "boolean" === typeof elem ||
                          $report(_exceptionable, {
                            path: _path + ".booleans[" + _index1 + "]",
                            expected: "boolean",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".booleans",
                      expected: "Array<boolean>",
                      value: input.booleans,
                    }),
                  ((Array.isArray(input.bigints) ||
                    $report(_exceptionable, {
                      path: _path + ".bigints",
                      expected: "Array<bigint>",
                      value: input.bigints,
                    })) &&
                    input.bigints
                      .map(
                        (elem: any, _index2: number) =>
                          "bigint" === typeof elem ||
                          $report(_exceptionable, {
                            path: _path + ".bigints[" + _index2 + "]",
                            expected: "bigint",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".bigints",
                      expected: "Array<bigint>",
                      value: input.bigints,
                    }),
                  ((Array.isArray(input.numbers) ||
                    $report(_exceptionable, {
                      path: _path + ".numbers",
                      expected: "Array<number>",
                      value: input.numbers,
                    })) &&
                    input.numbers
                      .map(
                        (elem: any, _index3: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".numbers[" + _index3 + "]",
                            expected: "number",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".numbers",
                      expected: "Array<number>",
                      value: input.numbers,
                    }),
                  ((Array.isArray(input.strings) ||
                    $report(_exceptionable, {
                      path: _path + ".strings",
                      expected: "Array<string>",
                      value: input.strings,
                    })) &&
                    input.strings
                      .map(
                        (elem: any, _index4: number) =>
                          "string" === typeof elem ||
                          $report(_exceptionable, {
                            path: _path + ".strings[" + _index4 + "]",
                            expected: "string",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".strings",
                      expected: "Array<string>",
                      value: input.strings,
                    }),
                  ((Array.isArray(input.templates) ||
                    $report(_exceptionable, {
                      path: _path + ".templates",
                      expected: "Array<`something_${string}`>",
                      value: input.templates,
                    })) &&
                    input.templates
                      .map(
                        (elem: any, _index5: number) =>
                          ("string" === typeof elem &&
                            RegExp(/^something_(.*)/).test(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".templates[" + _index5 + "]",
                            expected: "`something_${string}`",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".templates",
                      expected: "Array<`something_${string}`>",
                      value: input.templates,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectHttpArray",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpArray",
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
        const general = (
          input: ObjectHttpArray,
        ): typia.CamelCase<ObjectHttpArray> => {
          const $cp0 = (input: any) => input.map((elem: any) => elem as any);
          const $cp1 = (input: any) => input.map((elem: any) => elem as any);
          const $cp2 = (input: any) => input.map((elem: any) => elem as any);
          const $cp3 = (input: any) => input.map((elem: any) => elem as any);
          const $cp4 = (input: any) => input.map((elem: any) => elem as any);
          const $co0 = (input: any): any => ({
            booleans: Array.isArray(input.booleans)
              ? $cp0(input.booleans)
              : (input.booleans as any),
            bigints: Array.isArray(input.bigints)
              ? $cp1(input.bigints)
              : (input.bigints as any),
            numbers: Array.isArray(input.numbers)
              ? $cp2(input.numbers)
              : (input.numbers as any),
            strings: Array.isArray(input.strings)
              ? $cp3(input.strings)
              : (input.strings as any),
            templates: Array.isArray(input.templates)
              ? $cp4(input.templates)
              : (input.templates as any),
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.CamelCase<ObjectHttpArray> => {
      const __is = (input: any): input is typia.CamelCase<ObjectHttpArray> => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.booleans) &&
          input.booleans.every((elem: any) => "boolean" === typeof elem) &&
          Array.isArray(input.bigints) &&
          input.bigints.every((elem: any) => "bigint" === typeof elem) &&
          Array.isArray(input.numbers) &&
          input.numbers.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ) &&
          Array.isArray(input.strings) &&
          input.strings.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.templates) &&
          input.templates.every(
            (elem: any) =>
              "string" === typeof elem && RegExp(/^something_(.*)/).test(elem),
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<ObjectHttpArray> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((Array.isArray(input.booleans) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".booleans",
                  expected: "Array<boolean>",
                  value: input.booleans,
                },
                errorFactory,
              )) &&
              input.booleans.every(
                (elem: any, _index1: number) =>
                  "boolean" === typeof elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".booleans[" + _index1 + "]",
                      expected: "boolean",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".booleans",
                  expected: "Array<boolean>",
                  value: input.booleans,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.bigints) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".bigints",
                  expected: "Array<bigint>",
                  value: input.bigints,
                },
                errorFactory,
              )) &&
              input.bigints.every(
                (elem: any, _index2: number) =>
                  "bigint" === typeof elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bigints[" + _index2 + "]",
                      expected: "bigint",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".bigints",
                  expected: "Array<bigint>",
                  value: input.bigints,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.numbers) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".numbers",
                  expected: "Array<number>",
                  value: input.numbers,
                },
                errorFactory,
              )) &&
              input.numbers.every(
                (elem: any, _index3: number) =>
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".numbers[" + _index3 + "]",
                      expected: "number",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".numbers",
                  expected: "Array<number>",
                  value: input.numbers,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.strings) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".strings",
                  expected: "Array<string>",
                  value: input.strings,
                },
                errorFactory,
              )) &&
              input.strings.every(
                (elem: any, _index4: number) =>
                  "string" === typeof elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".strings[" + _index4 + "]",
                      expected: "string",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".strings",
                  expected: "Array<string>",
                  value: input.strings,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.templates) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".templates",
                  expected: "Array<`something_${string}`>",
                  value: input.templates,
                },
                errorFactory,
              )) &&
              input.templates.every(
                (elem: any, _index5: number) =>
                  ("string" === typeof elem &&
                    RegExp(/^something_(.*)/).test(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".templates[" + _index5 + "]",
                      expected: "`something_${string}`",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".templates",
                  expected: "Array<`something_${string}`>",
                  value: input.templates,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpArray",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectHttpArray",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
