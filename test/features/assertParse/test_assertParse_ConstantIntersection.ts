import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_assertParse_ConstantIntersection = _test_assertParse(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) => typia.assertParse<ConstantIntersection>(input),
    ConstantIntersection.SPOILERS,
);
