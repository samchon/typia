import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_assertStringify_ClassPropertyAssignment =
  _test_json_assertStringify(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    ((input: any): string => {
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
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.json.assertStringify",
            );
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
      const stringify = (input: ClassPropertyAssignment): string => {
        const $number = require("typia/lib/functional/$number").$number;
        const $string = require("typia/lib/functional/$string").$string;
        const $throws = require("typia/lib/functional/$throws").$throws(
          "typia.json.assertStringify",
        );
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
      return stringify(assert(input));
    })(input),
  );
