import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_random_ConstantEnumeration = _test_random(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ConstantEnumeration> => {
      const $generator = (typia.random as any).generator;
      const $pick = (typia.random as any).pick;
      return (generator?.array ?? $generator.array)(() =>
        $pick([() => 0, () => 1, () => 2, () => "Three", () => "Four"])(),
      );
    })((ConstantEnumeration as any).RANDOM),
  assert: (input: any): ConstantEnumeration => {
    const __is = (input: any): input is ConstantEnumeration => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            0 === elem ||
            1 === elem ||
            2 === elem ||
            "Three" === elem ||
            "Four" === elem,
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantEnumeration => {
        const $guard = (typia.createAssert as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "ConstantEnumeration",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                0 === elem ||
                1 === elem ||
                2 === elem ||
                "Three" === elem ||
                "Four" === elem ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected: '("Four" | "Three" | 0 | 1 | 2)',
                  value: elem,
                }),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "ConstantEnumeration",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
