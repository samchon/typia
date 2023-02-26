import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_random_ConstantEnumeration = _test_random(
    "ConstantEnumeration",
    () =>
        ((
            generator: Partial<typia.IRandomGenerator> = (typia.random as any)
                .generator,
        ): typia.Primitive<Array<ConstantEnumeration.Enumeration>> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            return (generator.array ?? $generator.array)(() =>
                $pick([
                    () => 0,
                    () => 1,
                    () => 2,
                    () => "Three",
                    () => "Four",
                ])(),
            );
        })(),
    (input: any): Array<ConstantEnumeration.Enumeration> => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ConstantEnumeration => {
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
