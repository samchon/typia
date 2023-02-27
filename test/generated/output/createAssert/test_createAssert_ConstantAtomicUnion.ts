import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createAssert_ConstantAtomicUnion = _test_assert(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input: any): ConstantAtomicUnion => {
        const $guard = (typia.createAssert as any).guard;
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
                            'Array<("four" | "three" | 1 | 2 | Resolve<__type> | false)>',
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
                                    '("four" | "three" | 1 | 2 | Resolve<__type> | false)',
                                value: elem,
                            })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true)),
                )
            );
        })(input, "$input", true);
        return input;
    },
    ConstantAtomicUnion.SPOILERS,
);
