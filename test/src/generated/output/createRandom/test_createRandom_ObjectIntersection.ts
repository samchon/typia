import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_createRandom_ObjectIntersection = _test_random(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ObjectIntersection as any)
      .RANDOM,
  ): typia.Resolved<ObjectIntersection> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $generator = require("typia/lib/functional/$generator").$generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      email:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      name:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      vulnerable: (generator?.boolean ?? $generator.boolean)(),
    });
    return $ro0();
  },
  assert: (input: any): ObjectIntersection => {
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
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssert",
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
  },
});
