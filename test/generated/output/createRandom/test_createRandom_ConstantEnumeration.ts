import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_createRandom_ConstantEnumeration = _test_random(
    "ConstantEnumeration",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ConstantEnumeration> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        return (generator?.array ?? $generator.array)(() =>
            $pick([() => 0, () => 1, () => 2, () => "Three", () => "Four"])(),
        );
    },
    (input: any): typia.Primitive<ConstantEnumeration> => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (
            input: any,
        ): input is typia.Primitive<ConstantEnumeration> => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        0 === elem ||
                        1 === elem ||
                        2 === elem ||
                        "Three" === elem ||
                        "Four" === elem,
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ConstantEnumeration> => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: 'Array<("Four" | "Three" | 0 | 1 | 2)>',
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
    },
);
