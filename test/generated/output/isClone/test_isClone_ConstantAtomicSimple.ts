import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_isClone_ConstantAtomicSimple = _test_isClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) =>
        ((input: any): typia.Primitive<[false, true, 2, "three"]> | null => {
            const is = (input: any): input is [false, true, 2, "three"] => {
                return (
                    Array.isArray(input) &&
                    input.length === 4 &&
                    false === input[0] &&
                    true === input[1] &&
                    2 === input[2] &&
                    "three" === input[3]
                );
            };
            const clone = (
                input: [false, true, 2, "three"],
            ): typia.Primitive<[false, true, 2, "three"]> => {
                return Array.isArray(input) &&
                    input.length === 4 &&
                    false === input[0] &&
                    true === input[1] &&
                    2 === input[2] &&
                    "three" === input[3]
                    ? ([
                          input[0] as any,
                          input[1] as any,
                          input[2] as any,
                          input[3] as any,
                      ] as any)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    ConstantAtomicSimple.SPOILERS,
);
