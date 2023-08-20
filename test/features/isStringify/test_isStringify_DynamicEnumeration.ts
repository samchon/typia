import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_isStringify_DynamicEnumeration = _test_isStringify(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.isStringify<DynamicEnumeration>(input),
    DynamicEnumeration.SPOILERS,
);
