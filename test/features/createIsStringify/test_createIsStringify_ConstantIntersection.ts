import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createIsStringify_ConstantIntersection = _test_isStringify(
    "ConstantIntersection",
    ConstantIntersection.generate,
    typia.createIsStringify<ConstantIntersection>(),
    ConstantIntersection.SPOILERS,
);
