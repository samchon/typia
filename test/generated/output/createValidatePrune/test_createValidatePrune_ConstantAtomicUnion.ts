import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createValidatePrune_ConstantAtomicUnion = _test_validatePrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input: any): typia.IValidation<ConstantAtomicUnion> => {
        const validate: any = (
            input: any,
        ): typia.IValidation<ConstantAtomicUnion> => {
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
            const errors: any = [] as any[];
            const $report: any = (typia.createValidatePrune as any).report(
                errors,
            );
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ConstantAtomicUnion => {
                    const $vo0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "key" === input.key ||
                                $report(_exceptionable, {
                                    path: _path + ".key",
                                    expected: '"key"',
                                    value: input.key,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ConstantAtomicUnion",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        false === elem ||
                                        1 === elem ||
                                        2 === elem ||
                                        "three" === elem ||
                                        "four" === elem ||
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    '("four" | "three" | 1 | 2 | __type | false)',
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                '("four" | "three" | 1 | 2 | __type | false)',
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ConstantAtomicUnion",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success: any = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
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
        const output: any = validate(input);
        if (output.success) prune(input);
        return output;
    },
    ConstantAtomicUnion.SPOILERS,
);
