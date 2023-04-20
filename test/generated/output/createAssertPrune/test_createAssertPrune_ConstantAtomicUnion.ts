import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createAssertPrune_ConstantAtomicUnion = _test_assertPrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input: any): ConstantAtomicUnion => {
        const assert = (input: any): ConstantAtomicUnion => {
            const $guard = (typia.createAssertPrune as any).guard;
            const __is = (input: any): input is ConstantAtomicUnion => {
                const $io0 = (input: any): boolean => "key" === input.key;
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
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ConstantAtomicUnion => {
                    const $ao0 = (
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
                                expected:
                                    'Array<("four" | "three" | 1 | 2 | __type | false)>',
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
        const prune = (input: ConstantAtomicUnion): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("key" === key) continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
        };
        assert(input);
        prune(input);
        return input;
    },
    ConstantAtomicUnion.SPOILERS,
);
