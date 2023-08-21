import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_random_ConstantAtomicUnion = _test_random(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ConstantAtomicUnion> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            key: "key",
        });
        return (generator?.array ?? $generator.array)(() =>
            $pick([
                () => false,
                () => 2,
                () => 1,
                () => "three",
                () => "four",
                () => $ro0(),
            ])(),
        );
    },
    assert: (input: any): ConstantAtomicUnion => {
        const __is = (input: any): input is ConstantAtomicUnion => {
            const $io0 = (input: any): boolean => "key" === input.key;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        (false === elem ||
                            2 === elem ||
                            1 === elem ||
                            "three" === elem ||
                            "four" === elem ||
                            ("object" === typeof elem &&
                                null !== elem &&
                                $io0(elem))),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ConstantAtomicUnion => {
                const $guard = (typia.createAssert as any).guard;
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
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ConstantAtomicUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (null !== elem ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            '("four" | "three" | 1 | 2 | __type | false)',
                                        value: elem,
                                    })) &&
                                (undefined !== elem ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            '("four" | "three" | 1 | 2 | __type | false)',
                                        value: elem,
                                    })) &&
                                (false === elem ||
                                    2 === elem ||
                                    1 === elem ||
                                    "three" === elem ||
                                    "four" === elem ||
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
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
                                        )) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            '("four" | "three" | 1 | 2 | __type | false)',
                                        value: elem,
                                    })),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ConstantAtomicUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
