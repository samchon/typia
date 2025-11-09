import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_is_DynamicEnumeration = (): void => _test_is(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)((input) => typia.is<DynamicEnumeration>(input));
