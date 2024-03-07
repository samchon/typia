import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { TupleRestObject } from "../../../structures/TupleRestObject";
export const test_random_TupleRestObject = _test_random(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): import("typia").Resolved<TupleRestObject> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      });
      return [
        (generator?.boolean ?? $generator.boolean)(),
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        $ro0(),
      ];
    })((TupleRestObject as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): TupleRestObject => {
    const __is = (input: any): input is TupleRestObject => {
      const $io0 = (input: any): boolean => "string" === typeof input.value;
      return (
        Array.isArray(input) &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        Number.isFinite(input[1]) &&
        Array.isArray(input.slice(2)) &&
        input
          .slice(2)
          .every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TupleRestObject => {
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
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "TupleRestObject",
                value: input,
              },
              errorFactory,
            )) &&
            ("boolean" === typeof input[0] ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "boolean",
                  value: input[0],
                },
                errorFactory,
              )) &&
            (("number" === typeof input[1] && Number.isFinite(input[1])) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "number",
                  value: input[1],
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.slice(2)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "...TupleRestObject.IObject",
                  value: input.slice(2),
                },
                errorFactory,
              )) &&
              input.slice(2).every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + (2 + _index1) + "]",
                        expected: "TupleRestObject.IObject",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao0(elem, _path + "[" + (2 + _index1) + "]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + (2 + _index1) + "]",
                      expected: "TupleRestObject.IObject",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "...TupleRestObject.IObject",
                  value: input.slice(2),
                },
                errorFactory,
              ))) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "TupleRestObject",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
