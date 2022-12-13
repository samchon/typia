import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_DynamicEnumeration = _test_validateEquals(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createValidateEquals<DynamicEnumeration>(),
);