import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_assertPrune_ConstantAtomicSimple = _test_assertPrune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) =>
        ((input: any): [false, true, 2, "three"] => {
            const assert = (input: any): [false, true, 2, "three"] => {
                const $guard = (typia.assertPrune as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is [false, true, 2, "three"] => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: '[false, true, 2, "three"]',
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
            };
            const prune = (input: [false, true, 2, "three"]): void => {};
            assert(input);
            prune(input);
            return input;
        })(input),
    ConstantAtomicSimple.SPOILERS,
);
