import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_createIsStringify_ClassPropertyAssignment =
  _test_json_isStringify("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )((input: ClassPropertyAssignment): string | null => {
    const is = (input: any): input is ClassPropertyAssignment => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "assignment" === input.note &&
        false === input.editable &&
        "boolean" === typeof input.incremental;
      return "object" === typeof input && null !== input && $io0(input);
    };
    const stringify = (input: ClassPropertyAssignment): string => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $number = require("typia/lib/functional/$number").$number;
      const $string = require("typia/lib/functional/$string").$string;
      const $throws = require("typia/lib/functional/$throws").$throws(
        "typia.json.createIsStringify",
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
        })()},"editable":${input.editable},"incremental":${input.incremental}}`;
      return $so0(input);
    };
    return is(input) ? stringify(input) : null;
  });
