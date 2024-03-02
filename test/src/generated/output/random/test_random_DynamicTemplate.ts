import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_random_DynamicTemplate = _test_random(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<DynamicTemplate> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => {
        const output = {} as any;
        (generator?.array ?? $generator.array)(
          () =>
            (output[
              `prefix_${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
              }`
            ] =
              (generator?.customs ?? $generator.customs)?.string?.([]) ??
              (generator?.string ?? $generator.string)()),
          (generator?.integer ?? $generator.integer)(0, 3),
        );
        (generator?.array ?? $generator.array)(
          () =>
            (output[
              `${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
              }_postfix`
            ] =
              (generator?.customs ?? $generator.customs)?.string?.([]) ??
              (generator?.string ?? $generator.string)()),
          (generator?.integer ?? $generator.integer)(0, 3),
        );
        (generator?.array ?? $generator.array)(
          () =>
            (output[
              `value_${
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100)
              }`
            ] =
              (generator?.customs ?? $generator.customs)?.number?.([]) ??
              (generator?.number ?? $generator.number)(0, 100)),
          (generator?.integer ?? $generator.integer)(0, 3),
        );
        (generator?.array ?? $generator.array)(
          () =>
            (output[
              `between_${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
              }_and_${
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100)
              }`
            ] = (generator?.boolean ?? $generator.boolean)()),
          (generator?.integer ?? $generator.integer)(0, 3),
        );
        return output;
      };
      return $ro0();
    })((DynamicTemplate as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): DynamicTemplate => {
    const __is = (input: any): input is DynamicTemplate => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
            return "string" === typeof value;
          if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
            return "string" === typeof value;
          if (
            "string" === typeof key &&
            RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)
          )
            return "number" === typeof value && Number.isFinite(value);
          if (
            "string" === typeof key &&
            RegExp(
              /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
            ).test(key)
          )
            return "boolean" === typeof value;
          return true;
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
      ): input is DynamicTemplate => {
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
            if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
              return (
                "string" === typeof value ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "string",
                    value: value,
                  },
                  errorFactory,
                )
              );
            if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
              return (
                "string" === typeof value ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "string",
                    value: value,
                  },
                  errorFactory,
                )
              );
            if (
              "string" === typeof key &&
              RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)
            )
              return (
                ("number" === typeof value && Number.isFinite(value)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "number",
                    value: value,
                  },
                  errorFactory,
                )
              );
            if (
              "string" === typeof key &&
              RegExp(
                /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
              ).test(key)
            )
              return (
                "boolean" === typeof value ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "boolean",
                    value: value,
                  },
                  errorFactory,
                )
              );
            return true;
          });
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "DynamicTemplate",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "DynamicTemplate",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
