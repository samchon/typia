import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assertClone_DynamicEnumeration = _test_assertClone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.assertClone(input),
    DynamicEnumeration.SPOILERS,
);
