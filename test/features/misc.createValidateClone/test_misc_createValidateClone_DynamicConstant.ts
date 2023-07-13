import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_validateClone_DynamicConstant = _test_misc_validateClone(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.misc.createValidateClone<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
