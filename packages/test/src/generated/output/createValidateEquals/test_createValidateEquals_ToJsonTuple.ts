import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_createValidateEquals_ToJsonTuple = _test_validateEquals(
  "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input: any): typia.IValidation<ToJsonTuple> => {
  const errors = [] as any[];
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is ToJsonTuple => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "function" === typeof input.toJSON &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["toJSON"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
      "function" === typeof input.toJSON &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["toJSON"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
      "function" === typeof input.toJSON &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["toJSON"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
      "function" === typeof input.toJSON &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["toJSON"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return (
      Array.isArray(input) &&
      input.length === 4 &&
      "object" === typeof input[0] &&
      null !== input[0] &&
      $io0(input[0], true) &&
      "object" === typeof input[1] &&
      null !== input[1] &&
      $io1(input[1], true) &&
      "object" === typeof input[2] &&
      null !== input[2] &&
      $io2(input[2], true) &&
      "object" === typeof input[3] &&
      null !== input[3] &&
      $io3(input[3], true)
    );
  };
  if (false === __is(input)) {
    const $report = (typia.createValidateEquals as any).report(errors);
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is ToJsonTuple => {
      const $join = (typia.createValidateEquals as any).join;
      const $vo0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        [
          "function" === typeof input.toJSON ||
            $report(_exceptionable, {
              path: _path + ".toJSON",
              expected: "unknown",
              value: input.toJSON,
            }),
          1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input)
              .map((key: any) => {
                if (["toJSON"].some((prop: any) => key === prop)) return true;
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
          "function" === typeof input.toJSON ||
            $report(_exceptionable, {
              path: _path + ".toJSON",
              expected: "unknown",
              value: input.toJSON,
            }),
          1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input)
              .map((key: any) => {
                if (["toJSON"].some((prop: any) => key === prop)) return true;
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
          "function" === typeof input.toJSON ||
            $report(_exceptionable, {
              path: _path + ".toJSON",
              expected: "unknown",
              value: input.toJSON,
            }),
          1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input)
              .map((key: any) => {
                if (["toJSON"].some((prop: any) => key === prop)) return true;
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
      const $vo3 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        [
          "function" === typeof input.toJSON ||
            $report(_exceptionable, {
              path: _path + ".toJSON",
              expected: "unknown",
              value: input.toJSON,
            }),
          1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input)
              .map((key: any) => {
                if (["toJSON"].some((prop: any) => key === prop)) return true;
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
            expected: "ToJsonTuple",
            value: input,
          })) &&
          (input.length === 4 ||
            $report(true, {
              path: _path + "",
              expected:
                "[ToJsonTuple.IToJson<string>, ToJsonTuple.IToJson<number>, ToJsonTuple.IToJson<boolean>, ToJsonTuple.IObject]",
              value: input,
            })) &&
          [
            ((("object" === typeof input[0] && null !== input[0]) ||
              $report(true, {
                path: _path + "[0]",
                expected: "ToJsonTuple.IToJson<string>",
                value: input[0],
              })) &&
              $vo0(input[0], _path + "[0]", true)) ||
              $report(true, {
                path: _path + "[0]",
                expected: "ToJsonTuple.IToJson<string>",
                value: input[0],
              }),
            ((("object" === typeof input[1] && null !== input[1]) ||
              $report(true, {
                path: _path + "[1]",
                expected: "ToJsonTuple.IToJson<number>",
                value: input[1],
              })) &&
              $vo1(input[1], _path + "[1]", true)) ||
              $report(true, {
                path: _path + "[1]",
                expected: "ToJsonTuple.IToJson<number>",
                value: input[1],
              }),
            ((("object" === typeof input[2] && null !== input[2]) ||
              $report(true, {
                path: _path + "[2]",
                expected: "ToJsonTuple.IToJson<boolean>",
                value: input[2],
              })) &&
              $vo2(input[2], _path + "[2]", true)) ||
              $report(true, {
                path: _path + "[2]",
                expected: "ToJsonTuple.IToJson<boolean>",
                value: input[2],
              }),
            ((("object" === typeof input[3] && null !== input[3]) ||
              $report(true, {
                path: _path + "[3]",
                expected: "ToJsonTuple.IObject",
                value: input[3],
              })) &&
              $vo3(input[3], _path + "[3]", true)) ||
              $report(true, {
                path: _path + "[3]",
                expected: "ToJsonTuple.IObject",
                value: input[3],
              }),
          ].every((flag: boolean) => flag)) ||
        $report(true, {
          path: _path + "",
          expected: "ToJsonTuple",
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
