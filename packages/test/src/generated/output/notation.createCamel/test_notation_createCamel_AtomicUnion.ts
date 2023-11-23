import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_notation_createValidateCamel_AtomicUnion =
  _test_notation_validateGeneral("AtomicUnion")<AtomicUnion>(AtomicUnion)<
    typia.CamelCase<AtomicUnion>
  >({
    convert: (input: any): typia.IValidation<typia.CamelCase<AtomicUnion>> => {
      const validate = (input: any): typia.IValidation<AtomicUnion> => {
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
          const $report = (typia.notations.createValidateCamel as any).report(
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
      };
      const general = (input: AtomicUnion): typia.CamelCase<AtomicUnion> => {
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        return Array.isArray(input) ? $cp0(input) : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (input: any): typia.CamelCase<AtomicUnion> => {
      const __is = (input: any): input is typia.CamelCase<AtomicUnion> => {
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
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<AtomicUnion> => {
          const $guard = (typia.createAssert as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "AtomicUnion",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  null === elem ||
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  "boolean" === typeof elem ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "(boolean | null | number | string)",
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "AtomicUnion",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
