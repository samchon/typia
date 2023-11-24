import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_notation_createValidateCamel_DynamicTag =
  _test_notation_validateGeneral("DynamicTag")<DynamicTag>(DynamicTag)<
    typia.CamelCase<DynamicTag>
  >({
    convert: (input: any): typia.IValidation<typia.CamelCase<DynamicTag>> => {
      const validate = (input: any): typia.IValidation<DynamicTag> => {
        const errors = [] as any[];
        const __is = (input: any): input is DynamicTag => {
          const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              if (
                "number" === typeof Number(key) &&
                0 <= Number(key) &&
                Number(key) < 10
              )
                return "bigint" === typeof value && BigInt(0) <= value;
              if (
                "string" === typeof key &&
                /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                  key,
                )
              )
                return (
                  "string" === typeof value &&
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                    value,
                  )
                );
              return true;
            });
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateCamel as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is DynamicTag => {
            const $join = (typia.notations.createValidateCamel as any).join;
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                false === _exceptionable ||
                  Object.keys(input)
                    .map((key: any) => {
                      const value = input[key];
                      if (undefined === value) return true;
                      if (
                        "number" === typeof Number(key) &&
                        0 <= Number(key) &&
                        Number(key) < 10
                      )
                        return (
                          ("bigint" === typeof value &&
                            (BigInt(0) <= value ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: 'bigint & Type<"uint64">',
                                value: value,
                              }))) ||
                          $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: '(bigint & Type<"uint64">)',
                            value: value,
                          })
                        );
                      if (
                        "string" === typeof key &&
                        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                          key,
                        )
                      )
                        return (
                          ("string" === typeof value &&
                            (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                              value,
                            ) ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: 'string & Format<"email">',
                                value: value,
                              }))) ||
                          $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: '(string & Format<"email">)',
                            value: value,
                          })
                        );
                      return true;
                    })
                    .every((flag: boolean) => flag),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $report(true, {
                  path: _path + "",
                  expected: "DynamicTag",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "DynamicTag",
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
      const general = (input: DynamicTag): typia.CamelCase<DynamicTag> => {
        const $co0 = (input: any): any => {
          const output = {} as any;
          for (const [key, value] of Object.entries(input)) {
            if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
              output[key] = value as any;
              continue;
            }
            if (RegExp(/(.*)/).test(key)) {
              output[key] = value as any;
              continue;
            }
          }
          return output;
        };
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (input: any): typia.CamelCase<DynamicTag> => {
      const __is = (input: any): input is typia.CamelCase<DynamicTag> => {
        const $io0 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if (
              "number" === typeof Number(key) &&
              0 <= Number(key) &&
              Number(key) < 10
            )
              return "bigint" === typeof value && BigInt(0) <= value;
            if (
              "string" === typeof key &&
              /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                key,
              )
            )
              return (
                "string" === typeof value &&
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                  value,
                )
              );
            return true;
          });
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<DynamicTag> => {
          const $guard = (typia.createAssert as any).guard;
          const $join = (typia.createAssert as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              if (
                "number" === typeof Number(key) &&
                0 <= Number(key) &&
                Number(key) < 10
              )
                return (
                  ("bigint" === typeof value &&
                    (BigInt(0) <= value ||
                      $guard(_exceptionable, {
                        path: _path + $join(key),
                        expected: 'bigint & Type<"uint64">',
                        value: value,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: '(bigint & Type<"uint64">)',
                    value: value,
                  })
                );
              if (
                "string" === typeof key &&
                /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                  key,
                )
              )
                return (
                  ("string" === typeof value &&
                    (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                      value,
                    ) ||
                      $guard(_exceptionable, {
                        path: _path + $join(key),
                        expected: 'string & Format<"email">',
                        value: value,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: '(string & Format<"email">)',
                    value: value,
                  })
                );
              return true;
            });
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $guard(true, {
                path: _path + "",
                expected: "DynamicTag",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "DynamicTag",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
