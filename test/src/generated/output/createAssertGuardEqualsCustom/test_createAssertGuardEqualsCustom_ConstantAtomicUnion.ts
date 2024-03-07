import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertGuardEqualsCustom_ConstantAtomicUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): asserts input is ConstantAtomicUnion => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ConstantAtomicUnion => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "key" === input.key &&
          (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["key"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any, _index1: number) =>
              null !== elem &&
              undefined !== elem &&
              (false === elem ||
                2 === elem ||
                1 === elem ||
                "three" === elem ||
                "four" === elem ||
                ("object" === typeof elem &&
                  null !== elem &&
                  $io0(elem, true))),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ConstantAtomicUnion => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
          const $join = (typia.createAssertGuardEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("key" === input.key ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".key",
                  expected: '"key"',
                  value: input.key,
                },
                errorFactory,
              )) &&
            (1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["key"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ConstantAtomicUnion",
                  value: input,
                },
                errorFactory,
              )) &&
              input.every(
                (elem: any, _index1: number) =>
                  (null !== elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: '("four" | "three" | 1 | 2 | __type | false)',
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                  (undefined !== elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: '("four" | "three" | 1 | 2 | __type | false)',
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                  (false === elem ||
                    2 === elem ||
                    1 === elem ||
                    "three" === elem ||
                    "four" === elem ||
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            '("four" | "three" | 1 | 2 | __type | false)',
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: '("four" | "three" | 1 | 2 | __type | false)',
                        value: elem,
                      },
                      errorFactory,
                    )),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ConstantAtomicUnion",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    },
  );
