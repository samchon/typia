import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_createRandom_ConstantEnumeration = _test_random(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ConstantEnumeration as any)
      .RANDOM,
  ): import("typia").Resolved<ConstantEnumeration> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    return (generator?.array ?? $generator.array)(() =>
      $pick([() => 0, () => 1, () => 2, () => "Four", () => "Three"])(),
    );
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ConstantEnumeration => {
    const __is = (input: any): input is ConstantEnumeration => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            0 === elem ||
            1 === elem ||
            2 === elem ||
            "Four" === elem ||
            "Three" === elem,
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
            $guard(
              true,
              {
                path: _path + "",
                expected: "ConstantEnumeration",
                value: input,
              },
              errorFactory,
            )) &&
            input.every(
              (elem: any, _index1: number) =>
                0 === elem ||
                1 === elem ||
                2 === elem ||
                "Four" === elem ||
                "Three" === elem ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected: '("Four" | "Three" | 0 | 1 | 2)',
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ConstantEnumeration",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
