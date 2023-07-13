import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_isClone_ConstantIntersection = _test_misc_isClone(
    "ConstantIntersection",
    ConstantIntersection.generate,
    typia.misc.createIsClone<ConstantIntersection>(),
    ConstantIntersection.SPOILERS,
);
