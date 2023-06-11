import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_DynamicEnumeration = _test_assertClone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.assertClone(input),
    DynamicEnumeration.SPOILERS,
);
