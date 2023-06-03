import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_assert_DynamicConstant = _test_assert(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((input: any): { a: number; b: number; c: number; d: number } => {
            const __is = (
                input: any,
            ): input is { a: number; b: number; c: number; d: number } => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.a &&
                    Number.isFinite(input.a) &&
                    "number" === typeof input.b &&
                    Number.isFinite(input.b) &&
                    "number" === typeof input.c &&
                    Number.isFinite(input.c) &&
                    "number" === typeof input.d &&
                    Number.isFinite(input.d);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is { a: number; b: number; c: number; d: number } => {
                    const $guard = (typia.assert as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.a &&
                            Number.isFinite(input.a)) ||
                            $guard(_exceptionable, {
                                path: _path + ".a",
                                expected: "number",
                                value: input.a,
                            })) &&
                        (("number" === typeof input.b &&
                            Number.isFinite(input.b)) ||
                            $guard(_exceptionable, {
                                path: _path + ".b",
                                expected: "number",
                                value: input.b,
                            })) &&
                        (("number" === typeof input.c &&
                            Number.isFinite(input.c)) ||
                            $guard(_exceptionable, {
                                path: _path + ".c",
                                expected: "number",
                                value: input.c,
                            })) &&
                        (("number" === typeof input.d &&
                            Number.isFinite(input.d)) ||
                            $guard(_exceptionable, {
                                path: _path + ".d",
                                expected: "number",
                                value: input.d,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicConstant",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "DynamicConstant",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        })(input),
    DynamicConstant.SPOILERS,
);
