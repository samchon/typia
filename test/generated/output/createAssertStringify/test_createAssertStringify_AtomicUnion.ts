import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_AtomicUnion = _test_assertStringify(
    "AtomicUnion",
    AtomicUnion.generate,
    (input: any): string => {
        const assert = (input: any): AtomicUnion => {
            const $guard = (typia.createAssertStringify as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is AtomicUnion => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "Array<(boolean | null | number | string)>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            "boolean" === typeof elem ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "(boolean | null | number | string)",
                                value: elem,
                            }),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        const stringify = (input: AtomicUnion): string => {
            const $string = (typia.createAssertStringify as any).string;
            const $number = (typia.createAssertStringify as any).number;
            const $throws = (typia.createAssertStringify as any).throws;
            return `[${input
                .map((elem: any) =>
                    null !== elem
                        ? (() => {
                              if ("string" === typeof elem)
                                  return $string(elem);
                              if ("number" === typeof elem)
                                  return $number(elem);
                              if ("boolean" === typeof elem) return elem;
                              $throws({
                                  expected:
                                      "(boolean | null | number | string)",
                                  value: elem,
                              });
                          })()
                        : "null",
                )
                .join(",")}]`;
        };
        return stringify(assert(input));
    },
    AtomicUnion.SPOILERS,
);
