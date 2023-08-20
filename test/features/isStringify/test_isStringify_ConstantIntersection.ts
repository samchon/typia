import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_isStringify_ConstantIntersection = _test_isStringify(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) => typia.isStringify<ConstantIntersection>(input),
    ConstantIntersection.SPOILERS,
);
