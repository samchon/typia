import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_DynamicJsonValue = _test_random(
    "DynamicJsonValue",
    typia.createRandom<DynamicJsonValue>(),
typia.createAssert<typia.Primitive<DynamicJsonValue>>(),
);
