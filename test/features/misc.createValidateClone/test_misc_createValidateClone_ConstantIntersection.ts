import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_validateClone_ConstantIntersection =
    _test_misc_validateClone(
        "ConstantIntersection",
        ConstantIntersection.generate,
        typia.misc.createValidateClone<ConstantIntersection>(),
        ConstantIntersection.SPOILERS,
    );
