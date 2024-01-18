import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_createAssertGuard_AtomicUnion = _test_assertGuard(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input: any): asserts input is AtomicUnion => {
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
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is AtomicUnion => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $guard = require("typia/lib/functional/$guard").$guard(
        "typia.createAssertGuard",
      );
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
});
