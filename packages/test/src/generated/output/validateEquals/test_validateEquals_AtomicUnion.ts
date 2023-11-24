import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_validateEquals_AtomicUnion = _test_validateEquals(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  ((input: any): typia.IValidation<AtomicUnion> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is AtomicUnion => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any, _index1: number) =>
            null === elem ||
            "string" === typeof elem ||
            ("number" === typeof elem && Number.isFinite(elem)) ||
            "boolean" === typeof elem,
        )
      );
    };
    if (false === __is(input)) {
      const $report = (typia.validateEquals as any).report(errors);
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
  })(input),
);
