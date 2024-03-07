import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
export const test_createRandom_ArrayRepeatedRequired = _test_random(
  "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(ArrayRepeatedRequired)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ArrayRepeatedRequired as any)
      .RANDOM,
  ): import("typia").Resolved<ArrayRepeatedRequired> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ra0 = (
      length: number,
      _recursive: boolean = true,
      _depth: number = 0,
    ): any =>
      5 >= _depth
        ? (generator?.array ?? $generator.array)(
            () =>
              $pick([
                () =>
                  (generator?.customs ?? $generator.customs)?.string?.([]) ??
                  (generator?.string ?? $generator.string)(),
                () =>
                  (generator?.customs ?? $generator.customs)?.number?.([]) ??
                  (generator?.number ?? $generator.number)(0, 100),
                () =>
                  $ra0(
                    generator?.length ?? $generator.length,
                    true,
                    1 + _depth,
                  ),
              ])(),
            length,
          )
        : [];
    return $pick([
      () =>
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      () =>
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      () => $ra0(generator?.length ?? $generator.length, true, 0),
    ])();
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ArrayRepeatedRequired => {
    const __is = (input: any): input is ArrayRepeatedRequired => {
      const $ia0 = (input: any): any =>
        input.every(
          (elem: any) =>
            null !== elem &&
            undefined !== elem &&
            ("string" === typeof elem ||
              ("number" === typeof elem && Number.isFinite(elem)) ||
              (Array.isArray(elem) && ($ia0(elem) || false))),
        );
      return (
        null !== input &&
        undefined !== input &&
        ("string" === typeof input ||
          ("number" === typeof input && Number.isFinite(input)) ||
          (Array.isArray(input) && ($ia0(input) || false)))
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArrayRepeatedRequired => {
        const $guard = (typia.createAssert as any).guard;
        const $aa0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          input.every(
            (elem: any, _index1: number) =>
              (null !== elem ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<ArrayRepeatedRequired> | number | string)",
                    value: elem,
                  },
                  errorFactory,
                )) &&
              (undefined !== elem ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<ArrayRepeatedRequired> | number | string)",
                    value: elem,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                ((Array.isArray(elem) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  ($aa0(
                    elem,
                    _path + "[" + _index1 + "]",
                    true && _exceptionable,
                  ) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "Array<ArrayRepeatedRequired>",
                        value: elem,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<ArrayRepeatedRequired> | number | string)",
                    value: elem,
                  },
                  errorFactory,
                )),
          );
        return (
          (null !== input ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input,
              },
              errorFactory,
            )) &&
          (undefined !== input ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input,
              },
              errorFactory,
            )) &&
          ("string" === typeof input ||
            ("number" === typeof input && Number.isFinite(input)) ||
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "(Array<ArrayRepeatedRequired> | number | string)",
                  value: input,
                },
                errorFactory,
              )) &&
              ($aa0(input, _path + "", true && _exceptionable) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + "",
                    expected: "Array<ArrayRepeatedRequired>",
                    value: input,
                  },
                  errorFactory,
                ))) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input,
              },
              errorFactory,
            ))
        );
      })(input, "$input", true);
    return input;
  },
});
