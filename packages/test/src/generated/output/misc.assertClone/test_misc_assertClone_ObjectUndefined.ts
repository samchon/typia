import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_misc_assertClone_ObjectUndefined = _test_misc_assertClone(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)((input) =>
  ((input: any): typia.Resolved<ObjectUndefined> => {
    const assert = (input: any): ObjectUndefined => {
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
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectUndefined => {
          const $guard = (typia.misc.assertClone as any).guard;
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
    };
    const clone = (input: ObjectUndefined): typia.Resolved<ObjectUndefined> => {
      const $io1 = (input: any): boolean =>
        "string" === typeof input.id && "string" === typeof input.name;
      const $any = (typia.misc.assertClone as any).any;
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
    assert(input);
    const output = clone(input);
    return output;
  })(input),
);
