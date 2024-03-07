import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { SetSimple } from "../../../structures/SetSimple";
export const test_notation_validateCamel_SetSimple =
  _test_notation_validateGeneral("SetSimple")<SetSimple>(SetSimple)<
    typia.CamelCase<SetSimple>
  >({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.CamelCase<SetSimple>> => {
        const validate = (input: any): typia.IValidation<SetSimple> => {
          const errors = [] as any[];
          const __is = (input: any): input is SetSimple => {
            const $io0 = (input: any): boolean =>
              input.booleans instanceof Set &&
              (() =>
                [...input.booleans].every(
                  (elem: any) => "boolean" === typeof elem,
                ))() &&
              input.numbers instanceof Set &&
              (() =>
                [...input.numbers].every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                ))() &&
              input.strings instanceof Set &&
              (() =>
                [...input.strings].every(
                  (elem: any) => "string" === typeof elem,
                ))() &&
              input.arrays instanceof Set &&
              (() =>
                [...input.arrays].every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.every(
                      (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                    ),
                ))() &&
              input.objects instanceof Set &&
              (() =>
                [...input.objects].every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
                ))();
            const $io1 = (input: any): boolean =>
              "string" === typeof input.id &&
              "string" === typeof input.name &&
              "number" === typeof input.age &&
              Number.isFinite(input.age);
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
            ): input is SetSimple => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((input.booleans instanceof Set ||
                    $report(_exceptionable, {
                      path: _path + ".booleans",
                      expected: "Set<boolean>",
                      value: input.booleans,
                    })) &&
                    (() =>
                      [...input.booleans]
                        .map(
                          (elem: any, _index1: number) =>
                            "boolean" === typeof elem ||
                            $report(_exceptionable, {
                              path: _path + ".booleans[" + _index1 + "]",
                              expected: "boolean",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag))()) ||
                    $report(_exceptionable, {
                      path: _path + ".booleans",
                      expected: "Set<boolean>",
                      value: input.booleans,
                    }),
                  ((input.numbers instanceof Set ||
                    $report(_exceptionable, {
                      path: _path + ".numbers",
                      expected: "Set<number>",
                      value: input.numbers,
                    })) &&
                    (() =>
                      [...input.numbers]
                        .map(
                          (elem: any, _index2: number) =>
                            ("number" === typeof elem &&
                              Number.isFinite(elem)) ||
                            $report(_exceptionable, {
                              path: _path + ".numbers[" + _index2 + "]",
                              expected: "number",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag))()) ||
                    $report(_exceptionable, {
                      path: _path + ".numbers",
                      expected: "Set<number>",
                      value: input.numbers,
                    }),
                  ((input.strings instanceof Set ||
                    $report(_exceptionable, {
                      path: _path + ".strings",
                      expected: "Set<string>",
                      value: input.strings,
                    })) &&
                    (() =>
                      [...input.strings]
                        .map(
                          (elem: any, _index3: number) =>
                            "string" === typeof elem ||
                            $report(_exceptionable, {
                              path: _path + ".strings[" + _index3 + "]",
                              expected: "string",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag))()) ||
                    $report(_exceptionable, {
                      path: _path + ".strings",
                      expected: "Set<string>",
                      value: input.strings,
                    }),
                  ((input.arrays instanceof Set ||
                    $report(_exceptionable, {
                      path: _path + ".arrays",
                      expected: "Set<Array<number>>",
                      value: input.arrays,
                    })) &&
                    (() =>
                      [...input.arrays]
                        .map(
                          (elem: any, _index4: number) =>
                            ((Array.isArray(elem) ||
                              $report(_exceptionable, {
                                path: _path + ".arrays[" + _index4 + "]",
                                expected: "Array<number>",
                                value: elem,
                              })) &&
                              elem
                                .map(
                                  (elem: any, _index5: number) =>
                                    ("number" === typeof elem &&
                                      Number.isFinite(elem)) ||
                                    $report(_exceptionable, {
                                      path:
                                        _path +
                                        ".arrays[" +
                                        _index4 +
                                        "][" +
                                        _index5 +
                                        "]",
                                      expected: "number",
                                      value: elem,
                                    }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                              path: _path + ".arrays[" + _index4 + "]",
                              expected: "Array<number>",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag))()) ||
                    $report(_exceptionable, {
                      path: _path + ".arrays",
                      expected: "Set<Array<number>>",
                      value: input.arrays,
                    }),
                  ((input.objects instanceof Set ||
                    $report(_exceptionable, {
                      path: _path + ".objects",
                      expected: "Set<SetSimple.Person>",
                      value: input.objects,
                    })) &&
                    (() =>
                      [...input.objects]
                        .map(
                          (elem: any, _index6: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + ".objects[" + _index6 + "]",
                                expected: "SetSimple.Person",
                                value: elem,
                              })) &&
                              $vo1(
                                elem,
                                _path + ".objects[" + _index6 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + ".objects[" + _index6 + "]",
                              expected: "SetSimple.Person",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag))()) ||
                    $report(_exceptionable, {
                      path: _path + ".objects",
                      expected: "Set<SetSimple.Person>",
                      value: input.objects,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.id ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "string",
                      value: input.id,
                    }),
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  ("number" === typeof input.age &&
                    Number.isFinite(input.age)) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected: "number",
                      value: input.age,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "SetSimple",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "SetSimple",
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
        const general = (input: SetSimple): typia.CamelCase<SetSimple> => {
          const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age;
          const $cp0 = (input: any) => input.map((elem: any) => elem as any);
          const $co0 = (input: any): any => ({
            booleans:
              input.booleans instanceof Set
                ? (() =>
                    new Set<any>(
                      [...input.booleans].map((elem: any) => elem as any),
                    ))()
                : (input.booleans as any),
            numbers:
              input.numbers instanceof Set
                ? (() =>
                    new Set<any>(
                      [...input.numbers].map((elem: any) => elem as any),
                    ))()
                : (input.numbers as any),
            strings:
              input.strings instanceof Set
                ? (() =>
                    new Set<any>(
                      [...input.strings].map((elem: any) => elem as any),
                    ))()
                : (input.strings as any),
            arrays:
              input.arrays instanceof Set
                ? (() =>
                    new Set<any>(
                      [...input.arrays].map((elem: any) =>
                        Array.isArray(elem) ? $cp0(elem) : (elem as any),
                      ),
                    ))()
                : (input.arrays as any),
            objects:
              input.objects instanceof Set
                ? (() =>
                    new Set<any>(
                      [...input.objects].map((elem: any) =>
                        "object" === typeof elem && null !== elem
                          ? $co1(elem)
                          : (elem as any),
                      ),
                    ))()
                : (input.objects as any),
          });
          const $co1 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            age: input.age as any,
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
    ): typia.CamelCase<SetSimple> => {
      const __is = (input: any): input is typia.CamelCase<SetSimple> => {
        const $io0 = (input: any): boolean =>
          input.booleans instanceof Set &&
          (() =>
            [...input.booleans].every(
              (elem: any) => "boolean" === typeof elem,
            ))() &&
          input.numbers instanceof Set &&
          (() =>
            [...input.numbers].every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ))() &&
          input.strings instanceof Set &&
          (() =>
            [...input.strings].every(
              (elem: any) => "string" === typeof elem,
            ))() &&
          input.arrays instanceof Set &&
          (() =>
            [...input.arrays].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                ),
            ))() &&
          input.objects instanceof Set &&
          (() =>
            [...input.objects].every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            ))();
        const $io1 = (input: any): boolean =>
          "string" === typeof input.id &&
          "string" === typeof input.name &&
          "number" === typeof input.age &&
          Number.isFinite(input.age);
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<SetSimple> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((input.booleans instanceof Set ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".booleans",
                  expected: "Set<boolean>",
                  value: input.booleans,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.booleans].every(
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
                ))()) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".booleans",
                  expected: "Set<boolean>",
                  value: input.booleans,
                },
                errorFactory,
              )) &&
            (((input.numbers instanceof Set ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".numbers",
                  expected: "Set<number>",
                  value: input.numbers,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.numbers].every(
                  (elem: any, _index2: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".numbers[" + _index2 + "]",
                        expected: "number",
                        value: elem,
                      },
                      errorFactory,
                    ),
                ))()) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".numbers",
                  expected: "Set<number>",
                  value: input.numbers,
                },
                errorFactory,
              )) &&
            (((input.strings instanceof Set ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".strings",
                  expected: "Set<string>",
                  value: input.strings,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.strings].every(
                  (elem: any, _index3: number) =>
                    "string" === typeof elem ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".strings[" + _index3 + "]",
                        expected: "string",
                        value: elem,
                      },
                      errorFactory,
                    ),
                ))()) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".strings",
                  expected: "Set<string>",
                  value: input.strings,
                },
                errorFactory,
              )) &&
            (((input.arrays instanceof Set ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".arrays",
                  expected: "Set<Array<number>>",
                  value: input.arrays,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.arrays].every(
                  (elem: any, _index4: number) =>
                    ((Array.isArray(elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".arrays[" + _index4 + "]",
                          expected: "Array<number>",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      elem.every(
                        (elem: any, _index5: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $guard(
                            _exceptionable,
                            {
                              path:
                                _path +
                                ".arrays[" +
                                _index4 +
                                "][" +
                                _index5 +
                                "]",
                              expected: "number",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".arrays[" + _index4 + "]",
                        expected: "Array<number>",
                        value: elem,
                      },
                      errorFactory,
                    ),
                ))()) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".arrays",
                  expected: "Set<Array<number>>",
                  value: input.arrays,
                },
                errorFactory,
              )) &&
            (((input.objects instanceof Set ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".objects",
                  expected: "Set<SetSimple.Person>",
                  value: input.objects,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.objects].every(
                  (elem: any, _index6: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".objects[" + _index6 + "]",
                          expected: "SetSimple.Person",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao1(
                        elem,
                        _path + ".objects[" + _index6 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".objects[" + _index6 + "]",
                        expected: "SetSimple.Person",
                        value: elem,
                      },
                      errorFactory,
                    ),
                ))()) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".objects",
                  expected: "Set<SetSimple.Person>",
                  value: input.objects,
                },
                errorFactory,
              ));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.id ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: "string",
                  value: input.id,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.name ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".name",
                  expected: "string",
                  value: input.name,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.age && Number.isFinite(input.age)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".age",
                  expected: "number",
                  value: input.age,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "SetSimple",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "SetSimple",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
