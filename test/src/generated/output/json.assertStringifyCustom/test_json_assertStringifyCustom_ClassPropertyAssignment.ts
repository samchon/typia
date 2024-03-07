import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_json_assertStringifyCustom_ClassPropertyAssignment =
  _test_json_assertStringify(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
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
            const $guard = (typia.json.assertStringify as any).guard;
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
      const stringify = (input: ClassPropertyAssignment): string => {
        const $number = (typia.json.assertStringify as any).number;
        const $string = (typia.json.assertStringify as any).string;
        const $throws = (typia.json.assertStringify as any).throws;
        const $so0 = (input: any): any =>
          `{"id":${$number(input.id)},"name":${$string(
            input.name,
          )},"note":${(() => {
            if ("string" === typeof input.note) return $string(input.note);
            if ("string" === typeof input.note) return '"' + input.note + '"';
            $throws({
              expected: '"assignment"',
              value: input.note,
            });
          })()},"editable":${input.editable},"incremental":${
            input.incremental
          }}`;
        return $so0(input);
      };
      return stringify(assert(input, errorFactory));
    })(input, (p) => new CustomGuardError(p)),
  );
