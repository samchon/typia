import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_random_ConstantConstEnumeration = _test_random(
    "ConstantConstEnumeration",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<ConstantConstEnumeration> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            return (generator?.array ?? $generator.array)(() =>
                $pick([
                    () => 0,
                    () => 1,
                    () => 2,
                    () => "Three",
                    () => "Four",
                ])(),
            );
        })(),
    (input: any): typia.Primitive<ConstantConstEnumeration> => {
        const __is = (
            input: any,
        ): input is typia.Primitive<ConstantConstEnumeration> => {
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
            ): input is typia.Primitive<ConstantConstEnumeration> => {
                const $guard = (typia.createAssert as any).guard;
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ConstantConstEnumeration",
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
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ConstantConstEnumeration",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
