import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_misc_clone_ConstantIntersection = _test_misc_clone(
    "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)((input) =>
    ((input: ConstantIntersection): typia.Primitive<ConstantIntersection> => {
        return Array.isArray(input) &&
            input.length === 3 &&
            false === input[0] &&
            1 === input[1] &&
            "two" === input[2]
            ? ([input[0] as any, input[1] as any, input[2] as any] as any)
            : (input as any);
    })(input),
);
