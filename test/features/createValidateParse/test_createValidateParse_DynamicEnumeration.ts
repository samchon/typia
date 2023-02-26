import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createValidateParse_DynamicEnumeration = _test_validateParse(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createValidateParse<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
