import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_is_ConstantIntersection = _test_is(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) => typia.is(input),
    ConstantIntersection.SPOILERS,
);
