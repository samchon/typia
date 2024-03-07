import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
export const test_random_ConstantAtomicAbsorbed = _test_random(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): import("typia").Resolved<ConstantAtomicAbsorbed> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: 'Default<"something">',
              kind: "default",
              value: "something",
            },
          ]) ?? (generator?.string ?? $generator.string)(),
        age:
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: "Default<20>",
              kind: "default",
              value: 20,
            },
          ]) ?? (generator?.number ?? $generator.number)(0, 100),
      });
      return $ro0();
    })((ConstantAtomicAbsorbed as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ConstantAtomicAbsorbed => {
    const __is = (input: any): input is ConstantAtomicAbsorbed => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).id &&
        "number" === typeof (input as any).age &&
        Number.isFinite((input as any).age)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantAtomicAbsorbed => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".id",
                expected: '(string & Default<"something">)',
                value: input.id,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.age && Number.isFinite(input.age)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".age",
                expected: "(number & Default<20>)",
                value: input.age,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ConstantAtomicAbsorbed",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ConstantAtomicAbsorbed",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
