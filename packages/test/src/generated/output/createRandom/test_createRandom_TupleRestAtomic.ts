import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_createRandom_TupleRestAtomic = _test_random(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (TupleRestAtomic as any)
      .RANDOM,
  ): typia.Resolved<TupleRestAtomic> => {
    const $generator = (typia.createRandom as any).generator;
    return [
      (generator?.boolean ?? $generator.boolean)(),
      (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
    ];
  },
  assert: (input: any): TupleRestAtomic => {
    const __is = (input: any): input is TupleRestAtomic => {
      return (
        Array.isArray(input) &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        Number.isFinite(input[1]) &&
        Array.isArray(input.slice(2)) &&
        input.slice(2).every((elem: any) => "string" === typeof elem)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TupleRestAtomic => {
        const $guard = (typia.createAssert as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "TupleRestAtomic",
              value: input,
            })) &&
            ("boolean" === typeof input[0] ||
              $guard(true, {
                path: _path + "[0]",
                expected: "boolean",
                value: input[0],
              })) &&
            (("number" === typeof input[1] && Number.isFinite(input[1])) ||
              $guard(true, {
                path: _path + "[1]",
                expected: "number",
                value: input[1],
              })) &&
            (((Array.isArray(input.slice(2)) ||
              $guard(true, {
                path: _path + "",
                expected: "...string",
                value: input.slice(2),
              })) &&
              input.slice(2).every(
                (elem: any, _index1: number) =>
                  "string" === typeof elem ||
                  $guard(true, {
                    path: _path + "[" + (2 + _index1) + "]",
                    expected: "string",
                    value: elem,
                  }),
              )) ||
              $guard(true, {
                path: _path + "",
                expected: "...string",
                value: input.slice(2),
              }))) ||
          $guard(true, {
            path: _path + "",
            expected: "TupleRestAtomic",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
