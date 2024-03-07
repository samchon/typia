import typia from "typia";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertEqualsCustom_ClassPropertyAssignment =
  _test_assertEquals(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): ClassPropertyAssignment => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ClassPropertyAssignment => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "number" === typeof input.id &&
          Number.isFinite(input.id) &&
          "string" === typeof input.name &&
          "assignment" === input.note &&
          false === input.editable &&
          "boolean" === typeof input.incremental &&
          (5 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                ["id", "name", "note", "editable", "incremental"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        return "object" === typeof input && null !== input && $io0(input, true);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ClassPropertyAssignment => {
          const $guard = (typia.createAssertEquals as any).guard;
          const $join = (typia.createAssertEquals as any).join;
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
              )) &&
            (5 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  ["id", "name", "note", "editable", "incremental"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
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
    },
  );
