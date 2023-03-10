import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createValidateClone_DynamicEnumeration = _test_validateClone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createValidateClone<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
