import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_createAssertStringify_AtomicAlias = _test_assertStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    (input: any): string => {
        const assert: any = (input: any): AtomicAlias => {
            const __is: any = (input: any): input is AtomicAlias => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    "string" === typeof input[2]
                );
            };
            const $guard: any = (typia.createAssertStringify as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is AtomicAlias => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "AtomicAlias",
                                value: input,
                            })) &&
                        (input.length === 3 ||
                            $guard(true, {
                                path: _path + "",
                                expected: "[boolean, number, string]",
                                value: input,
                            })) &&
                        ("boolean" === typeof input[0] ||
                            $guard(true, {
                                path: _path + "[0]",
                                expected: "boolean",
                                value: input[0],
                            })) &&
                        (("number" === typeof input[1] &&
                            Number.isFinite(input[1])) ||
                            $guard(true, {
                                path: _path + "[1]",
                                expected: "number",
                                value: input[1],
                            })) &&
                        ("string" === typeof input[2] ||
                            $guard(true, {
                                path: _path + "[2]",
                                expected: "string",
                                value: input[2],
                            }))
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify: any = (input: AtomicAlias): string => {
            const $number: any = (typia.createAssertStringify as any).number;
            const $string: any = (typia.createAssertStringify as any).string;
            return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
        };
        return stringify(assert(input));
    },
    AtomicAlias.SPOILERS,
);
