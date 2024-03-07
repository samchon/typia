import typia from "typia";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";
export const test_validateEquals_TypeTagObjectUnion = _test_validateEquals(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
  ((input: any): typia.IValidation<TypeTagObjectUnion> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is TypeTagObjectUnion => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.value &&
        Number.isFinite(input.value) &&
        3 <= input.value &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.value &&
        3 <= input.value.length &&
        input.value.length <= 7 &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $iu0 = (input: any, _exceptionable: boolean = true): any =>
        (() => {
          if (
            "string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7
          )
            return $io1(input, true && _exceptionable);
          else if (
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            3 <= input.value
          )
            return $io0(input, true && _exceptionable);
          else return false;
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any, _index1: number) =>
            "object" === typeof elem && null !== elem && $iu0(elem, true),
        )
      );
    };
    if (false === __is(input)) {
      const $report = (typia.validateEquals as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagObjectUnion => {
        const $join = (typia.validateEquals as any).join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.value &&
              (Number.isFinite(input.value) ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "number",
                  value: input.value,
                })) &&
              (3 <= input.value ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "number & Minimum<3>",
                  value: input.value,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "(number & Minimum<3>)",
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
            ("string" === typeof input.value &&
              (3 <= input.value.length ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MinLength<3>",
                  value: input.value,
                })) &&
              (input.value.length <= 7 ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MaxLength<7>",
                  value: input.value,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "(string & MinLength<3> & MaxLength<7>)",
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
        const $vu0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (
              "string" === typeof input.value &&
              (3 <= input.value.length ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MinLength<3>",
                  value: input.value,
                })) &&
              (input.value.length <= 7 ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MaxLength<7>",
                  value: input.value,
                }))
            )
              return $vo1(input, _path, true && _exceptionable);
            else if (
              "number" === typeof input.value &&
              (3 <= input.value ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "number & Minimum<3>",
                  value: input.value,
                }))
            )
              return $vo0(input, _path, true && _exceptionable);
            else
              return $report(_exceptionable, {
                path: _path,
                expected:
                  "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                value: input,
              });
          })();
        return (
          ((Array.isArray(input) ||
            $report(true, {
              path: _path + "",
              expected: "TypeTagObjectUnion",
              value: input,
            })) &&
            input
              .map(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $report(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                      value: elem,
                    })) &&
                    $vu0(elem, _path + "[" + _index1 + "]", true)) ||
                  $report(true, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                    value: elem,
                  }),
              )
              .every((flag: boolean) => flag)) ||
          $report(true, {
            path: _path + "",
            expected: "TypeTagObjectUnion",
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
