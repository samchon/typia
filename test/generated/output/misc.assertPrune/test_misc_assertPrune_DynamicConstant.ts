import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_misc_assertPrune_DynamicConstant = _test_misc_assertPrune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((input: any): { a: number; b: number; c: number; d: number } => {
            const assert = (
                input: any,
            ): { a: number; b: number; c: number; d: number } => {
                const __is = (
                    input: any,
                ): input is { a: number; b: number; c: number; d: number } => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "number" === typeof (input as any).a &&
                        Number.isFinite((input as any).a) &&
                        "number" === typeof (input as any).b &&
                        Number.isFinite((input as any).b) &&
                        "number" === typeof (input as any).c &&
                        Number.isFinite((input as any).c) &&
                        "number" === typeof (input as any).d &&
                        Number.isFinite((input as any).d)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is {
                        a: number;
                        b: number;
                        c: number;
                        d: number;
                    } => {
                        const $guard = (typia.misc.assertPrune as any).guard;
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
            };
            const prune = (input: {
                a: number;
                b: number;
                c: number;
                d: number;
            }): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "a" === key ||
                            "b" === key ||
                            "c" === key ||
                            "d" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    DynamicConstant.SPOILERS,
);
