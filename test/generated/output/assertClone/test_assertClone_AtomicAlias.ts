import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_assertClone_AtomicAlias = _test_assertClone(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) =>
        ((input: any): typia.Primitive<[boolean, number, string]> => {
            const assert: any = (input: any): [boolean, number, string] => {
                const __is: any = (
                    input: any,
                ): input is [boolean, number, string] => {
                    return (
                        Array.isArray(input) &&
                        input.length === 3 &&
                        "boolean" === typeof input[0] &&
                        "number" === typeof input[1] &&
                        Number.isFinite(input[1]) &&
                        "string" === typeof input[2]
                    );
                };
                const $guard: any = (typia.assertClone as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is [boolean, number, string] => {
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
            const clone: any = (
                input: [boolean, number, string],
            ): typia.Primitive<[boolean, number, string]> => {
                return Array.isArray(input) &&
                    input.length === 3 &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    "string" === typeof input[2]
                    ? ([
                          input[0] as any,
                          input[1] as any,
                          input[2] as any,
                      ] as any)
                    : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
    AtomicAlias.SPOILERS,
);
