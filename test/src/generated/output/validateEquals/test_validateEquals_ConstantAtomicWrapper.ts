import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_validateEquals_ConstantAtomicWrapper = _test_validateEquals(
  "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
  ((input: any): typia.IValidation<ConstantAtomicWrapper> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ConstantAtomicWrapper => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "boolean" === typeof input.value &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.value &&
        Number.isFinite(input.value) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.value &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0], true) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io1(input[1], true) &&
        "object" === typeof input[2] &&
        null !== input[2] &&
        $io2(input[2], true)
      );
    };
    if (false === __is(input)) {
      const $report = (typia.validateEquals as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantAtomicWrapper => {
        const $join = (typia.validateEquals as any).join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "boolean" === typeof input.value ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "boolean",
                value: input.value,
              }),
            1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
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
        const $vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.value && Number.isFinite(input.value)) ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value,
              }),
            1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
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
        const $vo2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "string" === typeof input.value ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value,
              }),
            1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
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
              expected: "ConstantAtomicWrapper",
              value: input,
            })) &&
            (input.length === 3 ||
              $report(true, {
                path: _path + "",
                expected:
                  "[ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>]",
                value: input,
              })) &&
            [
              ((("object" === typeof input[0] && null !== input[0]) ||
                $report(true, {
                  path: _path + "[0]",
                  expected: "ConstantAtomicWrapper.IPointer<boolean>",
                  value: input[0],
                })) &&
                $vo0(input[0], _path + "[0]", true)) ||
                $report(true, {
                  path: _path + "[0]",
                  expected: "ConstantAtomicWrapper.IPointer<boolean>",
                  value: input[0],
                }),
              ((("object" === typeof input[1] && null !== input[1]) ||
                $report(true, {
                  path: _path + "[1]",
                  expected: "ConstantAtomicWrapper.IPointer<number>",
                  value: input[1],
                })) &&
                $vo1(input[1], _path + "[1]", true)) ||
                $report(true, {
                  path: _path + "[1]",
                  expected: "ConstantAtomicWrapper.IPointer<number>",
                  value: input[1],
                }),
              ((("object" === typeof input[2] && null !== input[2]) ||
                $report(true, {
                  path: _path + "[2]",
                  expected: "ConstantAtomicWrapper.IPointer<string>",
                  value: input[2],
                })) &&
                $vo2(input[2], _path + "[2]", true)) ||
                $report(true, {
                  path: _path + "[2]",
                  expected: "ConstantAtomicWrapper.IPointer<string>",
                  value: input[2],
                }),
            ].every((flag: boolean) => flag)) ||
          $report(true, {
            path: _path + "",
            expected: "ConstantAtomicWrapper",
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
  })(input),
);
