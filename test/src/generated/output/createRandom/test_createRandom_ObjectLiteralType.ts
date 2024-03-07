import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
export const test_createRandom_ObjectLiteralType = _test_random(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ObjectLiteralType as any)
      .RANDOM,
  ): import("typia").Resolved<ObjectLiteralType> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      id:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      name:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      age:
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
    });
    return $ro0();
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectLiteralType => {
    const __is = (input: any): input is ObjectLiteralType => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).id &&
        "string" === typeof (input as any).name &&
        "number" === typeof (input as any).age &&
        Number.isFinite((input as any).age)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectLiteralType => {
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
                expected: "string",
                value: input.id,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.age && Number.isFinite(input.age)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".age",
                expected: "number",
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
                expected: "__object",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "__object",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
