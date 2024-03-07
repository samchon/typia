import typia from "typia";
import { _test_functional_validateReturn } from "../../../internal/_test_functional_validateReturn";
import { AtomicUnion } from "../../../structures/AtomicUnion";
export const test_functional_validateReturn_AtomicUnion =
  _test_functional_validateReturn("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      (input: AtomicUnion): import("typia").IValidation<AtomicUnion> => {
        const result = ((input: any): typia.IValidation<AtomicUnion> => {
          const errors = [] as any[];
          const __is = (input: any): input is AtomicUnion => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  null === elem ||
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  "boolean" === typeof elem,
              )
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is AtomicUnion => {
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "AtomicUnion",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        null === elem ||
                        "string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        "boolean" === typeof elem ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected: "(boolean | null | number | string)",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "AtomicUnion",
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
