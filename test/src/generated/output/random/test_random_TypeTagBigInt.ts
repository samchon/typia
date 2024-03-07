import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";
export const test_random_TypeTagBigInt = _test_random(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): import("typia").Resolved<TypeTagBigInt> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value:
          (generator?.customs ?? $generator.customs)?.bigint?.([]) ??
          (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(100)),
        ranged:
          (generator?.customs ?? $generator.customs)?.bigint?.([
            {
              name: "Minimum<0n>",
              kind: "minimum",
              value: BigInt(0),
            },
            {
              name: "Maximum<100n>",
              kind: "maximum",
              value: BigInt(100),
            },
          ]) ??
          (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(100)),
        minimum:
          (generator?.customs ?? $generator.customs)?.bigint?.([
            {
              name: "Minimum<0n>",
              kind: "minimum",
              value: BigInt(0),
            },
          ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(10)),
        maximum:
          (generator?.customs ?? $generator.customs)?.bigint?.([
            {
              name: "Maximum<100n>",
              kind: "maximum",
              value: BigInt(100),
            },
          ]) ??
          (generator?.bigint ?? $generator.bigint)(BigInt(90), BigInt(100)),
        multipleOf:
          (generator?.customs ?? $generator.customs)?.bigint?.([
            {
              name: "MultipleOf<3n>",
              kind: "multipleOf",
              value: BigInt(3),
            },
          ]) ??
          BigInt(3) *
            (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(10)),
      });
      return $ro0();
    })((TypeTagBigInt as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): TypeTagBigInt => {
    const __is = (input: any): input is TypeTagBigInt => {
      return (
        "object" === typeof input &&
        null !== input &&
        "bigint" === typeof (input as any).value &&
        "bigint" === typeof (input as any).ranged &&
        BigInt(0) <= (input as any).ranged &&
        (input as any).ranged <= BigInt(100) &&
        "bigint" === typeof (input as any).minimum &&
        BigInt(0) <= (input as any).minimum &&
        "bigint" === typeof (input as any).maximum &&
        (input as any).maximum <= BigInt(100) &&
        "bigint" === typeof (input as any).multipleOf &&
        (input as any).multipleOf % BigInt(3) === BigInt(0)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagBigInt => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("bigint" === typeof input.value ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "bigint",
                value: input.value,
              },
              errorFactory,
            )) &&
          (("bigint" === typeof input.ranged &&
            (BigInt(0) <= input.ranged ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".ranged",
                  expected: "bigint & Minimum<0n>",
                  value: input.ranged,
                },
                errorFactory,
              )) &&
            (input.ranged <= BigInt(100) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".ranged",
                  expected: "bigint & Maximum<100n>",
                  value: input.ranged,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".ranged",
                expected: "(bigint & Minimum<0n> & Maximum<100n>)",
                value: input.ranged,
              },
              errorFactory,
            )) &&
          (("bigint" === typeof input.minimum &&
            (BigInt(0) <= input.minimum ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".minimum",
                  expected: "bigint & Minimum<0n>",
                  value: input.minimum,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minimum",
                expected: "(bigint & Minimum<0n>)",
                value: input.minimum,
              },
              errorFactory,
            )) &&
          (("bigint" === typeof input.maximum &&
            (input.maximum <= BigInt(100) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".maximum",
                  expected: "bigint & Maximum<100n>",
                  value: input.maximum,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maximum",
                expected: "(bigint & Maximum<100n>)",
                value: input.maximum,
              },
              errorFactory,
            )) &&
          (("bigint" === typeof input.multipleOf &&
            (input.multipleOf % BigInt(3) === BigInt(0) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".multipleOf",
                  expected: "bigint & MultipleOf<3n>",
                  value: input.multipleOf,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".multipleOf",
                expected: "(bigint & MultipleOf<3n>)",
                value: input.multipleOf,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "TypeTagBigInt",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "TypeTagBigInt",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
