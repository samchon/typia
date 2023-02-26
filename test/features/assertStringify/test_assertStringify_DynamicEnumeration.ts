import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assertStringify_DynamicEnumeration = _test_assertStringify(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.assertStringify(input),
    DynamicEnumeration.SPOILERS,
);
