import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_createIsParse_ConstantIntersection = _test_isParse(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input: any): typia.Primitive<ConstantIntersection> => {
        const is = (input: any): input is ConstantIntersection => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                false === input[0] &&
                1 === input[1] &&
                "two" === input[2]
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    ConstantIntersection.SPOILERS,
);
