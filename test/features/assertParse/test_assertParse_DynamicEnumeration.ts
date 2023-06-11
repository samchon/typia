import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assertParse_DynamicEnumeration = _test_assertParse(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.assertParse<DynamicEnumeration>(input),
    DynamicEnumeration.SPOILERS,
);
