import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
export const test_createRandom_DynamicUndefined = _test_random(
  "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (DynamicUndefined as any)
      .RANDOM,
  ): import("typia").Resolved<DynamicUndefined> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => {
      const output = {} as any;
      (generator?.array ?? $generator.array)(
        () =>
          (output[
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
              (generator?.string ?? $generator.string)()
          ] = undefined),
        (generator?.integer ?? $generator.integer)(0, 3),
      );
      return output;
    };
    return $ro0();
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): DynamicUndefined => {
    const __is = (input: any): input is DynamicUndefined => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return null !== value && undefined === value;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicUndefined => {
        const $guard = (typia.createAssert as any).guard;
        const $join = (typia.createAssert as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              (null !== value ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                )) &&
              (undefined === value ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                ))
            );
          });
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "DynamicUndefined",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "DynamicUndefined",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
