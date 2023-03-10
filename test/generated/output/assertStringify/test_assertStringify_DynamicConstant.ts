import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_assertStringify_DynamicConstant = _test_assertStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((input: any): string => {
            const assert = (
                input: any,
            ): { a: number; b: number; c: number; d: number } => {
                const $guard = (typia.assertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is { a: number; b: number; c: number; d: number } => {
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
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicConstant",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: {
                a: number;
                b: number;
                c: number;
                d: number;
            }): string => {
                const $number = (typia.assertStringify as any).number;
                const $so0 = (input: any): any =>
                    `{"a":${$number(input.a)},"b":${$number(
                        input.b,
                    )},"c":${$number(input.c)},"d":${$number(input.d)}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        })(input),
    DynamicConstant.SPOILERS,
);
