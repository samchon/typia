import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_DynamicEnumeration = _test_validateParse(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createValidateParse<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
