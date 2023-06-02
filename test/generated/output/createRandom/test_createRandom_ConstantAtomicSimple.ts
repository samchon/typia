import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_createRandom_ConstantAtomicSimple = _test_random(
    "ConstantAtomicSimple",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ConstantAtomicSimple> => {
        return [false, true, 2, "three"];
    },
    (input: any): typia.Primitive<ConstantAtomicSimple> => {
        const __is: any = (
            input: any,
        ): input is typia.Primitive<ConstantAtomicSimple> => {
            return (
                Array.isArray(input) &&
                input.length === 4 &&
                false === input[0] &&
                true === input[1] &&
                2 === input[2] &&
                "three" === input[3]
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ConstantAtomicSimple> => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ConstantAtomicSimple",
                            value: input,
                        })) &&
                    (input.length === 4 ||
                        $guard(true, {
                            path: _path + "",
                            expected: '[false, true, 2, "three"]',
                            value: input,
                        })) &&
                    (false === input[0] ||
                        $guard(true, {
                            path: _path + "[0]",
                            expected: "false",
                            value: input[0],
                        })) &&
                    (true === input[1] ||
                        $guard(true, {
                            path: _path + "[1]",
                            expected: "true",
                            value: input[1],
                        })) &&
                    (2 === input[2] ||
                        $guard(true, {
                            path: _path + "[2]",
                            expected: "2",
                            value: input[2],
                        })) &&
                    ("three" === input[3] ||
                        $guard(true, {
                            path: _path + "[3]",
                            expected: '"three"',
                            value: input[3],
                        }))
                );
            })(input, "$input", true);
        return input;
    },
);
