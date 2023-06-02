import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_random } from "../../internal/_test_random";

export const test_random_DynamicJsonValue = _test_random(
    "DynamicJsonValue",
    () => typia.random<DynamicJsonValue>(),
typia.createAssert<typia.Primitive<DynamicJsonValue>>(),
);
