import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_assertStringify_ConstantIntersection = _test_assertStringify(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) => typia.assertStringify(input),
    ConstantIntersection.SPOILERS,
);
