import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_createRandom_ArrayRepeatedRequired = _test_random(
  "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(ArrayRepeatedRequired)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ArrayRepeatedRequired as any)
      .RANDOM,
  ): typia.Resolved<ArrayRepeatedRequired> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $generator = require("typia/lib/functional/$generator").$generator;
    const $ra0 = (
      length: number,
      _recursive: boolean = true,
      _depth: number = 0,
    ): any =>
      5 >= _depth
        ? (generator?.array ?? $generator.array)(
            () =>
              (generator?.pick ?? $generator.pick)([
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
    return (generator?.pick ?? $generator.pick)([
      () =>
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      () =>
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      () => $ra0(generator?.length ?? $generator.length, true, 0),
    ])();
  },
  assert: (input: any): ArrayRepeatedRequired => {
    const __is = (input: any): input is ArrayRepeatedRequired => {
      const $ia0 = (input: any): any =>
        input.every(
          (elem: any) =>
            null !== elem &&
            undefined !== elem &&
            ("string" === typeof elem ||
              ("number" === typeof elem && Number.isFinite(elem)) ||
              (Array.isArray(elem) && ($ia0(elem) || false))),
        );
      return (
        null !== input &&
        undefined !== input &&
        ("string" === typeof input ||
          ("number" === typeof input && Number.isFinite(input)) ||
          (Array.isArray(input) && ($ia0(input) || false)))
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArrayRepeatedRequired => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssert",
        );
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
                  expected: "(Array<ArrayRepeatedRequired> | number | string)",
                  value: elem,
                })) &&
              (undefined !== elem ||
                $guard(_exceptionable, {
                  path: _path + "[" + _index1 + "]",
                  expected: "(Array<ArrayRepeatedRequired> | number | string)",
                  value: elem,
                })) &&
              ("string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                ((Array.isArray(elem) ||
                  $guard(_exceptionable, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<ArrayRepeatedRequired> | number | string)",
                    value: elem,
                  })) &&
                  ($aa0(
                    elem,
                    _path + "[" + _index1 + "]",
                    true && _exceptionable,
                  ) ||
                    $guard(_exceptionable, {
                      path: _path + "[" + _index1 + "]",
                      expected: "Array<ArrayRepeatedRequired>",
                      value: elem,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + "[" + _index1 + "]",
                  expected: "(Array<ArrayRepeatedRequired> | number | string)",
                  value: elem,
                })),
          );
        return (
          (null !== input ||
            $guard(true, {
              path: _path + "",
              expected: "(Array<ArrayRepeatedRequired> | number | string)",
              value: input,
            })) &&
          (undefined !== input ||
            $guard(true, {
              path: _path + "",
              expected: "(Array<ArrayRepeatedRequired> | number | string)",
              value: input,
            })) &&
          ("string" === typeof input ||
            ("number" === typeof input && Number.isFinite(input)) ||
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input,
              })) &&
              ($aa0(input, _path + "", true && _exceptionable) ||
                $guard(_exceptionable, {
                  path: _path + "",
                  expected: "Array<ArrayRepeatedRequired>",
                  value: input,
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: "(Array<ArrayRepeatedRequired> | number | string)",
              value: input,
            }))
        );
      })(input, "$input", true);
    return input;
  },
});
