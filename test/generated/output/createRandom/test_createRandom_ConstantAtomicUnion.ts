import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createRandom_ConstantAtomicUnion = _test_random(
    "ConstantAtomicUnion",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ConstantAtomicUnion> => {
        const $generator: any = (typia.createRandom as any).generator;
        const $pick: any = (typia.createRandom as any).pick;
        const $ro0: any = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            key: "key",
        });
        return (generator?.array ?? $generator.array)(() =>
            $pick([
                () => false,
                () => 1,
                () => 2,
                () => "three",
                () => "four",
                () => $ro0(),
            ])(),
        );
    },
    (input: any): typia.Primitive<ConstantAtomicUnion> => {
        const __is: any = (
            input: any,
        ): input is typia.Primitive<ConstantAtomicUnion> => {
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
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ConstantAtomicUnion> => {
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
                                $ao0(elem, _path + "[" + _index1 + "]", true)),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
