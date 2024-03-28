import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_random_ArrayAny = _test_random("ArrayAny")<ArrayAny>(
  ArrayAny,
)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): import("typia").Resolved<ArrayAny> => {
      const $generator = (typia.random as any).generator;
      const $pick = (typia.random as any).pick;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        anys: (generator?.array ?? $generator.array)(() => "any type used..."),
        undefindable1: $pick([
          () => undefined,
          () =>
            (generator?.array ?? $generator.array)(() => "any type used..."),
        ])(),
        undefindable2: $pick([
          () => undefined,
          () =>
            (generator?.array ?? $generator.array)(() => "any type used..."),
        ])(),
        nullables1: $pick([
          () => null,
          () =>
            (generator?.array ?? $generator.array)(() => "any type used..."),
        ])(),
        nullables2: $pick([
          () => null,
          () =>
            (generator?.array ?? $generator.array)(() => "any type used..."),
        ])(),
        both1: $pick([
          () => undefined,
          () => null,
          () =>
            (generator?.array ?? $generator.array)(() => "any type used..."),
        ])(),
        both2: $pick([
          () => undefined,
          () => null,
          () =>
            (generator?.array ?? $generator.array)(() => "any type used..."),
        ])(),
        both3: $pick([
          () => undefined,
          () => null,
          () =>
            (generator?.array ?? $generator.array)(() => "any type used..."),
        ])(),
        union: (generator?.array ?? $generator.array)(() => "any type used..."),
      });
      return $ro0();
    })((ArrayAny as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ArrayAny => {
    const __is = (input: any): input is ArrayAny => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.anys) &&
        (undefined === input.undefindable1 ||
          Array.isArray(input.undefindable1)) &&
        (undefined === input.undefindable2 ||
          Array.isArray(input.undefindable2)) &&
        (null === input.nullables1 || Array.isArray(input.nullables1)) &&
        (null === input.nullables2 || Array.isArray(input.nullables2)) &&
        (null === input.both1 ||
          undefined === input.both1 ||
          Array.isArray(input.both1)) &&
        (null === input.both2 ||
          undefined === input.both2 ||
          Array.isArray(input.both2)) &&
        (null === input.both3 ||
          undefined === input.both3 ||
          Array.isArray(input.both3)) &&
        Array.isArray(input.union);
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArrayAny => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (Array.isArray(input.anys) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".anys",
                expected: "Array<any>",
                value: input.anys,
              },
              errorFactory,
            )) &&
          (undefined === input.undefindable1 ||
            Array.isArray(input.undefindable1) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".undefindable1",
                expected: "(Array<any> | undefined)",
                value: input.undefindable1,
              },
              errorFactory,
            )) &&
          (undefined === input.undefindable2 ||
            Array.isArray(input.undefindable2) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".undefindable2",
                expected: "(Array<any> | undefined)",
                value: input.undefindable2,
              },
              errorFactory,
            )) &&
          (null === input.nullables1 ||
            Array.isArray(input.nullables1) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullables1",
                expected: "(Array<any> | null)",
                value: input.nullables1,
              },
              errorFactory,
            )) &&
          (null === input.nullables2 ||
            Array.isArray(input.nullables2) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullables2",
                expected: "(Array<any> | null)",
                value: input.nullables2,
              },
              errorFactory,
            )) &&
          (null === input.both1 ||
            undefined === input.both1 ||
            Array.isArray(input.both1) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".both1",
                expected: "(Array<any> | null | undefined)",
                value: input.both1,
              },
              errorFactory,
            )) &&
          (null === input.both2 ||
            undefined === input.both2 ||
            Array.isArray(input.both2) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".both2",
                expected: "(Array<any> | null | undefined)",
                value: input.both2,
              },
              errorFactory,
            )) &&
          (null === input.both3 ||
            undefined === input.both3 ||
            Array.isArray(input.both3) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".both3",
                expected: "(Array<any> | null | undefined)",
                value: input.both3,
              },
              errorFactory,
            )) &&
          (Array.isArray(input.union) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".union",
                expected: "Array<any>",
                value: input.union,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ArrayAny",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ArrayAny",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
