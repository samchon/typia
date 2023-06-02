import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createAssertPrune_ConstantAtomicUnion = _test_assertPrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input: any): ConstantAtomicUnion => {
        const assert: any = (input: any): ConstantAtomicUnion => {
            const __is: any = (input: any): input is ConstantAtomicUnion => {
                const $io0: any = (input: any): boolean => "key" === input.key;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            false === elem ||
                            1 === elem ||
                            2 === elem ||
                            "three" === elem ||
                            "four" === elem ||
                            ("object" === typeof elem &&
                                null !== elem &&
                                $io0(elem)),
                    )
                );
            };
            const $guard: any = (typia.createAssertPrune as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ConstantAtomicUnion => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "key" === input.key ||
                        $guard(_exceptionable, {
                            path: _path + ".key",
                            expected: '"key"',
                            value: input.key,
                        });
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ConstantAtomicUnion",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                false === elem ||
                                1 === elem ||
                                2 === elem ||
                                "three" === elem ||
                                "four" === elem ||
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            '("four" | "three" | 1 | 2 | __type | false)',
                                        value: elem,
                                    })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const prune: any = (input: ConstantAtomicUnion): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("key" === key) continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                (() =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    }))();
        };
        assert(input);
        prune(input);
        return input;
    },
    ConstantAtomicUnion.SPOILERS,
);
