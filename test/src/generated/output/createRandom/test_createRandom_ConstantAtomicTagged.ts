import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_createRandom_ConstantAtomicTagged = _test_random(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ConstantAtomicTagged as any)
      .RANDOM,
  ): import("typia").Resolved<ConstantAtomicTagged> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      id: $pick([
        () => "latest",
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: 'Format<"uuid">',
              kind: "format",
              value: "uuid",
            },
          ]) ?? (generator?.uuid ?? $generator.uuid)(),
      ])(),
      age: $pick([
        () => -1,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"uint32">',
              kind: "type",
              value: "uint32",
            },
            {
              name: "Maximum<100>",
              kind: "maximum",
              value: 100,
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      ])(),
    });
    return $ro0();
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ConstantAtomicTagged => {
    const __is = (input: any): input is ConstantAtomicTagged => {
      const $io0 = (input: any): boolean =>
        ("latest" === input.id ||
          ("string" === typeof input.id &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ))) &&
        (-1 === input.age ||
          ("number" === typeof input.age &&
            Math.floor(input.age) === input.age &&
            0 <= input.age &&
            input.age <= 4294967295 &&
            input.age <= 100));
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantAtomicTagged => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("latest" === input.id ||
            ("string" === typeof input.id &&
              (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: 'string & Format<"uuid">',
                    value: input.id,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".id",
                expected: '("latest" | (string & Format<"uuid">))',
                value: input.id,
              },
              errorFactory,
            )) &&
          (-1 === input.age ||
            ("number" === typeof input.age &&
              ((Math.floor(input.age) === input.age &&
                0 <= input.age &&
                input.age <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".age",
                    expected: 'number & Type<"uint32">',
                    value: input.age,
                  },
                  errorFactory,
                )) &&
              (input.age <= 100 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".age",
                    expected: "number & Maximum<100>",
                    value: input.age,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".age",
                expected: '((number & Type<"uint32"> & Maximum<100>) | -1)',
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
                expected: "ConstantAtomicTagged",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ConstantAtomicTagged",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
