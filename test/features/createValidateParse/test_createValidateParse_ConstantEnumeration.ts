import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createValidateParse_ConstantEnumeration = _test_validateParse(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createValidateParse<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
