import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_DynamicEnumeration = _test_isStringify(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.isStringify(input),
    DynamicEnumeration.SPOILERS,
);
