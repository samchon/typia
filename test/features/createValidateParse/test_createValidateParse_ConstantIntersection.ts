import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createValidateParse_ConstantIntersection =
    _test_validateParse(
        "ConstantIntersection",
        ConstantIntersection.generate,
        typia.createValidateParse<ConstantIntersection>(),
        ConstantIntersection.SPOILERS,
    );
