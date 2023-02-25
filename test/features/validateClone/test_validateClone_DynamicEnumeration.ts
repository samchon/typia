import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_DynamicEnumeration = _test_validateClone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.validateClone(input),
    DynamicEnumeration.SPOILERS,
);
