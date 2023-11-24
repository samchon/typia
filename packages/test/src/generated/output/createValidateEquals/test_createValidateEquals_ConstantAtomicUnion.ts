import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createValidateEquals_ConstantAtomicUnion =
  _test_validateEquals("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )((input: any): typia.IValidation<ConstantAtomicUnion> => {
    const errors = [] as any[];
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
              ("object" === typeof elem && null !== elem && $io0(elem, true))),
        )
      );
    };
    if (false === __is(input)) {
      const $report = (typia.createValidateEquals as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantAtomicUnion => {
        const $join = (typia.createValidateEquals as any).join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "key" === input.key ||
              $report(_exceptionable, {
                path: _path + ".key",
                expected: '"key"',
                value: input.key,
              }),
            1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (["key"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        return (
          ((Array.isArray(input) ||
            $report(true, {
              path: _path + "",
              expected: "ConstantAtomicUnion",
              value: input,
            })) &&
            input
              .map(
                (elem: any, _index1: number) =>
                  (null !== elem ||
                    $report(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: '("four" | "three" | 1 | 2 | __type | false)',
                      value: elem,
                    })) &&
                  (undefined !== elem ||
                    $report(true, {
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
                      $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: '("four" | "three" | 1 | 2 | __type | false)',
                        value: elem,
                      })) &&
                      $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                    $report(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: '("four" | "three" | 1 | 2 | __type | false)',
                      value: elem,
                    })),
              )
              .every((flag: boolean) => flag)) ||
          $report(true, {
            path: _path + "",
            expected: "ConstantAtomicUnion",
            value: input,
          })
        );
      })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
      success,
      errors,
      data: success ? input : undefined,
    } as any;
  });
