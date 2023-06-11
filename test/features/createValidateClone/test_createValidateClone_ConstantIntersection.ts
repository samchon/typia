import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createValidateClone_ConstantIntersection =
    _test_validateClone(
        "ConstantIntersection",
        ConstantIntersection.generate,
        typia.createValidateClone<ConstantIntersection>(),
        ConstantIntersection.SPOILERS,
    );
