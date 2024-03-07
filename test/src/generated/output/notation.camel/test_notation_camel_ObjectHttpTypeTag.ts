import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";
export const test_notation_validateCamel_ObjectHttpTypeTag =
  _test_notation_validateGeneral("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )<typia.CamelCase<ObjectHttpTypeTag>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.CamelCase<ObjectHttpTypeTag>> => {
        const validate = (input: any): typia.IValidation<ObjectHttpTypeTag> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectHttpTypeTag => {
            const $io0 = (input: any): boolean =>
              "number" === typeof input.int32 &&
              Math.floor(input.int32) === input.int32 &&
              -2147483648 <= input.int32 &&
              input.int32 <= 2147483647 &&
              "bigint" === typeof input.uint64 &&
              BigInt(0) <= input.uint64 &&
              "string" === typeof input.uuid &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.uuid,
              ) &&
              Array.isArray(input.range) &&
              10 <= input.range.length &&
              input.range.length <= 100 &&
              input.range.every(
                (elem: any) =>
                  "number" === typeof elem && 3 <= elem && elem <= 7,
              ) &&
              Array.isArray(input.length) &&
              10 <= input.length.length &&
              input.length.length <= 100 &&
              input.length.every(
                (elem: any) =>
                  "string" === typeof elem &&
                  3 <= elem.length &&
                  elem.length <= 7,
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
            ): input is ObjectHttpTypeTag => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.int32 &&
                    ((Math.floor(input.int32) === input.int32 &&
                      -2147483648 <= input.int32 &&
                      input.int32 <= 2147483647) ||
                      $report(_exceptionable, {
                        path: _path + ".int32",
                        expected: 'number & Type<"int32">',
                        value: input.int32,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".int32",
                      expected: '(number & Type<"int32">)',
                      value: input.int32,
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
                    (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
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
                  ((Array.isArray(input.range) ||
                    $report(_exceptionable, {
                      path: _path + ".range",
                      expected:
                        "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                      value: input.range,
                    })) &&
                    (10 <= input.range.length ||
                      $report(_exceptionable, {
                        path: _path + ".range",
                        expected: "Array<> & MinItems<10>",
                        value: input.range,
                      })) &&
                    (input.range.length <= 100 ||
                      $report(_exceptionable, {
                        path: _path + ".range",
                        expected: "Array<> & MaxItems<100>",
                        value: input.range,
                      })) &&
                    input.range
                      .map(
                        (elem: any, _index1: number) =>
                          ("number" === typeof elem &&
                            (3 <= elem ||
                              $report(_exceptionable, {
                                path: _path + ".range[" + _index1 + "]",
                                expected: "number & Minimum<3>",
                                value: elem,
                              })) &&
                            (elem <= 7 ||
                              $report(_exceptionable, {
                                path: _path + ".range[" + _index1 + "]",
                                expected: "number & Maximum<7>",
                                value: elem,
                              }))) ||
                          $report(_exceptionable, {
                            path: _path + ".range[" + _index1 + "]",
                            expected: "(number & Minimum<3> & Maximum<7>)",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".range",
                      expected:
                        "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                      value: input.range,
                    }),
                  ((Array.isArray(input.length) ||
                    $report(_exceptionable, {
                      path: _path + ".length",
                      expected:
                        "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                      value: input.length,
                    })) &&
                    (10 <= input.length.length ||
                      $report(_exceptionable, {
                        path: _path + ".length",
                        expected: "Array<> & MinItems<10>",
                        value: input.length,
                      })) &&
                    (input.length.length <= 100 ||
                      $report(_exceptionable, {
                        path: _path + ".length",
                        expected: "Array<> & MaxItems<100>",
                        value: input.length,
                      })) &&
                    input.length
                      .map(
                        (elem: any, _index2: number) =>
                          ("string" === typeof elem &&
                            (3 <= elem.length ||
                              $report(_exceptionable, {
                                path: _path + ".length[" + _index2 + "]",
                                expected: "string & MinLength<3>",
                                value: elem,
                              })) &&
                            (elem.length <= 7 ||
                              $report(_exceptionable, {
                                path: _path + ".length[" + _index2 + "]",
                                expected: "string & MaxLength<7>",
                                value: elem,
                              }))) ||
                          $report(_exceptionable, {
                            path: _path + ".length[" + _index2 + "]",
                            expected: "(string & MinLength<3> & MaxLength<7>)",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".length",
                      expected:
                        "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                      value: input.length,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectHttpTypeTag",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpTypeTag",
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
          input: ObjectHttpTypeTag,
        ): typia.CamelCase<ObjectHttpTypeTag> => {
          const $cp0 = (input: any) => input.map((elem: any) => elem as any);
          const $cp1 = (input: any) => input.map((elem: any) => elem as any);
          const $co0 = (input: any): any => ({
            int32: input.int32 as any,
            uint64: input.uint64 as any,
            uuid: input.uuid as any,
            range: Array.isArray(input.range)
              ? $cp0(input.range)
              : (input.range as any),
            length: Array.isArray(input.length)
              ? $cp1(input.length)
              : (input.length as any),
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
    ): typia.CamelCase<ObjectHttpTypeTag> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<ObjectHttpTypeTag> => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.int32 &&
          Math.floor(input.int32) === input.int32 &&
          -2147483648 <= input.int32 &&
          input.int32 <= 2147483647 &&
          "bigint" === typeof input.uint64 &&
          BigInt(0) <= input.uint64 &&
          "string" === typeof input.uuid &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            input.uuid,
          ) &&
          Array.isArray(input.range) &&
          10 <= input.range.length &&
          input.range.length <= 100 &&
          input.range.every(
            (elem: any) => "number" === typeof elem && 3 <= elem && elem <= 7,
          ) &&
          Array.isArray(input.length) &&
          10 <= input.length.length &&
          input.length.length <= 100 &&
          input.length.every(
            (elem: any) =>
              "string" === typeof elem && 3 <= elem.length && elem.length <= 7,
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<ObjectHttpTypeTag> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.int32 &&
              ((Math.floor(input.int32) === input.int32 &&
                -2147483648 <= input.int32 &&
                input.int32 <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".int32",
                    expected: 'number & Type<"int32">',
                    value: input.int32,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".int32",
                  expected: '(number & Type<"int32">)',
                  value: input.int32,
                },
                errorFactory,
              )) &&
            (("bigint" === typeof input.uint64 &&
              (BigInt(0) <= input.uint64 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uint64",
                    expected: 'bigint & Type<"uint64">',
                    value: input.uint64,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".uint64",
                  expected: '(bigint & Type<"uint64">)',
                  value: input.uint64,
                },
                errorFactory,
              )) &&
            (("string" === typeof input.uuid &&
              (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.uuid,
              ) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uuid",
                    expected: 'string & Format<"uuid">',
                    value: input.uuid,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".uuid",
                  expected: '(string & Format<"uuid">)',
                  value: input.uuid,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.range) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".range",
                  expected:
                    "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.range,
                },
                errorFactory,
              )) &&
              (10 <= input.range.length ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".range",
                    expected: "Array<> & MinItems<10>",
                    value: input.range,
                  },
                  errorFactory,
                )) &&
              (input.range.length <= 100 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".range",
                    expected: "Array<> & MaxItems<100>",
                    value: input.range,
                  },
                  errorFactory,
                )) &&
              input.range.every(
                (elem: any, _index1: number) =>
                  ("number" === typeof elem &&
                    (3 <= elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".range[" + _index1 + "]",
                          expected: "number & Minimum<3>",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    (elem <= 7 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".range[" + _index1 + "]",
                          expected: "number & Maximum<7>",
                          value: elem,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".range[" + _index1 + "]",
                      expected: "(number & Minimum<3> & Maximum<7>)",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".range",
                  expected:
                    "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.range,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.length) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".length",
                  expected:
                    "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.length,
                },
                errorFactory,
              )) &&
              (10 <= input.length.length ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".length",
                    expected: "Array<> & MinItems<10>",
                    value: input.length,
                  },
                  errorFactory,
                )) &&
              (input.length.length <= 100 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".length",
                    expected: "Array<> & MaxItems<100>",
                    value: input.length,
                  },
                  errorFactory,
                )) &&
              input.length.every(
                (elem: any, _index2: number) =>
                  ("string" === typeof elem &&
                    (3 <= elem.length ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".length[" + _index2 + "]",
                          expected: "string & MinLength<3>",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    (elem.length <= 7 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".length[" + _index2 + "]",
                          expected: "string & MaxLength<7>",
                          value: elem,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".length[" + _index2 + "]",
                      expected: "(string & MinLength<3> & MaxLength<7>)",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".length",
                  expected:
                    "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.length,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpTypeTag",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectHttpTypeTag",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
