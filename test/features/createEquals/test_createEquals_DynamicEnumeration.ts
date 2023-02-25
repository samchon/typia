import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_DynamicEnumeration = _test_equals(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createEquals<DynamicEnumeration>(),
);
