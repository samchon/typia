import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_random_ObjectGenericAlias = _test_random(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ObjectGenericAlias> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      });
      return $ro0();
    })((ObjectGenericAlias as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectGenericAlias => {
    const __is = (input: any): input is ObjectGenericAlias => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).value
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectGenericAlias => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "string" === typeof input.value ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "string",
              value: input.value,
            },
            errorFactory,
          );
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectGenericAlias.Alias",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectGenericAlias.Alias",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
