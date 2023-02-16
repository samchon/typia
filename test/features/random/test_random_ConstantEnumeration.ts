import typia from "typia";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_random } from "../internal/_test_random";

export const test_random_ConstantEnumeration = _test_random(
    "ConstantEnumeration",
    () => typia.random<ConstantEnumeration>(),
    typia.createAssert<typia.Primitive<ConstantEnumeration>>(),
);
