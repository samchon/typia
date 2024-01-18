import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_json_createAssertStringify_ClassGetter =
  _test_json_assertStringify("ClassGetter")<ClassGetter>(ClassGetter)(
    (input: any): string => {
      const assert = (input: any): ClassGetter => {
        const __is = (input: any): input is ClassGetter => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            (null === input.dead || "boolean" === typeof input.dead);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ClassGetter => {
            // @ts-ignore;
            declare const require: (lib: string) => any;
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.json.createAssertStringify",
            );
            const $ao0 = (
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
                })) &&
              (null === input.dead ||
                "boolean" === typeof input.dead ||
                $guard(_exceptionable, {
                  path: _path + ".dead",
                  expected: "(boolean | null)",
                  value: input.dead,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ClassGetter.Person",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ClassGetter.Person",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ClassGetter): string => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $string = require("typia/lib/functional/$string").$string;
        const $so0 = (input: any): any =>
          `{"id":${$string(input.id)},"name":${$string(input.name)},"dead":${
            null !== input.dead ? input.dead : "null"
          }}`;
        return $so0(input);
      };
      return stringify(assert(input));
    },
  );
