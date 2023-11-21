import typia from "../../../../src";
import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_misc_validateClone_TupleRestAtomic = _test_misc_validateClone(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input) =>
  ((input: any): typia.IValidation<typia.Resolved<TupleRestAtomic>> => {
    const validate = (input: any): typia.IValidation<TupleRestAtomic> => {
      const errors = [] as any[];
      const __is = (input: any): input is TupleRestAtomic => {
        return (
          Array.isArray(input) &&
          "boolean" === typeof input[0] &&
          "number" === typeof input[1] &&
          Number.isFinite(input[1]) &&
          Array.isArray(input.slice(2)) &&
          input.slice(2).every((elem: any) => "string" === typeof elem)
        );
      };
      if (false === __is(input)) {
        const $report = (typia.misc.validateClone as any).report(errors);
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is TupleRestAtomic => {
          return (
            ((Array.isArray(input) ||
              $report(true, {
                path: _path + "",
                expected: "TupleRestAtomic",
                value: input,
              })) &&
              [
                "boolean" === typeof input[0] ||
                  $report(true, {
                    path: _path + "[0]",
                    expected: "boolean",
                    value: input[0],
                  }),
                ("number" === typeof input[1] && Number.isFinite(input[1])) ||
                  $report(true, {
                    path: _path + "[1]",
                    expected: "number",
                    value: input[1],
                  }),
              ].every((flag: boolean) => flag) &&
              (((Array.isArray(input.slice(2)) ||
                $report(true, {
                  path: _path + "",
                  expected: "...string",
                  value: input.slice(2),
                })) &&
                input
                  .slice(2)
                  .map(
                    (elem: any, _index1: number) =>
                      "string" === typeof elem ||
                      $report(true, {
                        path: _path + "[" + (2 + _index1) + "]",
                        expected: "string",
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "...string",
                  value: input.slice(2),
                }))) ||
            $report(true, {
              path: _path + "",
              expected: "TupleRestAtomic",
              value: input,
            })
          );
        })(input, "$input", true);
      }
      const success = 0 === errors.length;
      return {
        success,
        errors,
        data: success ? input : undefined,
      } as any;
    };
    const clone = (input: TupleRestAtomic): typia.Resolved<TupleRestAtomic> => {
      const $cp0 = (input: any) => input.map((elem: any) => elem as any);
      return Array.isArray(input) &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        Array.isArray(input.slice(2)) &&
        input.slice(2).every((elem: any) => "string" === typeof elem)
        ? ([
            input[0] as any,
            input[1] as any,
            ...(Array.isArray(input.slice(2))
              ? $cp0(input.slice(2))
              : (input.slice(2) as any)),
          ] as any)
        : (input as any);
    };
    const output = validate(input) as any;
    if (output.success) output.data = clone(input);
    return output;
  })(input),
);
