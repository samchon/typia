import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicEnumeration = _test_assertStringify(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => TSON.assertStringify(input),
    DynamicEnumeration.SPOILERS,
);