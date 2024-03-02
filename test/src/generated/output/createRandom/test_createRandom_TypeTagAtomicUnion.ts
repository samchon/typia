import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_createRandom_TypeTagAtomicUnion = _test_random(
  "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (TypeTagAtomicUnion as any)
      .RANDOM,
  ): typia.Resolved<TypeTagAtomicUnion> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      value: (generator?.array ?? $generator.array)(() =>
        $ro1(_recursive, _recursive ? 1 + _depth : _depth),
      ),
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
      value: $pick([
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: "MinLength<3>",
              kind: "minLength",
              value: 3,
            },
            {
              name: "MaxLength<7>",
              kind: "maxLength",
              value: 7,
            },
          ]) ??
          (generator?.string ?? $generator.string)(
            (generator?.integer ?? $generator.integer)(3, 7),
          ),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: "Minimum<3>",
              kind: "minimum",
              value: 3,
            },
          ]) ?? (generator?.number ?? $generator.number)(3, 13),
      ])(),
    });
    return $ro0();
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): TypeTagAtomicUnion => {
    const __is = (input: any): input is TypeTagAtomicUnion => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        ("string" === typeof input.value &&
          3 <= input.value.length &&
          input.value.length <= 7) ||
        ("number" === typeof input.value &&
          Number.isFinite(input.value) &&
          3 <= input.value);
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagAtomicUnion => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((Array.isArray(input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "Array<TypeTagAtomicUnion.Type>",
                value: input.value,
              },
              errorFactory,
            )) &&
            input.value.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "TypeTagAtomicUnion.Type",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    elem,
                    _path + ".value[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "TypeTagAtomicUnion.Type",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "Array<TypeTagAtomicUnion.Type>",
              value: input.value,
            },
            errorFactory,
          );
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.value &&
            (3 <= input.value.length ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "string & MinLength<3>",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (input.value.length <= 7 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "string & MaxLength<7>",
                  value: input.value,
                },
                errorFactory,
              ))) ||
          ("number" === typeof input.value &&
            (Number.isFinite(input.value) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "number",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (3 <= input.value ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "number & Minimum<3>",
                  value: input.value,
                },
                errorFactory,
              ))) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected:
                "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
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
                expected: "TypeTagAtomicUnion",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "TypeTagAtomicUnion",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
