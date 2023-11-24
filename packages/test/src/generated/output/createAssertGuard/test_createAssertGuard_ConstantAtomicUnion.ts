import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createAssertGuard_ConstantAtomicUnion = _test_assertGuard(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)(
  (input: any): asserts input is ConstantAtomicUnion => {
    const __is = (input: any): input is ConstantAtomicUnion => {
      const $io0 = (input: any): boolean => "key" === input.key;
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            null !== elem &&
            undefined !== elem &&
            (false === elem ||
              2 === elem ||
              1 === elem ||
              "three" === elem ||
              "four" === elem ||
              ("object" === typeof elem && null !== elem && $io0(elem))),
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantAtomicUnion => {
        const $guard = (typia.createAssertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "key" === input.key ||
          $guard(_exceptionable, {
            path: _path + ".key",
            expected: '"key"',
            value: input.key,
          });
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "ConstantAtomicUnion",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                (null !== elem ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: '("four" | "three" | 1 | 2 | __type | false)',
                    value: elem,
                  })) &&
                (undefined !== elem ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: '("four" | "three" | 1 | 2 | __type | false)',
                    value: elem,
                  })) &&
                (false === elem ||
                  2 === elem ||
                  1 === elem ||
                  "three" === elem ||
                  "four" === elem ||
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: '("four" | "three" | 1 | 2 | __type | false)',
                      value: elem,
                    })) &&
                    $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: '("four" | "three" | 1 | 2 | __type | false)',
                    value: elem,
                  })),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "ConstantAtomicUnion",
            value: input,
          })
        );
      })(input, "$input", true);
  },
);
