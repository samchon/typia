import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_createRandom_AtomicClass = _test_random(
  "AtomicClass",
)<AtomicClass>(AtomicClass)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (AtomicClass as any).RANDOM,
  ): typia.Resolved<AtomicClass> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    return [
      (generator?.boolean ?? $generator.boolean)(),
      $pick([
        () => false,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      $pick([
        () => (generator?.boolean ?? $generator.boolean)(),
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      $pick([
        () => 1,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      $pick([
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      $pick([
        () => "characters",
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      $pick([
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
    ];
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): AtomicClass => {
    const __is = (input: any): input is AtomicClass => {
      return (
        Array.isArray(input) &&
        input.length === 9 &&
        ("boolean" === typeof input[0] || input[0] instanceof Boolean) &&
        null !== input[1] &&
        undefined !== input[1] &&
        ("boolean" === typeof input[1] || input[1] instanceof Boolean) &&
        null !== input[2] &&
        undefined !== input[2] &&
        ("boolean" === typeof input[2] || input[2] instanceof Boolean) &&
        ("number" === typeof input[3] || input[3] instanceof Number) &&
        null !== input[4] &&
        undefined !== input[4] &&
        ("number" === typeof input[4] || input[4] instanceof Number) &&
        null !== input[5] &&
        undefined !== input[5] &&
        ("number" === typeof input[5] || input[5] instanceof Number) &&
        ("string" === typeof input[6] || input[6] instanceof String) &&
        null !== input[7] &&
        undefined !== input[7] &&
        ("string" === typeof input[7] || input[7] instanceof String) &&
        null !== input[8] &&
        undefined !== input[8] &&
        ("string" === typeof input[8] || input[8] instanceof String)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is AtomicClass => {
        const $guard = (typia.createAssert as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "AtomicClass",
                value: input,
              },
              errorFactory,
            )) &&
            (input.length === 9 ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected:
                    '[Boolean, (Boolean | false), (Boolean | boolean), Number, (1 | Number), (Number | number), String, ("characters" | String), (String | string)]',
                  value: input,
                },
                errorFactory,
              )) &&
            ("boolean" === typeof input[0] ||
              input[0] instanceof Boolean ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "Boolean",
                  value: input[0],
                },
                errorFactory,
              )) &&
            (null !== input[1] ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "(Boolean | false)",
                  value: input[1],
                },
                errorFactory,
              )) &&
            (undefined !== input[1] ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "(Boolean | false)",
                  value: input[1],
                },
                errorFactory,
              )) &&
            ("boolean" === typeof input[1] ||
              input[1] instanceof Boolean ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "(Boolean | false)",
                  value: input[1],
                },
                errorFactory,
              )) &&
            (null !== input[2] ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "(Boolean | boolean)",
                  value: input[2],
                },
                errorFactory,
              )) &&
            (undefined !== input[2] ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "(Boolean | boolean)",
                  value: input[2],
                },
                errorFactory,
              )) &&
            ("boolean" === typeof input[2] ||
              input[2] instanceof Boolean ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "(Boolean | boolean)",
                  value: input[2],
                },
                errorFactory,
              )) &&
            ("number" === typeof input[3] ||
              input[3] instanceof Number ||
              $guard(
                true,
                {
                  path: _path + "[3]",
                  expected: "Number",
                  value: input[3],
                },
                errorFactory,
              )) &&
            (null !== input[4] ||
              $guard(
                true,
                {
                  path: _path + "[4]",
                  expected: "(1 | Number)",
                  value: input[4],
                },
                errorFactory,
              )) &&
            (undefined !== input[4] ||
              $guard(
                true,
                {
                  path: _path + "[4]",
                  expected: "(1 | Number)",
                  value: input[4],
                },
                errorFactory,
              )) &&
            ("number" === typeof input[4] ||
              input[4] instanceof Number ||
              $guard(
                true,
                {
                  path: _path + "[4]",
                  expected: "(1 | Number)",
                  value: input[4],
                },
                errorFactory,
              )) &&
            (null !== input[5] ||
              $guard(
                true,
                {
                  path: _path + "[5]",
                  expected: "(Number | number)",
                  value: input[5],
                },
                errorFactory,
              )) &&
            (undefined !== input[5] ||
              $guard(
                true,
                {
                  path: _path + "[5]",
                  expected: "(Number | number)",
                  value: input[5],
                },
                errorFactory,
              )) &&
            ("number" === typeof input[5] ||
              input[5] instanceof Number ||
              $guard(
                true,
                {
                  path: _path + "[5]",
                  expected: "(Number | number)",
                  value: input[5],
                },
                errorFactory,
              )) &&
            ("string" === typeof input[6] ||
              input[6] instanceof String ||
              $guard(
                true,
                {
                  path: _path + "[6]",
                  expected: "String",
                  value: input[6],
                },
                errorFactory,
              )) &&
            (null !== input[7] ||
              $guard(
                true,
                {
                  path: _path + "[7]",
                  expected: '("characters" | String)',
                  value: input[7],
                },
                errorFactory,
              )) &&
            (undefined !== input[7] ||
              $guard(
                true,
                {
                  path: _path + "[7]",
                  expected: '("characters" | String)',
                  value: input[7],
                },
                errorFactory,
              )) &&
            ("string" === typeof input[7] ||
              input[7] instanceof String ||
              $guard(
                true,
                {
                  path: _path + "[7]",
                  expected: '("characters" | String)',
                  value: input[7],
                },
                errorFactory,
              )) &&
            (null !== input[8] ||
              $guard(
                true,
                {
                  path: _path + "[8]",
                  expected: "(String | string)",
                  value: input[8],
                },
                errorFactory,
              )) &&
            (undefined !== input[8] ||
              $guard(
                true,
                {
                  path: _path + "[8]",
                  expected: "(String | string)",
                  value: input[8],
                },
                errorFactory,
              )) &&
            ("string" === typeof input[8] ||
              input[8] instanceof String ||
              $guard(
                true,
                {
                  path: _path + "[8]",
                  expected: "(String | string)",
                  value: input[8],
                },
                errorFactory,
              ))) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "AtomicClass",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
