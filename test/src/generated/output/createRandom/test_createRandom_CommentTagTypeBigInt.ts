import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";
export const test_createRandom_CommentTagTypeBigInt = _test_random(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (CommentTagTypeBigInt as any)
      .RANDOM,
  ): import("typia").Resolved<CommentTagTypeBigInt> => {
    const $generator = (typia.createRandom as any).generator;
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
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): CommentTagTypeBigInt => {
    const __is = (input: any): input is CommentTagTypeBigInt => {
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
      ): input is CommentTagTypeBigInt => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("bigint" === typeof input.in64 ||
            $guard(
              _exceptionable,
              {
                path: _path + ".in64",
                expected: "bigint",
                value: input.in64,
              },
              errorFactory,
            )) &&
          (("bigint" === typeof input.uint64 &&
            (BigInt(0) <= input.uint64 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".uint64",
                  expected: 'bigint & Type<"uint64">',
                  value: input.uint64,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".uint64",
                expected: '(bigint & Type<"uint64">)',
                value: input.uint64,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "CommentTagTypeBigInt",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "CommentTagTypeBigInt",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
