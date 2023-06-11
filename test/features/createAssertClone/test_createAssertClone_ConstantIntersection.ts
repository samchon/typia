import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createAssertClone_ConstantIntersection = _test_assertClone(
    "ConstantIntersection",
    ConstantIntersection.generate,
    typia.createAssertClone<ConstantIntersection>(),
    ConstantIntersection.SPOILERS,
);
