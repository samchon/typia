import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_validatePrune_ConstantIntersection = _test_validatePrune(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) => typia.validatePrune(input),
    ConstantIntersection.SPOILERS,
);
