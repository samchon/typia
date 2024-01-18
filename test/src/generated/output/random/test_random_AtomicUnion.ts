import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_random_AtomicUnion = _test_random("AtomicUnion")<AtomicUnion>(
  AtomicUnion,
)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<AtomicUnion> => {
      const $generator = require("typia/lib/functional/$generator").$generator;
      return (generator?.array ?? $generator.array)(() =>
        (generator?.pick ?? $generator.pick)([
          () => null,
          () =>
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
            (generator?.string ?? $generator.string)(),
          () =>
            (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
          () => (generator?.boolean ?? $generator.boolean)(),
        ])(),
      );
    })((AtomicUnion as any).RANDOM),
  assert: (input: any): AtomicUnion => {
    const __is = (input: any): input is AtomicUnion => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            null === elem ||
            "string" === typeof elem ||
            ("number" === typeof elem && Number.isFinite(elem)) ||
            "boolean" === typeof elem,
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is AtomicUnion => {
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssert",
        );
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "AtomicUnion",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                null === elem ||
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                "boolean" === typeof elem ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected: "(boolean | null | number | string)",
                  value: elem,
                }),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "AtomicUnion",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
