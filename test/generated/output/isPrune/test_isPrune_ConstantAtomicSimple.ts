import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_isPrune_ConstantAtomicSimple = _test_isPrune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) =>
        ((input: any): input is [false, true, 2, "three"] => {
            const is: any = (
                input: any,
            ): input is [false, true, 2, "three"] => {
                return (
                    Array.isArray(input) &&
                    input.length === 4 &&
                    false === input[0] &&
                    true === input[1] &&
                    2 === input[2] &&
                    "three" === input[3]
                );
            };
            const prune: any = (input: [false, true, 2, "three"]): void => {};
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ConstantAtomicSimple.SPOILERS,
);
