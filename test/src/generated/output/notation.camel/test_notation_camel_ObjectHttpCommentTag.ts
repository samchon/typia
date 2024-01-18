import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_notation_validateCamel_ObjectHttpCommentTag =
  _test_notation_validateGeneral("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )<typia.CamelCase<ObjectHttpCommentTag>>({
    convert: (input) =>
      ((
        input: any,
      ): typia.IValidation<typia.CamelCase<ObjectHttpCommentTag>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ObjectHttpCommentTag> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectHttpCommentTag => {
            const $io0 = (input: any): boolean =>
              "number" === typeof input.int &&
              Math.floor(input.int) === input.int &&
              -2147483648 <= input.int &&
              input.int <= 2147483647 &&
              "bigint" === typeof input.uint64 &&
              BigInt(0) <= input.uint64 &&
              "string" === typeof input.uuid &&
              /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                input.uuid,
              ) &&
              Array.isArray(input.items) &&
              10 <= input.items.length &&
              input.items.length <= 100 &&
              input.items.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              );
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = require("typia/lib/functional/$report").$report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectHttpCommentTag => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.int &&
                    ((Math.floor(input.int) === input.int &&
                      -2147483648 <= input.int &&
                      input.int <= 2147483647) ||
                      $report(_exceptionable, {
                        path: _path + ".int",
                        expected: 'number & Type<"int32">',
                        value: input.int,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".int",
                      expected: '(number & Type<"int32">)',
                      value: input.int,
                    }),
                  ("bigint" === typeof input.uint64 &&
                    (BigInt(0) <= input.uint64 ||
                      $report(_exceptionable, {
                        path: _path + ".uint64",
                        expected: 'bigint & Type<"uint64">',
                        value: input.uint64,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".uint64",
                      expected: '(bigint & Type<"uint64">)',
                      value: input.uint64,
                    }),
                  ("string" === typeof input.uuid &&
                    (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                      input.uuid,
                    ) ||
                      $report(_exceptionable, {
                        path: _path + ".uuid",
                        expected: 'string & Format<"uuid">',
                        value: input.uuid,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".uuid",
                      expected: '(string & Format<"uuid">)',
                      value: input.uuid,
                    }),
                  ((Array.isArray(input.items) ||
                    $report(_exceptionable, {
                      path: _path + ".items",
                      expected:
                        "(Array<number> & MinItems<10> & MaxItems<100>)",
                      value: input.items,
                    })) &&
                    (10 <= input.items.length ||
                      $report(_exceptionable, {
                        path: _path + ".items",
                        expected: "Array<> & MinItems<10>",
                        value: input.items,
                      })) &&
                    (input.items.length <= 100 ||
                      $report(_exceptionable, {
                        path: _path + ".items",
                        expected: "Array<> & MaxItems<100>",
                        value: input.items,
                      })) &&
                    input.items
                      .map(
                        (elem: any, _index1: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".items[" + _index1 + "]",
                            expected: "number",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".items",
                      expected:
                        "(Array<number> & MinItems<10> & MaxItems<100>)",
                      value: input.items,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectHttpCommentTag",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpCommentTag",
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
          input: ObjectHttpCommentTag,
        ): typia.CamelCase<ObjectHttpCommentTag> => {
          const $cp0 = (input: any) => input.map((elem: any) => elem as any);
          const $co0 = (input: any): any => ({
            int: input.int as any,
            uint64: input.uint64 as any,
            uuid: input.uuid as any,
            items: Array.isArray(input.items)
              ? $cp0(input.items)
              : (input.items as any),
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.CamelCase<ObjectHttpCommentTag> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<ObjectHttpCommentTag> => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.int &&
          Math.floor(input.int) === input.int &&
          -2147483648 <= input.int &&
          input.int <= 2147483647 &&
          "bigint" === typeof input.uint64 &&
          BigInt(0) <= input.uint64 &&
          "string" === typeof input.uuid &&
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
            input.uuid,
          ) &&
          Array.isArray(input.items) &&
          10 <= input.items.length &&
          input.items.length <= 100 &&
          input.items.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<ObjectHttpCommentTag> => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.createAssert",
          );
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.int &&
              ((Math.floor(input.int) === input.int &&
                -2147483648 <= input.int &&
                input.int <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".int",
                  expected: 'number & Type<"int32">',
                  value: input.int,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".int",
                expected: '(number & Type<"int32">)',
                value: input.int,
              })) &&
            (("bigint" === typeof input.uint64 &&
              (BigInt(0) <= input.uint64 ||
                $guard(_exceptionable, {
                  path: _path + ".uint64",
                  expected: 'bigint & Type<"uint64">',
                  value: input.uint64,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".uint64",
                expected: '(bigint & Type<"uint64">)',
                value: input.uint64,
              })) &&
            (("string" === typeof input.uuid &&
              (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                input.uuid,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".uuid",
                  expected: 'string & Format<"uuid">',
                  value: input.uuid,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".uuid",
                expected: '(string & Format<"uuid">)',
                value: input.uuid,
              })) &&
            (((Array.isArray(input.items) ||
              $guard(_exceptionable, {
                path: _path + ".items",
                expected: "(Array<number> & MinItems<10> & MaxItems<100>)",
                value: input.items,
              })) &&
              (10 <= input.items.length ||
                $guard(_exceptionable, {
                  path: _path + ".items",
                  expected: "Array<> & MinItems<10>",
                  value: input.items,
                })) &&
              (input.items.length <= 100 ||
                $guard(_exceptionable, {
                  path: _path + ".items",
                  expected: "Array<> & MaxItems<100>",
                  value: input.items,
                })) &&
              input.items.every(
                (elem: any, _index1: number) =>
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  $guard(_exceptionable, {
                    path: _path + ".items[" + _index1 + "]",
                    expected: "number",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".items",
                expected: "(Array<number> & MinItems<10> & MaxItems<100>)",
                value: input.items,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectHttpCommentTag",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHttpCommentTag",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
