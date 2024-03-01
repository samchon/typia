import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_notation_createValidateSnake_ObjectUndefined =
  _test_notation_validateGeneral("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )<typia.SnakeCase<ObjectUndefined>>({
    convert: (
      input: any,
    ): typia.IValidation<typia.SnakeCase<ObjectUndefined>> => {
      const validate = (input: any): typia.IValidation<ObjectUndefined> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectUndefined => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.name &&
            (undefined === input.professor ||
              "string" === typeof input.professor ||
              ("number" === typeof input.professor &&
                Number.isFinite(input.professor))) &&
            (undefined === input.classroom ||
              ("object" === typeof input.classroom &&
                null !== input.classroom &&
                $io1(input.classroom))) &&
            (undefined === input.grade ||
              ("number" === typeof input.grade &&
                Number.isFinite(input.grade))) &&
            null !== input.nothing &&
            undefined === input.nothing &&
            true &&
            null !== input.never &&
            undefined === input.never;
          const $io1 = (input: any): boolean =>
            "string" === typeof input.id && "string" === typeof input.name;
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
          );
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateSnake as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectUndefined => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.name ||
                  $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  }),
                undefined === input.professor ||
                  "string" === typeof input.professor ||
                  ("number" === typeof input.professor &&
                    Number.isFinite(input.professor)) ||
                  $report(_exceptionable, {
                    path: _path + ".professor",
                    expected: "(number | string | undefined)",
                    value: input.professor,
                  }),
                undefined === input.classroom ||
                  ((("object" === typeof input.classroom &&
                    null !== input.classroom) ||
                    $report(_exceptionable, {
                      path: _path + ".classroom",
                      expected: "(ObjectUndefined.IClassroom | undefined)",
                      value: input.classroom,
                    })) &&
                    $vo1(
                      input.classroom,
                      _path + ".classroom",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".classroom",
                    expected: "(ObjectUndefined.IClassroom | undefined)",
                    value: input.classroom,
                  }),
                undefined === input.grade ||
                  ("number" === typeof input.grade &&
                    Number.isFinite(input.grade)) ||
                  $report(_exceptionable, {
                    path: _path + ".grade",
                    expected: "(number | undefined)",
                    value: input.grade,
                  }),
                (null !== input.nothing ||
                  $report(_exceptionable, {
                    path: _path + ".nothing",
                    expected: "undefined",
                    value: input.nothing,
                  })) &&
                  (undefined === input.nothing ||
                    $report(_exceptionable, {
                      path: _path + ".nothing",
                      expected: "undefined",
                      value: input.nothing,
                    })),
                true,
                (null !== input.never ||
                  $report(_exceptionable, {
                    path: _path + ".never",
                    expected: "undefined",
                    value: input.never,
                  })) &&
                  (undefined === input.never ||
                    $report(_exceptionable, {
                      path: _path + ".never",
                      expected: "undefined",
                      value: input.never,
                    })),
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
              ].every((flag: boolean) => flag);
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectUndefined",
                  value: input,
                })) &&
                input
                  .map(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected: "ObjectUndefined.ILecture",
                          value: elem,
                        })) &&
                        $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                      $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: "ObjectUndefined.ILecture",
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectUndefined",
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
        input: ObjectUndefined,
      ): typia.SnakeCase<ObjectUndefined> => {
        const $io1 = (input: any): boolean =>
          "string" === typeof input.id && "string" === typeof input.name;
        const $any = (typia.notations.createValidateSnake as any).any;
        const $cp0 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co0(elem)
              : (elem as any),
          );
        const $co0 = (input: any): any => ({
          name: input.name as any,
          professor: input.professor as any,
          classroom:
            "object" === typeof input.classroom && null !== input.classroom
              ? $co1(input.classroom)
              : (input.classroom as any),
          grade: input.grade as any,
          nothing: input.nothing as any,
          unknown: $any(input.unknown),
          never: input.never as any,
        });
        const $co1 = (input: any): any => ({
          id: input.id as any,
          name: input.name as any,
        });
        return Array.isArray(input) ? $cp0(input) : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): typia.SnakeCase<ObjectUndefined> => {
      const $guard = (typia.createAssert as any).guard(errorFactory);
      const __is = (input: any): input is typia.SnakeCase<ObjectUndefined> => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.name &&
          (undefined === input.professor ||
            "string" === typeof input.professor ||
            ("number" === typeof input.professor &&
              Number.isFinite(input.professor))) &&
          (undefined === input.classroom ||
            ("object" === typeof input.classroom &&
              null !== input.classroom &&
              $io1(input.classroom))) &&
          (undefined === input.grade ||
            ("number" === typeof input.grade &&
              Number.isFinite(input.grade))) &&
          null !== input.nothing &&
          undefined === input.nothing &&
          true &&
          null !== input.never &&
          undefined === input.never;
        const $io1 = (input: any): boolean =>
          "string" === typeof input.id && "string" === typeof input.name;
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ObjectUndefined> => {
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            (undefined === input.professor ||
              "string" === typeof input.professor ||
              ("number" === typeof input.professor &&
                Number.isFinite(input.professor)) ||
              $guard(_exceptionable, {
                path: _path + ".professor",
                expected: "(number | string | undefined)",
                value: input.professor,
              })) &&
            (undefined === input.classroom ||
              ((("object" === typeof input.classroom &&
                null !== input.classroom) ||
                $guard(_exceptionable, {
                  path: _path + ".classroom",
                  expected: "(ObjectUndefined.IClassroom | undefined)",
                  value: input.classroom,
                })) &&
                $ao1(
                  input.classroom,
                  _path + ".classroom",
                  true && _exceptionable,
                )) ||
              $guard(_exceptionable, {
                path: _path + ".classroom",
                expected: "(ObjectUndefined.IClassroom | undefined)",
                value: input.classroom,
              })) &&
            (undefined === input.grade ||
              ("number" === typeof input.grade &&
                Number.isFinite(input.grade)) ||
              $guard(_exceptionable, {
                path: _path + ".grade",
                expected: "(number | undefined)",
                value: input.grade,
              })) &&
            (null !== input.nothing ||
              $guard(_exceptionable, {
                path: _path + ".nothing",
                expected: "undefined",
                value: input.nothing,
              })) &&
            (undefined === input.nothing ||
              $guard(_exceptionable, {
                path: _path + ".nothing",
                expected: "undefined",
                value: input.nothing,
              })) &&
            true &&
            (null !== input.never ||
              $guard(_exceptionable, {
                path: _path + ".never",
                expected: "undefined",
                value: input.never,
              })) &&
            (undefined === input.never ||
              $guard(_exceptionable, {
                path: _path + ".never",
                expected: "undefined",
                value: input.never,
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.id ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id,
              })) &&
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              }));
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectUndefined",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: "ObjectUndefined.ILecture",
                      value: elem,
                    })) &&
                    $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "ObjectUndefined.ILecture",
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectUndefined",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
