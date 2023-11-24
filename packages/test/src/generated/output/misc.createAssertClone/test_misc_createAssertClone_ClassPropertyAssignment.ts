import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_misc_createAssertClone_ClassPropertyAssignment =
  _test_misc_assertClone("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )((input: any): typia.Resolved<ClassPropertyAssignment> => {
    const assert = (input: any): ClassPropertyAssignment => {
      const __is = (input: any): input is ClassPropertyAssignment => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.id &&
          Number.isFinite(input.id) &&
          "string" === typeof input.name &&
          "assignment" === input.note &&
          false === input.editable &&
          "boolean" === typeof input.incremental;
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ClassPropertyAssignment => {
          const $guard = (typia.misc.createAssertClone as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.id && Number.isFinite(input.id)) ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              })) &&
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            ("assignment" === input.note ||
              $guard(_exceptionable, {
                path: _path + ".note",
                expected: '"assignment"',
                value: input.note,
              })) &&
            (false === input.editable ||
              $guard(_exceptionable, {
                path: _path + ".editable",
                expected: "false",
                value: input.editable,
              })) &&
            ("boolean" === typeof input.incremental ||
              $guard(_exceptionable, {
                path: _path + ".incremental",
                expected: "boolean",
                value: input.incremental,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ClassPropertyAssignment",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ClassPropertyAssignment",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const clone = (
      input: ClassPropertyAssignment,
    ): typia.Resolved<ClassPropertyAssignment> => {
      const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        note: input.note as any,
        editable: input.editable as any,
        incremental: input.incremental as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
  });
