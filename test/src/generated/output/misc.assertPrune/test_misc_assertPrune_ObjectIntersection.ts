import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_misc_assertPrune_ObjectIntersection = _test_misc_assertPrune(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)((input) =>
  ((input: any): ObjectIntersection => {
    const assert = (input: any): ObjectIntersection => {
      const __is = (input: any): input is ObjectIntersection => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).email &&
          "string" === typeof (input as any).name &&
          "boolean" === typeof (input as any).vulnerable
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectIntersection => {
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.misc.assertPrune",
          );
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.email ||
              $guard(_exceptionable, {
                path: _path + ".email",
                expected: "string",
                value: input.email,
              })) &&
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            ("boolean" === typeof input.vulnerable ||
              $guard(_exceptionable, {
                path: _path + ".vulnerable",
                expected: "boolean",
                value: input.vulnerable,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectIntersection",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectIntersection",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: ObjectIntersection): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("email" === key || "name" === key || "vulnerable" === key)
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    assert(input);
    prune(input);
    return input;
  })(input),
);
