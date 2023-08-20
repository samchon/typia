import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_validateClone_ConstantIntersection = _test_validateClone(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) => typia.validateClone<ConstantIntersection>(input),
    ConstantIntersection.SPOILERS,
);
