import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_assertPrune_ConstantIntersection = _test_assertPrune(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) => typia.assertPrune(input),
    ConstantIntersection.SPOILERS,
);
