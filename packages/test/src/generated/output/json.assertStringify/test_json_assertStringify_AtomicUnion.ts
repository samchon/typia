import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_assertStringify_AtomicUnion = _test_json_assertStringify(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  ((input: any): string => {
    const assert = (input: any): AtomicUnion => {
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
          const $guard = (typia.json.assertStringify as any).guard;
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
    };
    const stringify = (input: AtomicUnion): string => {
      const $string = (typia.json.assertStringify as any).string;
      const $number = (typia.json.assertStringify as any).number;
      const $throws = (typia.json.assertStringify as any).throws;
      return `[${input
        .map((elem: any) =>
          null !== elem
            ? (() => {
                if ("string" === typeof elem) return $string(elem);
                if ("number" === typeof elem) return $number(elem);
                if ("boolean" === typeof elem) return elem;
                $throws({
                  expected: "(boolean | null | number | string)",
                  value: elem,
                });
              })()
            : "null",
        )
        .join(",")}]`;
    };
    return stringify(assert(input));
  })(input),
);
