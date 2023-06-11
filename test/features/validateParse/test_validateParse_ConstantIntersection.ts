import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_validateParse_ConstantIntersection = _test_validateParse(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) => typia.validateParse<ConstantIntersection>(input),
    ConstantIntersection.SPOILERS,
);
