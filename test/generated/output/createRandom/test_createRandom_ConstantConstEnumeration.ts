import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_createRandom_ConstantConstEnumeration = _test_random(
    "ConstantConstEnumeration",
    (
        generator: Partial<typia.IRandomGenerator> = (typia.createRandom as any)
            .generator,
    ): typia.Primitive<ConstantConstEnumeration> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        return (generator.array ?? $generator.array)(() =>
            $pick([() => 0, () => 1, () => 2, () => "Three", () => "Four"])(),
        );
    },
    (input: any): ConstantConstEnumeration => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ConstantConstEnumeration => {
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
