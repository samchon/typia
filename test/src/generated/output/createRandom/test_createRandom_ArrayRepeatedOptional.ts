import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ArrayRepeatedOptional } from "../../../structures/ArrayRepeatedOptional";

export const test_createRandom_ArrayRepeatedOptional = _test_random(
  "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(ArrayRepeatedOptional)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ArrayRepeatedOptional as any)
      .RANDOM,
  ): typia.Resolved<ArrayRepeatedOptional> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ra0 = (
      length: number,
      _recursive: boolean = true,
      _depth: number = 0,
    ): any =>
      5 >= _depth
        ? (generator?.array ?? $generator.array)(
            () =>
              $pick([
                () => undefined,
                () =>
                  (generator?.customs ?? $generator.customs)?.string?.([]) ??
                  (generator?.string ?? $generator.string)(),
                () =>
                  (generator?.customs ?? $generator.customs)?.number?.([]) ??
                  (generator?.number ?? $generator.number)(0, 100),
                () =>
                  $ra0(
                    generator?.length ?? $generator.length,
                    true,
                    1 + _depth,
                  ),
              ])(),
            length,
          )
        : [];
    return $pick([
      () => undefined,
      () =>
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      () =>
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      () => $ra0(generator?.length ?? $generator.length, true, 0),
    ])();
  },
  assert: (
    input: any,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): ArrayRepeatedOptional => {
    const $guard = (typia.createAssert as any).guard(errorFactory);
    const __is = (input: any): input is ArrayRepeatedOptional => {
      const $ia0 = (input: any): any =>
        input.every(
          (elem: any) =>
            null !== elem &&
            (undefined === elem ||
              "string" === typeof elem ||
              ("number" === typeof elem && Number.isFinite(elem)) ||
              (Array.isArray(elem) && ($ia0(elem) || false))),
        );
      return (
        null !== input &&
        (undefined === input ||
          "string" === typeof input ||
          ("number" === typeof input && Number.isFinite(input)) ||
          (Array.isArray(input) && ($ia0(input) || false)))
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArrayRepeatedOptional => {
        const $aa0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          input.every(
            (elem: any, _index1: number) =>
              (null !== elem ||
                $guard(_exceptionable, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                  value: elem,
                })) &&
              (undefined === elem ||
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                ((Array.isArray(elem) ||
                  $guard(_exceptionable, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                    value: elem,
                  })) &&
                  ($aa0(
                    elem,
                    _path + "[" + _index1 + "]",
                    true && _exceptionable,
                  ) ||
                    $guard(_exceptionable, {
                      path: _path + "[" + _index1 + "]",
                      expected: "Array<ArrayRepeatedOptional>",
                      value: elem,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                  value: elem,
                })),
          );
        return (
          (null !== input ||
            $guard(true, {
              path: _path + "",
              expected:
                "(Array<ArrayRepeatedOptional> | number | string | undefined)",
              value: input,
            })) &&
          (undefined === input ||
            "string" === typeof input ||
            ("number" === typeof input && Number.isFinite(input)) ||
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected:
                  "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                value: input,
              })) &&
              ($aa0(input, _path + "", true && _exceptionable) ||
                $guard(_exceptionable, {
                  path: _path + "",
                  expected: "Array<ArrayRepeatedOptional>",
                  value: input,
                }))) ||
            $guard(true, {
              path: _path + "",
              expected:
                "(Array<ArrayRepeatedOptional> | number | string | undefined)",
              value: input,
            }))
        );
      })(input, "$input", true);
    return input;
  },
});
