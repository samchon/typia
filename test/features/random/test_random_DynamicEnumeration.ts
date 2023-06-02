import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_random } from "../../internal/_test_random";

export const test_random_DynamicEnumeration = _test_random(
    "DynamicEnumeration",
    () => typia.random<DynamicEnumeration>(),
typia.createAssert<typia.Primitive<DynamicEnumeration>>(),
);
