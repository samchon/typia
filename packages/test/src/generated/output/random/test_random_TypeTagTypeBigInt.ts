import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_random_TypeTagTypeBigInt = _test_random(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<TypeTagTypeBigInt> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        in64:
          (generator?.customs ?? $generator.customs)?.bigint?.([]) ??
          (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(100)),
        uint64:
          (generator?.customs ?? $generator.customs)?.bigint?.([
            {
              name: 'Type<"uint64">',
              kind: "type",
              value: "uint64",
            },
          ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(10)),
      });
      return $ro0();
    })((TypeTagTypeBigInt as any).RANDOM),
  assert: (input: any): TypeTagTypeBigInt => {
    const __is = (input: any): input is TypeTagTypeBigInt => {
      return (
        "object" === typeof input &&
        null !== input &&
        "bigint" === typeof (input as any).in64 &&
        "bigint" === typeof (input as any).uint64 &&
        BigInt(0) <= (input as any).uint64
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagTypeBigInt => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("bigint" === typeof input.in64 ||
            $guard(_exceptionable, {
              path: _path + ".in64",
              expected: "bigint",
              value: input.in64,
            })) &&
          (("bigint" === typeof input.uint64 &&
            (BigInt(0) <= input.uint64 ||
              $guard(_exceptionable, {
                path: _path + ".uint64",
                expected: 'bigint & Type<"uint64">',
                value: input.uint64,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint64",
              expected: '(bigint & Type<"uint64">)',
              value: input.uint64,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagTypeBigInt",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "TypeTagTypeBigInt",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
