import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_isClone_ConstantIntersection = _test_isClone(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) => typia.isClone(input),
    ConstantIntersection.SPOILERS,
);
