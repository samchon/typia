import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_assertGuardEquals_ClassPropertyAssignment =
  _test_assertGuardEquals("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )((input) =>
    ((input: any): asserts input is ClassPropertyAssignment => {
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
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.assertGuardEquals",
          );
          const $join = require("typia/lib/functional/$join").$join;
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
              })) &&
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
                return $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                });
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
    })(input),
  );
