import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_assert_ConstantIntersection = _test_assert(
    "ConstantIntersection",
    ConstantIntersection.generate,
    typia.createAssert<ConstantIntersection>(),
    ConstantIntersection.SPOILERS,
);
