import typia from "typia";

import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_misc_createValidateClone_TupleRestObject =
  _test_misc_validateClone("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    (input: any): typia.IValidation<typia.Resolved<TupleRestObject>> => {
      const validate = (input: any): typia.IValidation<TupleRestObject> => {
        const errors = [] as any[];
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
        if (false === __is(input)) {
          const $report = (typia.misc.createValidateClone as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TupleRestObject => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.value ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "string",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "TupleRestObject",
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
                    expected: "...TupleRestObject.IObject",
                    value: input.slice(2),
                  })) &&
                  input
                    .slice(2)
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(true, {
                            path: _path + "[" + (2 + _index1) + "]",
                            expected: "TupleRestObject.IObject",
                            value: elem,
                          })) &&
                          $vo0(
                            elem,
                            _path + "[" + (2 + _index1) + "]",
                            true,
                          )) ||
                        $report(true, {
                          path: _path + "[" + (2 + _index1) + "]",
                          expected: "TupleRestObject.IObject",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "...TupleRestObject.IObject",
                    value: input.slice(2),
                  }))) ||
              $report(true, {
                path: _path + "",
                expected: "TupleRestObject",
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
      const clone = (
        input: TupleRestObject,
      ): typia.Resolved<TupleRestObject> => {
        const $io0 = (input: any): boolean => "string" === typeof input.value;
        const $cp0 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co0(elem)
              : (elem as any),
          );
        const $co0 = (input: any): any => ({
          value: input.value as any,
        });
        return Array.isArray(input) &&
          "boolean" === typeof input[0] &&
          "number" === typeof input[1] &&
          Array.isArray(input.slice(2)) &&
          input
            .slice(2)
            .every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
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
    },
  );
