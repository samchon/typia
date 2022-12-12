import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_DynamicEnumeration = _test_assertStringify(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createAssertStringify<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);