import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_misc_createAssertCloneCustom_ClassPropertyAssignment =
  _test_misc_assertClone(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): import("typia").Resolved<ClassPropertyAssignment> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ClassPropertyAssignment => {
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
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "number",
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
              ("assignment" === input.note ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".note",
                    expected: '"assignment"',
                    value: input.note,
                  },
                  errorFactory,
                )) &&
              (false === input.editable ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".editable",
                    expected: "false",
                    value: input.editable,
                  },
                  errorFactory,
                )) &&
              ("boolean" === typeof input.incremental ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".incremental",
                    expected: "boolean",
                    value: input.incremental,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ClassPropertyAssignment",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ClassPropertyAssignment",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: ClassPropertyAssignment,
      ): import("typia").Resolved<ClassPropertyAssignment> => {
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
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    },
  );
