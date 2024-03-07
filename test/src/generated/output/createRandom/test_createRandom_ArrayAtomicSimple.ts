import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
export const test_createRandom_ArrayAtomicSimple = _test_random(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ArrayAtomicSimple as any)
      .RANDOM,
  ): import("typia").Resolved<ArrayAtomicSimple> => {
    const $generator = (typia.createRandom as any).generator;
    return [
      (generator?.array ?? $generator.array)(() =>
        (generator?.boolean ?? $generator.boolean)(),
      ),
      (generator?.array ?? $generator.array)(
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ),
      (generator?.array ?? $generator.array)(
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ),
    ];
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ArrayAtomicSimple => {
    const __is = (input: any): input is ArrayAtomicSimple => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        Array.isArray(input[0]) &&
        input[0].every((elem: any) => "boolean" === typeof elem) &&
        Array.isArray(input[1]) &&
        input[1].every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        ) &&
        Array.isArray(input[2]) &&
        input[2].every((elem: any) => "string" === typeof elem)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArrayAtomicSimple => {
        const $guard = (typia.createAssert as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ArrayAtomicSimple",
                value: input,
              },
              errorFactory,
            )) &&
            (input.length === 3 ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "[Array<boolean>, Array<number>, Array<string>]",
                  value: input,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input[0]) ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "Array<boolean>",
                  value: input[0],
                },
                errorFactory,
              )) &&
              input[0].every(
                (elem: any, _index1: number) =>
                  "boolean" === typeof elem ||
                  $guard(
                    true,
                    {
                      path: _path + "[0][" + _index1 + "]",
                      expected: "boolean",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "Array<boolean>",
                  value: input[0],
                },
                errorFactory,
              )) &&
            (((Array.isArray(input[1]) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "Array<number>",
                  value: input[1],
                },
                errorFactory,
              )) &&
              input[1].every(
                (elem: any, _index2: number) =>
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1][" + _index2 + "]",
                      expected: "number",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "Array<number>",
                  value: input[1],
                },
                errorFactory,
              )) &&
            (((Array.isArray(input[2]) ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "Array<string>",
                  value: input[2],
                },
                errorFactory,
              )) &&
              input[2].every(
                (elem: any, _index3: number) =>
                  "string" === typeof elem ||
                  $guard(
                    true,
                    {
                      path: _path + "[2][" + _index3 + "]",
                      expected: "string",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "Array<string>",
                  value: input[2],
                },
                errorFactory,
              ))) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ArrayAtomicSimple",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
