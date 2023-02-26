import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_assertClone_ConstantEnumeration = _test_assertClone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<Array<ConstantEnumeration.Enumeration>> => {
            const assert = (input: any): ConstantEnumeration => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ConstantEnumeration => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    'Array<("Four" | "Three" | 0 | 1 | 2)>',
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                0 === elem ||
                                1 === elem ||
                                2 === elem ||
                                "Three" === elem ||
                                "Four" === elem ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: '("Four" | "Three" | 0 | 1 | 2)',
                                    value: elem,
                                }),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            const clone = (
                input: ConstantEnumeration,
            ): typia.Primitive<ConstantEnumeration> => {
                return Array.isArray(input)
                    ? input.map((elem: any) => elem as any)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    ConstantEnumeration.SPOILERS,
);
