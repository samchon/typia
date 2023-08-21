import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_equals_ConstantIntersection = _test_equals(
    "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)(
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is ConstantIntersection => {
        return (
            Array.isArray(input) &&
            input.length === 3 &&
            false === input[0] &&
            1 === input[1] &&
            "two" === input[2]
        );
    },
);
