import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_assertStringify_TupleRestAtomic = _test_assertStringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) =>
        ((input: any): string => {
            const assert: any = (
                input: any,
            ): [boolean, number, ...string[]] => {
                const __is: any = (
                    input: any,
                ): input is [boolean, number, ...string[]] => {
                    return (
                        Array.isArray(input) &&
                        "boolean" === typeof input[0] &&
                        "number" === typeof input[1] &&
                        Number.isFinite(input[1]) &&
                        Array.isArray(input.slice(2)) &&
                        input
                            .slice(2)
                            .every((elem: any) => "string" === typeof elem)
                    );
                };
                const $guard: any = (typia.assertStringify as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is [boolean, number, ...string[]] => {
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TupleRestAtomic",
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
                            (Array.isArray(input.slice(2)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "...string",
                                    value: input.slice(2),
                                })) &&
                            input.slice(2).every(
                                (elem: any, _index1: number) =>
                                    "string" === typeof elem ||
                                    $guard(true, {
                                        path: _path + "[" + (2 + _index1) + "]",
                                        expected: "string",
                                        value: elem,
                                    }),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify: any = (
                input: [boolean, number, ...string[]],
            ): string => {
                const $number: any = (typia.assertStringify as any).number;
                const $string: any = (typia.assertStringify as any).string;
                const $rest: any = (typia.assertStringify as any).rest;
                return `[${input[0]},${$number(input[1])}${$rest(
                    (() =>
                        `[${input
                            .slice(2)
                            .map((elem: any) => $string(elem))
                            .join(",")}]`)(),
                )}]`;
            };
            return stringify(assert(input));
        })(input),
    TupleRestAtomic.SPOILERS,
);
