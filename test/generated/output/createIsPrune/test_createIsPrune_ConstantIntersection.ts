import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_createIsPrune_ConstantIntersection = _test_isPrune(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input: any): input is ConstantIntersection => {
        const is = (input: any): input is ConstantIntersection => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                false === input[0] &&
                1 === input[1] &&
                "two" === input[2]
            );
        };
        const prune = (input: ConstantIntersection): void => {};
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    ConstantIntersection.SPOILERS,
);
