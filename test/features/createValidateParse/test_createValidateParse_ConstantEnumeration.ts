import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ConstantEnumeration = _test_validateParse(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createValidateParse<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
