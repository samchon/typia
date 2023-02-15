import typia from "typia";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_DynamicEnumeration = _test_validateEquals(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.validateEquals(input),
);
