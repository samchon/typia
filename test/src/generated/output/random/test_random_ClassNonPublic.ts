import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";
export const test_random_ClassNonPublic = _test_random(
  "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): import("typia").Resolved<ClassNonPublic> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        implicit:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        shown:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      });
      return $ro0();
    })((ClassNonPublic as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ClassNonPublic => {
    const __is = (input: any): input is ClassNonPublic => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).implicit &&
        "string" === typeof (input as any).shown
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ClassNonPublic => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.implicit ||
            $guard(
              _exceptionable,
              {
                path: _path + ".implicit",
                expected: "string",
                value: input.implicit,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.shown ||
            $guard(
              _exceptionable,
              {
                path: _path + ".shown",
                expected: "string",
                value: input.shown,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ClassNonPublic.Accessor",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ClassNonPublic.Accessor",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
