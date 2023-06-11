import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createIsClone_ConstantIntersection = _test_isClone(
    "ConstantIntersection",
    ConstantIntersection.generate,
    typia.createIsClone<ConstantIntersection>(),
    ConstantIntersection.SPOILERS,
);
