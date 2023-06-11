import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_isPrune_ConstantIntersection = _test_isPrune(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) =>
        ((
            input: any,
        ): input is [
            ConstantIntersection.Wrapper<false>,
            ConstantIntersection.Wrapper<1>,
            ConstantIntersection.Wrapper<"two">,
        ] => {
            const is = (
                input: any,
            ): input is [
                ConstantIntersection.Wrapper<false>,
                ConstantIntersection.Wrapper<1>,
                ConstantIntersection.Wrapper<"two">,
            ] => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    false === input[0] &&
                    1 === input[1] &&
                    "two" === input[2]
                );
            };
            const prune = (
                input: [
                    ConstantIntersection.Wrapper<false>,
                    ConstantIntersection.Wrapper<1>,
                    ConstantIntersection.Wrapper<"two">,
                ],
            ): void => {};
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ConstantIntersection.SPOILERS,
);
